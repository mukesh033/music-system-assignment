import React from 'react'
import {
	HEADERDATA,
} from '../dummy-data'

const Header = () => {
  return (
    <>
        <header className="header-container">
            <img src={HEADERDATA.image} className="dg-boy-image" alt="dg-boy" />
        </header>
    </>
  )
}

export default Header