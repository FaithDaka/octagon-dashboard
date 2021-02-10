import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CaseManagement from '.'
import SweetAlert from 'react-bootstrap-sweetalert';

const CaseTable = () => {
  const [showAlert, setShowAlert] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const hideAlert = () => setShowAlert(false)||setError('');

  var NewCases = JSON.parse(localStorage.getItem('Cases'))
  const history = useHistory()

  const updateCase =(_id)=>{
    history.push(`/cases/update/${_id}`)
  }

  const handleDelete = (_id) =>{
    NewCases = NewCases.filter(function (_cases) {
      return _cases.id !== _id;
    });
    localStorage.setItem('Cases', JSON.stringify(NewCases))
    setShowAlert(true);
    setSuccess('Case Deleted')
  }

  useEffect(()=>{
    NewCases
    console.log('Initial cases:', NewCases)
  }, [NewCases])

  return (
    <CaseManagement>
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
      <div>
        <div className='__case-window column'>
          <div className='row'>
            <h2 className="float-left">Cases</h2> 
            <span className='float-right' title='Add Case'>
              <Link to='/cases/add'><i className='fa fa-plus-circle'></i></Link>
            </span>
          </div>
          <div className='__table'>
            <table className='table table-responsive table-striped'>
              <thead>
                <tr>
                  <th style={{width:'120px'}}>ID</th>
                  <th style={{width:'350px'}}>Case</th>
                  <th>Created By</th>
                  <th>Assigned To</th>
                  <th>Date Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  NewCases && NewCases.length>0 ? NewCases.map((cases)=>(
                    <tr key={cases.id}>
                      <th>OTC-{cases.id}</th>
                      <th
                        style={{textTransform:'capitalize'}}>
                        {cases.name}
                        <span className='badge badge-warning float-right'
                          style={{marginLeft:'8px', fontSize:'18px'}}>
                          {cases.category}
                        </span>
                      </th>
                      <th>{cases.created_by}</th>
                      <th>{cases.assigned_to}</th>
                      <th>{cases.date_created}</th>
                      <th>
                        <a
                          href="#"
                          className="btn-tab btn-success-rgba"
                          title="Update Case"
                          onClick={()=>updateCase(cases.id)}
                        >
                          <i className="far fa-edit" style={{marginRight:'20px', fontSize:'28px', color:'#f00'}} />
                        </a>
                        <a
                          href="#"
                          className="btn-tab btn-danger-rgba"
                          title="Delete Case"
                          onClick={()=>handleDelete(cases.id)}
                        >
                          <i className="far fa-trash-alt" style={{marginRight:'20px', fontSize:'28px', color:'#f00'}} />
                        </a>
                      </th>
                    </tr>
                  )):
                    <span>No available cases</span>}
              </tbody>

            </table>

          </div>

        </div>
            
      </div>
    </CaseManagement>
  )
}

export default CaseTable
