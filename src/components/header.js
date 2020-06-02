import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import logo from '../images/logo_titled1.png'

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <>
    <div className="h-16 lg:h-10 bg-kraken-900 text-white text-center text-sm pt-6 lg:pt-2 font-light lg:font-bold hover:bg-white hover:text-kraken-900 border-b  shadow">BECOME A BETA READER&#x2001;&#11157;</div>
    <nav className="flex items-center justify-between flex-wrap mb-8 p-6 border-b shadow">
      <Link to={'/'}>
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          
          <img src={logo} alt="logo" className="h-20 w-auto"></img>

          <span className="font-display font-semibold text-xl lg:text-3xl tracking-tighter uppercase text-kraken-900">
            {siteTitle}
          </span>
        </div>
      </Link>
      
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 border rounded text-kraken-900 border-kraken-900 hover:bg-kraken-900 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:flex-grow lg:flex lg:justify-center">
          <Link
            to={`/testaments`}
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-kraken-900 font-bold hover:bg-kraken-900 hover:text-white rounded-sm px-2 mr-20 uppercase"
          >
            The Gods Who Are Rejected
          </Link>
          <Link
            to={`/page-2`}
            className="block mt-4 lg:inline-block lg:mt-0 text-kraken-900 font-bold hover:bg-kraken-900 hover:text-white rounded-sm px-2 mr-20 uppercase"
          >
            Rogues Gallery
          </Link>
          <Link
            to={`/page-2`}
            className="block mt-4 lg:inline-block lg:mt-0 text-kraken-900 font-bold hover:bg-kraken-900 hover:text-white rounded-sm px-2 mr-20 uppercase"
          >
            MonsterWiki
          </Link>
        </div>
        <div>
          <a
            href="#download"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-kraken-900 border-kraken-900 hover:bg-kraken-900 hover:text-white  px-2 mt-4 lg:mt-0"
          >
            Log In
          </a>
        </div>
      </div>
    </nav>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
