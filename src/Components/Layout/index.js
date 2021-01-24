import React from 'react'
import Header from '../Header'
import '../../Assets/css/layout.css'
import Tabs from '../Tabs'

const Layout = () => {
  return (
    <div>
      <Header/> 
      <div className='otc__layout-body'>
        <Tabs/>
      </div>     
    </div>
  )
}

export default Layout
