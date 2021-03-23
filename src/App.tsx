import React, { FC } from "react"
import { IPlanet } from "./definitions/IPlanet"
import PlanetCard from "./components/PlanetCard"
import { useFetch } from "./hooks/useFetch"
import { IResponse } from "./definitions/IResponse"
import { useLocalStorage } from "./hooks/useLocalStorage"

const App: FC = () => {
  const [url, setUrl] = useLocalStorage("url", "https://swapi.dev/api/planets?page=1&format=json")
  const [data, loading] = useFetch<IResponse<IPlanet>>(url);

  return (
    <div className="min-h-screen bg-gray-900 App">
      <div className="py-20 font-bold text-center text-yellow-300 header">
        <div className="flex justify-center header--text-opening">
          <div className="w-2/3 header--text-wrapper">
            <h1 className="text-2xl">QU CHALLENGE I</h1>
            <h1 className="text-7xl">STAR WARS</h1>
            <h2 className="text-2xl text-justify">It is a period of civil wars. Rebel spaceships, striking from a hidden base</h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex content-center justify-center space-x-3">
          <button
            className="btn btn-blue"
            onClick={() => setUrl(data.previous as string)}
            disabled={loading || data?.previous === null}
          >
            Previous page
          </button>
          <div className="flex items-center text-gray-900 bg-white">
            Page: {url.substr(-1)}
          </div>
          <button
            className="btn btn-blue"
            onClick={() => setUrl(data.next as string)}
            disabled={loading || data?.next === null}
          >
            Next page
          </button>
        </div>
        {loading ? (
          "Loading"
        ) : (
          <div className="flex flex-wrap justify-center planets-container">
            {data?.results.map((planet: IPlanet) => (
              <div
                className="w-full sm:w-2/4 md:w-3/12 planet-card-wrapper"
                key={planet.name}
              >
                <PlanetCard planet={planet} />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* <table>
        <tbody>
          {
            planets.map((planet: IPlanet) => (
              <tr>
                <td>{ planet.name }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.films }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.population }</td>
                <td>{ planet.residents }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.url }</td>
              </tr>
            ))
          }
        </tbody>
      </table> */}
    </div>
  )
}

export default App