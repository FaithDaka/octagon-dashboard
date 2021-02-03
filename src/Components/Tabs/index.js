import React, { useState } from 'react'
import Case from './Case';
import Client from './Client';
import Dashboard from './Dashboard';

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [tab, setTab] = useState(0);

  const renderView = () => {
    if (currentTab === 'dashboard') {
      return <Dashboard />;
    }
    if (currentTab === 'client') {
      return <Client />;
    }
    if (currentTab === 'case') {
      return <Case />;
    }
  };

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
                <a
                  href='#dashboard'
                  id="nav-home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => {setCurrentTab('dashboard'), handleToggle(1)}}
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
                </a>
                <a
                  href='#client'
                  className={tab}
                  id="nav-home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => {setCurrentTab('client'), handleToggle(2)}}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  className={tab === 2 ? 'nav-item nav-link active' : 'nav-item nav-link'}
                >
                  <div className='otc__tabs'>
                    <span className='otc__tab'>Client Management</span>
                    <span className='otc__t'>Manage Client Data</span>
                  </div>
                </a>
                <a
                  href='#case'
                  className={tab}
                  id="nav-home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => {setCurrentTab('case'), handleToggle(3)}}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  className={tab === 3 ? 'nav-item nav-link active' : 'nav-item nav-link'}
                >
                  <div className='otc__tabs'>
                    <span className='otc__tab'>Case Management</span>
                    <span className='otc__t'>Manage Case Data</span>
                  </div>
                </a>
                <a
                  href='#contact'
                  className={tab}
                  id="nav-home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => {setCurrentTab('contact'), handleToggle(4)}}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  className={tab === 4 ? 'nav-item nav-link active' : 'nav-item nav-link'}
                >
                  <div className='otc__tabs'>
                    <span className='otc__tab'>Contact</span>
                    <span className='otc__t'>Need Help?</span>
                  </div>
                </a>
              </div>
            </nav>

            <div
              className="tab-content"
              style={{
                border: '#d3d3d3 solid',
                borderWidth: 'thin'
              }}
            >
              <div className="tab-pane active show" role="tabpanel">
                {renderView()}
              </div>
            </div>

          </div>
        </div>
      </div>
            
    </div>
  )
}

export default Tabs
