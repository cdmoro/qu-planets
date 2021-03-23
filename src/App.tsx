import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { IResponse } from './definitions/IResponse';
import { IPlanet } from './definitions/IPlanet';
import { stringToColor } from './utils/stringToColor';

const App: FC = () => {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(value => value + 1);
    fetchData(page);
  };
  
  const prevPage = () => {
    if (page > 1) {
      setPage(value => value - 1);
      fetchData(page);
    }
  };
  
  const fetchData = async (page = 1) => {
    const URL = `https://swapi.dev/api/planets?page=${page}`;
    setLoading(true);

    try {
      const r = await fetch(URL);
      const data: IResponse<IPlanet> = await r.json()

      setPlanets(data.results);
    } catch (error) {
        // setError('Bad request')
    } finally {
      setLoading(false)
    }
  };

  const resolveStyle = (planetName: string): CSSProperties => {
    return {
      backgroundColor: stringToColor(planetName)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="min-h-screen bg-gray-600 App">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-3">
          <button onClick={prevPage} disabled={page <= 1}>Previous page</button>
          <div>Page: { page }</div>
          <button onClick={nextPage}>Next page</button>
        </div>
        {
          loading ? (
            "Loading"
          ) : 
          <div className="flex flex-wrap justify-center planets-container">
          {
            planets.map((planet: IPlanet) => (
              <div className="w-full sm:w-2/4 md:w-3/12 planet-card-wrapper" key={planet.name}>
                <div className="m-5 bg-white rounded-md shadow-md card">
                  <div className="relative flex justify-center p-6 overflow-hidden text-center bg-gradient-to-t from-blue-900 to-black h-36 rounded-t-md">
                    <div className="absolute inset-0 starts" style={{
                    "backgroundImage": "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px), radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px), radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px), radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px)",
                    "backgroundSize": "550px 550px, 350px 350px, 250px 250px, 150px 150px",
                    "backgroundPosition": "0 0, 40px 60px, 130px 270px, 70px 100px"
                  }}/>
                    <div 
                      className="relative w-16 h-16 rounded-full p-28 card-planet group-hover:p-4" 
                      style={resolveStyle(planet.name)}
                    />
                  </div>
                  <div className="p-4 card-body">
                    <h3 className="font-bold uppercase">{ planet.name }</h3>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        }
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
  );
}

export default App;
