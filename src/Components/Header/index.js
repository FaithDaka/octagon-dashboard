import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../Assets/img/logo192.png';

const Header = () => {
  const history = useHistory()
  const logout = ()=>{
    localStorage.clear()
    history.push('/')
  }  
  return (
    <div className='otc__header'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='otc__header-logo'>
            <img src={logo}/>
          </div>
          <div className='otc__header-sidebar'>
            <div className='__search'>
              <input
                type='text'
                className='form-control'
                placeholder='Search'/>
            </div>
            <div className='__icons'>
              <span> <i className='fa fa-cogs'></i> </span>
              <span> <i className='fa fa-bell'></i> </span>
              <span className='__title'> 
                <a onClick={logout}>A</a></span>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Header
