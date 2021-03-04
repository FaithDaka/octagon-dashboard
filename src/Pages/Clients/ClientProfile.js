import React from 'react'
import ClientManagement from './ClientManagement'
import logo from '../../Assets/img/logo192.png'
import { useState as useGlobalState } from '@hookstate/core'
import globalState from '../../state'

const ClientProfile = (props) => {
  const id = props.match.params.id;
  var { clientList } = useGlobalState(globalState)

  var client = JSON.parse(clientList.get())

  return (
    <ClientManagement>
      <div className='container-fluid'>
        <div className='col-12'>
          <div className='row'>
            <div className='side-logo col-5'>
              <h2>Client {id}</h2>
              <img src={logo}/>
            </div>
            <div className='__info col-5'>
              <div className='profile-card'>
                <div className='__content row'>
                  <h2>Name</h2>
                  <span>{client[id-1].name}</span>
                </div>
                <div className='__content row'>
                  <h2>d.o.b</h2>
                  <span> {client[id-1].dob}</span>
                </div>
                <div className='__content row'>
                  <h2>email address</h2>
                  <span>{client[id-1].email}</span>
                </div>
                <div className='__content row'>
                  <h2>phone number</h2>
                  <span>{client[id-1].phone}</span>
                </div>
                <div className='__content row'>
                  <h2>address</h2>
                  <span>{client[id-1].address}</span>
                </div>
                <div className='__content row'>
                  <h2>tin number</h2>
                  <span>{client[id-1].tin}</span>
                </div>
                <div className='__content row'>
                  <h2>website</h2>
                  <span>{client[id-1].website}</span>
                </div>
                <div className='__content row'>
                  <h2>country of residence</h2>
                  <span>{client[id-1].residence}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientManagement>
  )
}

export default ClientProfile
