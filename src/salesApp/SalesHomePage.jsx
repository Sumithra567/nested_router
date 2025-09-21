import React from 'react'
import {Outlet} from "react-router-dom"

const SalesHomePage = () => {
  return (
    <div>SalesHomePage
        <Outlet/><p>this is your sales pages</p>
    </div>
  )
}

export default SalesHomePage