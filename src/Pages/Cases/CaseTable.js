import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CaseManagement from '.'
import Modal from '../../Components/Modal'
import AddCase from './AddCase'
import cases from '../../utils/data/cases.json'

const CaseTable = () => {
  const [data, setData] = useState([])
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const loadData = () =>{
    const data = JSON.parse(JSON.stringify(cases))
    console.log(data)
    setData(data);
  }

  useEffect(()=>(
    loadData()
  ),[])

  
  return (
    <CaseManagement>
      <div className='otc__case container-fluid'>
        <div className='__case-window column'>
          <div className='row'>
            <h2 className="float-left">Cases</h2> 
            <span className='float-right' title='Add Case'>
              <Link onClick={openModal}><i className='fa fa-plus-circle'></i></Link>
            </span>
          </div>
          <Modal show={show} close={closeModal} title="Add New Case">
            <AddCase close={closeModal} />
          </Modal>
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
                  data.length>0 ? data.map((cases)=>(
                    <tr key={cases.id}>
                      <th>OTC-{cases.id}</th>
                      <th>
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
