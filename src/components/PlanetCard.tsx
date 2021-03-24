import React, { CSSProperties, FC } from "react"
import { IPlanet } from "../definitions/IPlanet"
import { stringToColor } from "../utils/stringToColor"
import { getRandomInt } from "../utils/getRandomInt"
import { normalizeValue } from "../utils/normalizeValue"

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

  const resolvePlanetStyle = (planet: IPlanet): CSSProperties => {
    const rotation_time = planet.rotation_period === 'unknown' ? '0' : `${(( parseInt(planet.rotation_period) *13)/87)}s`;
    const size =
      planet.diameter === "unknown" || planet.diameter === "0"
        ? "1"
        : normalizeValue(parseInt(planet.diameter), 118000, 4200) + 1

    const planetNumber = planet.terrain.split(', ').length

    const planetType = `url('./textures/planet-${planetNumber}.jpg')`
    const hue = (normalizeValue(parseInt(planet.surface_water), 0, 100) + 1) * 360
    const contrast = (normalizeValue(parseInt(planet.surface_water), 0, 100) + 0.1) * 270

    return {
      backgroundColor: stringToColor(planet.name),
      backgroundImage: planetType,
      backgroundSize: "cover",
      animationDuration: rotation_time,
      transform: `scale(${size}) rotateZ(${hue}deg)`,
      filter: `hue-rotate(${hue}deg) contrast(${contrast}%)`,
    }
  }

  return (
    <a
      href={planet.url}
      target="_blank"
      className={(className || "") + " block bg-white rounded-md shadow-md card group"}
      rel="noreferrer"
    >
      <div className="relative flex justify-center p-6 overflow-hidden text-center bg-gradient-to-t from-blue-900 to-black h-36 rounded-t-md">
        <div
          className="absolute inset-0 card__space-bg"
          style={resolveSpaceStyle(planet)}
        />
        <div
          className="relative w-16 h-16 p-20 transition-all duration-200 rounded-full card__planet group-hover:p-12"
          style={resolvePlanetStyle(planet)}
        />
      </div>
      <div className="p-4 card-body">
        <h3 className="text-xl font-bold uppercase md:text-2xl">{planet.name}</h3>
        <p>{planet.diameter} km</p>
        <p>{planet.population} inhabitants</p>
        <p>{planet.rotation_period} hours/day </p>
      </div>
    </a>
  )
}

export default PlanetCard
