import React, { FC } from 'react'

const Footer: FC = () => {
    return (
      <footer className="py-4 text-center text-white">
        <div>
          Made with love by{" "}
          <a
            href="https://www.linkedin.com/in/cdbonadeo/"
            rel="noreferrer"
            target="_blank"
          >
            Carlos Bonadeo
          </a>
        </div>
        <div>
          Powered by{" "}
          <a
            className="hover:underline"
            href="https://swapi.dev/"
            rel="noreferrer"
            target="_blank"
          >
            https://swapi.dev/
          </a>
        </div>
      </footer>
    )
}

export {
    Footer
}
