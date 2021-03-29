import React, { CSSProperties, FC } from "react"
import { IPlanet } from "../definitions/IPlanet"
import { getRandomInt } from "../utils/getRandomInt"
import Planet from "./Planet"

interface PlanetProps {
  className?: string,
  planet: IPlanet,
}

const PlanetCard: FC<PlanetProps> = ({ className, planet }) => {
  const resolveSpaceStyle = (planet: IPlanet): CSSProperties => {
    return {
      backgroundImage: `url(./textures/space.jpg)`,
      opacity: "0.4",
      backgroundSize: `${getRandomInt(300, 500)}px`,
      backgroundPosition: `${getRandomInt(0, 500)}px`,
    }
  }

  return (
    <a
      href={planet.url}
      target="_blank"
      className={
        (className || "") + " block bg-white rounded-md shadow-md card"
      }
      rel="noreferrer"
    >
      <div className="relative flex justify-center p-6 overflow-hidden text-center bg-gradient-to-t from-blue-900 to-black h-36 rounded-t-md">
        <div
          className="absolute inset-0 card__space-bg"
          style={resolveSpaceStyle(planet)}
        />
        <Planet { ...planet } />
      </div>
      <div className="p-4 card-body">
        <h3 className="text-xl font-bold uppercase md:text-2xl">
          {planet.name}
        </h3>
        <p>{planet.diameter} km</p>
        <p>{planet.population} inhabitants</p>
        <p>{planet.rotation_period} hours/day </p>
      </div>
    </a>
  )
}

export default PlanetCard
