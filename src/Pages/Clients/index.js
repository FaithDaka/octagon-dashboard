import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import ClientManagement from './ClientManagement';
import { useState as useGlobalState } from '@hookstate/core'
import globalState from '../../state'

const ClientTable = () => {
  var { clientList } = useGlobalState(globalState)

  var NewClients = JSON.parse(clientList.get())

  const [showAlert, setShowAlert] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const hideAlert = () => setShowAlert(false)||setError('');

  const history = useHistory()

  const handleDelete = (_id) =>{
    NewClients = NewClients.filter(function (client) {
      return client.id !== _id;
    });
    clientList.set(JSON.stringify(NewClients))
    // localStorage.setItem('Clients', JSON.stringify(NewClients))
    setShowAlert(true);
    setSuccess('Client Deleted')
  }

  useEffect(()=>{
    NewClients
    console.log('Initial Clients:', NewClients)
  }, [NewClients])

  const clientProfile=(_id)=>{
    history.push(`/client/${_id}`)
  }
  return (
    <ClientManagement>
      <div className='otc__case container-fluid'>
        {showAlert && success && (
          <SweetAlert
            success
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            title={success}
            timeout={3000}
          />
        )}
        {showAlert && error && (
          <SweetAlert
            danger
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            title={error}
            timeout={4000}
          />
        )}
        <div className='__case-window column'>
          <div className='row'>
            <h2 className="float-left">Clients</h2> 
            <span className='float-right' title='Add Case'>
              <Link to ='/clients/add/individual'><i className='fa fa-plus-circle'></i></Link>
            </span>
          </div>
          <div className='__table'>
            <table className='table table-responsive table-striped'>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Correspondent</th>
                  <th>TIN</th>
                  <th>Email address</th>
                  <th>Mobile Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  NewClients && NewClients.length>0 ? NewClients.map((client)=>(
                    <tr key={client.id}>
                      <Link style={{textDecoration:'underline', textTransform:'capitalize'}}><th
                        onClick={()=>clientProfile(client.id)}>{client.name}</th></Link>
                      { 
                        !client.correspondent ?
                          <th style={{textTransform:'capitalize'}}>
                            {client.name}
                          </th> :
                          <th style={{textTransform:'capitalize'}}>{client.correspondent}</th>
                      }
                      <th>
                        {client.tin}
                      </th>
                      <th>{client.email}</th>
                      {
                        !client.corr_phone ?
                          <th>{client.phone}</th> :
                          <th>{client.corr_phone}</th>
                      }
                      <th>
                        <a
                          href="#"
                          className="btn-tab btn-success-rgba"
                          title="Update Case"
                        >
                          <i className="far fa-edit" style={{marginRight:'20px', fontSize:'28px', color:'#f00'}} />
                        </a>
                        <a
                          href="#"
                          className="btn-tab btn-danger-rgba"
                          title="Delete Case"
                          onClick={()=>handleDelete(client.id)}
                        >
                          <i className="far fa-trash-alt" style={{marginRight:'20px', fontSize:'28px', color:'#f00'}} />
                        </a>
                      </th>
                    </tr>
                  )):
                    <span>No available clients</span>}
              </tbody>

            </table>

          </div>

        </div>
            
      </div>
    </ClientManagement>
  )
}

export default ClientTable
