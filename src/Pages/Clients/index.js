import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../Components/Modal'
import AddClient from './AddClient'
import SweetAlert from 'react-bootstrap-sweetalert';

const ClientTable = () => {
  var NewClients = JSON.parse(localStorage.getItem('Clients'));

  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const [showAlert, setShowAlert] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const hideAlert = () => setShowAlert(false)||setError('');

  const handleDelete = (_id) =>{
    NewClients = NewClients.filter(function (client) {
      return client.id !== _id;
    });
    localStorage.setItem('Clients', JSON.stringify(NewClients))
    setShowAlert(true);
    setSuccess('Client Deleted')
  }

  useEffect(()=>{
    NewClients
    console.log('Initial Clients:', NewClients)
  }, [NewClients])

  return (
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
            <Link onClick={openModal}><i className='fa fa-plus-circle'></i></Link>
          </span>
        </div>
        <Modal show={show} close={closeModal} title="Add New Client">
          <AddClient close={closeModal} />
        </Modal>
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
                    <Link to ='/client-profile' style={{textDecoration:'underline', textTransform:'capitalize'}}><th>{client.name}</th></Link>
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
  )
}

export default ClientTable
