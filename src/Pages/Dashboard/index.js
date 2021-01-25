import React, { useState } from 'react'
import Modal from '../../Components/Modal';
import Assign from '../../Components/Modal/Assign';

const DashboardPage = () => {

  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  
  return (
    <div className='__dash container-fluid'>
      <Modal show={show} close={closeModal} title="Assign Case to Employee">
        <Assign close={closeModal} />
      </Modal>
      <div className='__dash-add'>
        <div className='__dash-tab'>
          <span>Create Client Profile</span>
        </div>
        <div className='row'>
          <div className='__dash-client'>
            <i className='fa fa-user' style={{marginRight:'10px', fontSize:'26px', color:'#f00'}}></i>
            <span> Add Individual </span>
          </div>
          <div className='__dash-company'>
            <i className='fa fa-users' style={{marginRight:'10px', fontSize:'28px', color:'#f00'}}></i>
            <span> Add Company</span>
          </div>
        </div>
      </div>
      <div className='__table'>
        <table className='table table-responsive table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Case</th>
              <th>Employee</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>OTC-1</th>
              <th>John Doe</th>
              <th>Evation</th>
              <th>Chase J</th>
              <th>
                <a
                  href="#"
                  className="btn-tab btn-danger-rgba"
                  title="Delete"
                >
                  <i className="far fa-trash-alt" style={{marginRight:'20px', fontSize:'28px', color:'#f00'}} />
                </a>
                <button
                  style={{fontSize:'18px', textTransform:'uppercase',
                    outline:'none', borderRadius:'15%', width:'100px', height:'38px'}}
                  onClick={openModal}>
                    Assign
                </button>
              </th>
            </tr>

          </tbody>

        </table>

      </div>
    </div>
  )
}

export default DashboardPage
