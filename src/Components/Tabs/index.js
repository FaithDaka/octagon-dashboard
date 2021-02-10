import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Tabs = () => {
  const [tab, setTab] = useState(0);

  const handleToggle=(key)=>{
    setTab(key);
  }

  return (
    <div className='otc__landing'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12'>
            <nav>
              <div className="nav nav-tabs nav-justified" id="nav-tab" role="tablist">
                <Link
                  to='/landing'
                  onClick={() => { handleToggle(1)}}
                  className={tab === 1 ? 'nav-item nav-link active' : 'nav-item nav-link'}
                  style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none'
                  }}
                >
                  <div className='otc__tabs'>
                    <span className='otc__tab'>Dashboard</span>
                    <span className='otc__t'>View Activity</span>
                  </div>
                </Link>
                <Link
                  to='/clients'
                  onClick={() => { handleToggle(2)}}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  className={tab === 2 ? 'nav-item nav-link active' : 'nav-item nav-link'}
                >
                  <div className='otc__tabs'>
                    <span className='otc__tab'>Client Management</span>
                    <span className='otc__t'>Manage Client Data</span>
                  </div>
                </Link>
                <Link
                  to='/cases'
                  onClick={() => { handleToggle(3)}}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  className={tab === 3 ? 'nav-item nav-link active' : 'nav-item nav-link'}
                >
                  <div className='otc__tabs'>
                    <span className='otc__tab'>Case Management</span>
                    <span className='otc__t'>Manage Case Data</span>
                  </div>
                </Link>
                <Link
                  to='/contact'
                  onClick={() => { handleToggle(4)}}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  className={tab === 4 ? 'nav-item nav-link active' : 'nav-item nav-link'}
                >
                  <div className='otc__tabs'>
                    <span className='otc__tab'>Contact</span>
                    <span className='otc__t'>Need Help?</span>
                  </div>
                </Link>
              </div>
            </nav>

          </div>
        </div>
      </div>
            
    </div>
  )
}

export default Tabs
