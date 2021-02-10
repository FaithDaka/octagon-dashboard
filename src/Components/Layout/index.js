import React from 'react'
import Header from '../Header'
import '../../Assets/css/layout.css'
import Tabs from '../Tabs'

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div>
      <Header/> 
      <div className='otc__layout-body'>
        <Tabs/>
        <div className="tab-content">
          {
            children
          }
        </div>
      </div>     
    </div>
  )
}

export default Layout
