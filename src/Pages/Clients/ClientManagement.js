import React from 'react'
import Layout from '../../Components/Layout'

const ClientManagement = ({children}) => {
  return (
    <Layout>
      <div className='otc__case container-fluid'>
        {children}
      </div>
    </Layout>
  )
}

export default ClientManagement
