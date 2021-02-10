import React from 'react'
import Layout from '../../Components/Layout'

// eslint-disable-next-line react/prop-types
const CaseManagement = ({children}) => {
  return (
    <Layout>
      <div className='otc__case container-fluid'>
        {children}
      </div>
    </Layout>
        
  )
}

export default CaseManagement
