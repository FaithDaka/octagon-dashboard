import React, { useState } from 'react'
import Case from './Case';
import Client from './Client';
import Dashboard from './Dashboard';

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');
  // const tab = currentTab ? 'nav-item nav-link active' : 'nav-item nav-link'
  let tab= 'nav-item nav-link';

  const renderView = () => {
    if (currentTab === 'dashboard') {
      tab = 'nav-item nav-link active'
      return <Dashboard />;
    }
    if (currentTab === 'client') {
      return <Client />;
    }
    if (currentTab === 'case') {
      return <Case />;
    }
  };

  return (
    <div className='otc__landing'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12'>
            <nav>
              <div className="nav nav-tabs nav-justified" id="nav-tab" role="tablist" style={{ border: 'none' }}>
                <a
                  href='#dashboard'
                  className={tab}
                  id="nav-home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => setCurrentTab('dashboard')}
                  style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    marginRight: '2%'
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
                  onClick={() => setCurrentTab('client')}
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
                  onClick={() => setCurrentTab('case')}
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
                  onClick={() => setCurrentTab('contact')}
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
