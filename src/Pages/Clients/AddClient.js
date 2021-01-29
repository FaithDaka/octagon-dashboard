import React, { useState } from 'react'
import Company from './Company';
import Individual from './Individual';

const AddClient = () => {
  const [currentTab, setCurrentTab] = useState('individual');

  const renderView = () => {
    if (currentTab === 'individual') {
      return <Individual />;
    }
    if (currentTab === 'company') {
      return <Company />;
    }
  };

  return (
    <div className='otc__add-client'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12'>
            <nav>
              <div className="nav nav-tabs nav-justified" id="nav-tab" role="tablist" style={{ border: 'none' }}>
                <a
                  href='#dashboard'
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => setCurrentTab('individual')}
                  style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    marginRight: '2%'
                  }}
                >
                  <div className='otc__tabs'>
                    <span className='otc__tab'>Individual</span>
                  </div>
                </a>
                <a
                  href='#client'
                  className="nav-item nav-link "
                  id="nav-home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => setCurrentTab('company')}
                >
                  <div className='otc__tabs'>
                    <span className='otc__tab'>Company</span>
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

export default AddClient
