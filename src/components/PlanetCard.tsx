import React, { CSSProperties, FC } from "react"
import { IPlanet } from "../definitions/IPlanet"
import { stringToColor } from "../utils/stringToColor"

interface PlanetProps {
  planet: IPlanet
}

const PlanetCard: FC<PlanetProps> = ({ planet }) => {
  const resolveStyle = (planetName: string): CSSProperties => {
    return {
      backgroundColor: stringToColor(planetName),
    }
  }

  return (
    <a
      href={planet.url}
      target="_blank"
      className="block m-5 bg-white rounded-md shadow-md card group"
      rel="noreferrer"
    >
      <div className="relative flex justify-center p-6 overflow-hidden text-center bg-gradient-to-t from-blue-900 to-black h-36 rounded-t-md">
        <div
          className="absolute inset-0 starts"
          style={{
            backgroundImage:
              "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px), radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px), radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px), radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px)",
            backgroundSize:
              "550px 550px, 350px 350px, 250px 250px, 150px 150px",
            backgroundPosition: "0 0, 40px 60px, 130px 270px, 70px 100px",
          }}
        />
        <div
          className="relative w-16 h-16 transition-all duration-200 rounded-full p-28 card-planet group-hover:p-8"
          style={resolveStyle(planet.name)}
        />
      </div>
      <div className="p-4 card-body">
        <h3 className="font-bold uppercase">{planet.name}</h3>
      </div>
    </a>
  )
}

export default PlanetCard
