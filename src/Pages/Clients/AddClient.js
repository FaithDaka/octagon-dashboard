import React from 'react'
import { Link } from 'react-router-dom';
import ClientManagement from './ClientManagement';

// eslint-disable-next-line react/prop-types
const AddClient = ({ children }) => {

  return (
    <ClientManagement>
      <div className='container-fluid'>
        <div className='row'> 
          <div className='__links'>
            <div className='column'>
              <Link to='/clients/add/individual'>
                <h2>Add Individual</h2>
              </Link>
              <Link to='/clients/add/company'>
                <h2>Add Company</h2>
              </Link>
            </div>
          </div>
          <div className='__form'>
            {children}
          </div>
        </div>
      </div>
    </ClientManagement>
  )
}

export default AddClient
