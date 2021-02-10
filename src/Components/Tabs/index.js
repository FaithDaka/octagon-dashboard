import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import Case from './Case';
// import Client from './Client';
// import Dashboard from './Dashboard';

const Tabs = () => {
  // const [currentTab, setCurrentTab] = useState('dashboard');
  const [tab, setTab] = useState(0);

  // const renderView = () => {
  //   if (currentTab === 'dashboard') {
  //     return <Dashboard />;
  //   }
  //   if (currentTab === 'client') {
  //     return <Client />;
  //   }
  //   if (currentTab === 'case') {
  //     return <Case />;
  //   }
  // };

  const handleToggle=(key)=>{
    setTab(key);
  }

  return (
    <div className='otc__landing'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12'>
            <nav>
              <div className="nav nav-tabs nav-justified" id="nav-tab" role="tablist" style={{ border: 'none' }}>
                <Link
                  to='/landing'
                  // id="nav-home-tab"
                  // data-toggle="tab"
                  // role="tab"
                  // aria-controls="nav-home"
                  // aria-selected="true"
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
                  // id="nav-home-tab"
                  // data-toggle="tab"
                  // role="tab"
                  // aria-controls="nav-home"
                  // aria-selected="true"
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
                  // id="nav-home-tab"
                  // data-toggle="tab"
                  // role="tab"
                  // aria-controls="nav-home"
                  // aria-selected="true"
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
                  // id="nav-home-tab"
                  // data-toggle="tab"
                  // role="tab"
                  // aria-controls="nav-home"
                  // aria-selected="true"
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

            {/* <div
              className="tab-content"
              style={{
                border: '#d3d3d3 solid',
                borderWidth: 'thin'
              }}
            >
              <div className="tab-pane active show" role="tabpanel">
                {renderView()}
                {
                  children
                }
              </div>
            </div> */}

          </div>
        </div>
      </div>
            
    </div>
  )
}

export default Tabs
