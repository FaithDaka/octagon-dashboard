import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import ClientManagement from './ClientManagement';

// eslint-disable-next-line react/prop-types
const AddClient = ({ children }) => {
  const [tab, setTab] = useState(0);

  const handleToggle=(key)=>{
    setTab(key);
  }

  return (
    <ClientManagement>
      <div className='container-fluid'>
        <div className='row'> 
          <div className='__links'>
            <div className='column'>
              <Link to='/clients/add/individual' 
                onClick={()=>handleToggle(1)}>
                <h2
                  className={tab===1? '__heading active':'__heading'}>Add Individual</h2>
              </Link>
              <Link to='/clients/add/company'
                onClick={()=>handleToggle(2)}>
                <h2
                  className={tab===2? '__heading active':'__heading'}>Add Company</h2>
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
