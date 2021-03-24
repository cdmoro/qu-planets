import React, { FC } from 'react'

const Header: FC = () => {
    return (
      <header className="pt-3 pb-10 font-bold text-center text-yellow-300 header">
        <div className="flex justify-center header--text-opening">
          <div className="w-2/3 header--text-wrapper whitespace-nowrap">
            <h1 className="text-2xl">EPISODE I</h1>
            <h1 className="text-7xl">STAR WARS</h1>
            <h2 className="text-xl text-center">
              It is a period of QU challenges.
            </h2>
          </div>
        </div>
      </header>
    )
}

export {
    Header
}
