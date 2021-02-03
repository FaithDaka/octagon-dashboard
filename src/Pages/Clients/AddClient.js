import React, { useState } from 'react'
import Company from './Company';
import Individual from './Individual';

const AddClient = () => {
  const [currentTab, setCurrentTab] = useState('individual');
  const [tab, setTab] = useState(0);

  const renderView = () => {
    if (currentTab === 'individual') {
      return <Individual />;
    }
    if (currentTab === 'company') {
      return <Company />;
    }
  };

  const handleToggle=(key)=>{
    setTab(key);
  }

  return (
    <div className='otc__add-client'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12'>
            <nav>
              <div className="nav nav-tabs nav-justified" id="nav-tab" role="tablist" style={{ border: 'none' }}>
                <a
                  href='#individual'
                  id="nav-home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => {setCurrentTab('individual'), handleToggle(1)}}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  className={tab === 1 ? 'nav-item nav-link active' : 'nav-item nav-link'}
                  style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none'
                  }}
                >
                  <div className='otc__tabs-c'>
                    <span className='otc__tab-c'>Individual</span>
                  </div>
                </a>
                <a
                  href='#company'
                  id="nav-home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => {setCurrentTab('company'), handleToggle(2)}}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  className={tab === 2 ? 'nav-item nav-link active' : 'nav-item nav-link'}
                >
                  <div className='otc__tabs-c'>
                    <span className='otc__tab-c'>Company</span>
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
