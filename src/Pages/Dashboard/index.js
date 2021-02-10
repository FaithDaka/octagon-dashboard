import React, { useEffect, useState } from 'react'
import Modal from '../../Components/Modal';
import Assign from '../../Components/Modal/Assign';
import ReAssign from '../../Components/Modal/ReAssign';
import SweetAlert from 'react-bootstrap-sweetalert';
import Layout from '../../Components/Layout';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  var NewCC = JSON.parse(localStorage.getItem('ClientCase'));

  const [assign, setAssign] = useState(false);
  const [reassign, setReassign] = useState(false);

  const [id, setId] = useState()
  const [c_name, setCName] = useState('')
  const [assn, setAssn] = useState('')
  const [client, setClient] = useState('')

  const openAssign = (_id, _case, _client) => {
    setId(_id)
    setCName(_case)
    setClient(_client)
    setAssign(true);
  }
  const closeAssign = () => setAssign(false);

  const openReassign = (_id, _case, _assd, _client) => {
    setId(_id)
    setCName(_case)
    setAssn(_assd)
    setClient(_client)
    setReassign(true);
  }

  const closeReassign = () => setReassign(false);

  const [showAlert, setShowAlert] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const hideAlert = () => setShowAlert(false) || setError('');

  const handleDelete = (_id) =>{
    NewCC = NewCC.filter(function (c_case) {
      return c_case.id !== _id;
    });
    localStorage.setItem('ClientCase', JSON.stringify(NewCC))
    setShowAlert(true);
    setSuccess('Client-Case Deleted')
  }

  useEffect(()=>{
    NewCC
    console.log('Initial C-Cases:', NewCC)
  }, [NewCC])
  
  return (
    <Layout>
      <div className='__dash container-fluid'>
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
        <Modal show={assign} close={closeAssign} title="Assign Case to Employee">
          <Assign close={closeAssign} id={id} case_name={c_name} client={client}/>
        </Modal>
        <Modal show={reassign} close={closeReassign} title="Re-Assign Case to Employee">
          <ReAssign close={closeReassign} id={id} case_name={c_name} assigned={assn} client={client} />
        </Modal>
        <div className='__dash-add'>
          <div className='__dash-tab'>
            <span>Create Client Profile</span>
          </div>
          <div className='row'>
            <div className='__dash-client'>
              <i className='fa fa-user' style={{marginRight:'10px', fontSize:'26px', color:'#f00'}}></i>
              <span> <Link to='/clients/add/individual'>Add Individual</Link> </span>
            </div>
            <div className='__dash-company'>
              <i className='fa fa-users' style={{marginRight:'10px', fontSize:'28px', color:'#f00'}}></i>
              <span> <Link to='/clients/add/company'>Add Company</Link></span>
            </div>
          </div>
        </div>
        <div className='__table'>
          <table className='table table-responsive table-striped'>
            <thead>
              <tr>
                <th>ID</th>
                <th style={{textTransform:'capitalize'}}>Client</th>
                <th style={{textTransform:'capitalize'}}>Case</th>
                <th style={{textTransform:'capitalize'}}>Employee</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                NewCC && NewCC.length>0 ? NewCC.map((cases)=>(
                  <tr key={cases.id}>
                    <th>OTC-{cases.id}</th>
                    <th>{cases.client}</th>
                    <th>{cases.case}</th>
                    <th>{cases.assigned}</th>
                    <th>
                      <a
                        href="#"
                        className="btn-tab btn-danger-rgba"
                        title="Delete"
                        onClick={()=>handleDelete(cases.id)}
                      >
                        <i className="far fa-trash-alt" style={{marginRight:'20px', fontSize:'28px', color:'#f00'}} />
                      </a>
                      {
                        cases.assigned===null ? 
                          <button
                            className= 'btn btn-danger'
                            style={{fontSize:'18px', textTransform:'uppercase',
                              outline:'none',fontWeight:'600', width:'100px', height:'38px'}}
                            onClick={()=>openAssign(cases.id, cases.case, cases.client)}>
                    Assign
                          </button>
                          :
                          <button
                            className= 'btn btn-secondary'
                            style={{fontSize:'18px', textTransform:'uppercase', color:'black',
                              outline:'none', fontWeight:'600', width:'120px', height:'38px'}}
                            onClick={()=>openReassign(cases.id, cases.case, cases.assigned, cases.client)}>
                  ReAssign
                          </button>
                      }
                    </th>
                  </tr>
                )): <span>No available client cases</span> }

            </tbody>

          </table>

        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage
