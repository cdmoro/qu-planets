import React, { FC, useEffect, useState } from 'react'
import { IPlanet } from '../definitions/IPlanet'
import { IResponse } from '../definitions/IResponse'
import { useFetch } from '../hooks/useFetch'
import { useLocalStorage } from '../hooks/useLocalStorage'
import PlanetCard from './PlanetCard'

const Home: FC = () => {
    const [url, setUrl] = useLocalStorage(
      "url",
      "https://swapi.dev/api/planets?page=1"
    )
    const [data, loading] = useFetch<IResponse<IPlanet>>(url)
    const [planets, setPlanets] = useState<IPlanet[]>([])
    const [orderBy, setOrderBy] = useState<keyof IPlanet>('name')
    const [sortDesc, setSortDesc] = useState(false);

    useEffect(() => {
        const _planets = data?.results

        _planets?.sort((a, b) => {
            const _a = a[orderBy]
            const _b = b[orderBy]
            const _sort = sortDesc ? -1 : 1

            if (parseInt(_a as string)) {
                return (parseInt(_a as string) - parseInt(_b as string)) * _sort
            }
            
            return (_a > _b ? -1 : _a < _b ? 1 : 0) * _sort
        })
        
        setPlanets(_planets)
    }, [data, orderBy, sortDesc])

    return (
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center content-center justify-between px-5 md:flex-row">
          <div className="flex mt-4 md:mt-0 flex-nowrap">
            <button
              className="rounded-l-md btn btn--blue"
              onClick={() => setUrl(data.previous as string)}
              disabled={loading || data?.previous === null}
            >
              Previous page
            </button>
            <div className="flex items-center px-3 text-gray-900 bg-white">
              Page {url.substr(-1)}
            </div>
            <button
              className="rounded-r-md btn btn--blue"
              onClick={() => setUrl(data.next as string)}
              disabled={loading || data?.next === null}
            >
              Next page
            </button>
          </div>
          <div className="flex">
            <select 
                className="px-3 py-2 bg-white border border-gray-300 shadow-sm rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value as keyof IPlanet)}
                disabled={loading}
            >
              <option value="name">Name</option>
              <option value="diameter">Diameter</option>
              <option value="rotation_period">Rotation period</option>
              <option value="population">Population</option>
            </select>
            <button className="btn btn--blue rounded-r-md" onClick={() => setSortDesc(!sortDesc)} disabled={loading}>
                { sortDesc ? 'Desc' : 'Asc'}
            </button>
          </div>
        </div>
        {loading ? (
          <div className="h-screen pt-32 text-3xl text-center text-white">LOADING...</div>
        ) : (
          <div className="flex flex-wrap justify-center planets-container">
            {planets.map((planet: IPlanet) => (
              <div
                className="w-full sm:w-2/4 md:w-1/3 planet-card-wrapper"
                key={planet.name}
              >
                <PlanetCard className="m-5" planet={planet} />
              </div>
            ))}
          </div>
        )}
      </div>
    )
}

export {
    Home
}
