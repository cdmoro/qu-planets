import React, { FC } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"

const App: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-black to-gray-900 App">
      <Header />
      <Home />
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
      <Footer />
    </div>
  )
}

export default App