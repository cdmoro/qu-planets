import React, { CSSProperties, FC } from "react"
import { IPlanet } from "../definitions/IPlanet"
import { stringToColor } from "../utils/stringToColor"

interface PlanetProps {
  className?: string,
  planet: IPlanet,
}

const PlanetCard: FC<PlanetProps> = ({ className, planet }) => {
  const spaceBgStyles = {
    backgroundImage:
      "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px), radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px), radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px), radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px)",
    backgroundSize:
      "550px 550px, 350px 350px, 250px 250px, 150px 150px",
    backgroundPosition: "0 0, 40px 60px, 130px 270px, 70px 100px",
  };

  const resolveStyle = (planet: IPlanet): CSSProperties => {
    const rotation_time = planet.rotation_period === 'unknown' ? '0' : '5s';
    const size = planet.diameter === '0' ? '1' : '1.2';

    return {
      backgroundColor: stringToColor(planet.name),
      backgroundImage: "url('./textures/planet-1.jpg')",
      backgroundSize: 'cover',
      animationDuration: rotation_time,
      transform: `scale(${size})`
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
          style={spaceBgStyles}
        />
        <div
          className="relative w-16 h-16 p-20 transition-all duration-200 rounded-full card__planet group-hover:p-12"
          style={resolveStyle(planet)}
        />
      </div>
      <div className="p-4 card-body">
        <h3 className="font-bold uppercase">{planet.name}</h3>
        <p>{planet.diameter} diameter</p>
        <p>{planet.surface_water}% water</p>
        <p>{planet.population} inhabitants</p>
        <p>{planet.rotation_period} day hours </p>
      </div>
    </a>
  )
}

export default PlanetCard
