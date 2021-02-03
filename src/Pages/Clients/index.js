import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../Components/Modal'
import AddClient from './AddClient'
import clients from '../../utils/data/clients.json'

const ClientTable = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const loadData=()=>{
    const data = JSON.parse(JSON.stringify(clients))
    setData(data);
  }

  useEffect(()=>(
    loadData()
  ),[])

  return (
    <div className='otc__case container-fluid'>
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
                data.length>0 ? data.map((client)=>(
                  <tr key={client.id}>
                    <Link to ='/client-profile' style={{textDecoration:'underline'}}><th>{client.name}</th></Link>
                    <th>
                      {client.name}
                    </th>
                    <th>
                      {client.tin}
                    </th>
                    <th>{client.email}</th>
                    <th>{client.phone}</th>
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
