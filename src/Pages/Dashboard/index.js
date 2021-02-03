import React, { useEffect, useState } from 'react'
import Modal from '../../Components/Modal';
import Assign from '../../Components/Modal/Assign';
import ReAssign from '../../Components/Modal/ReAssign';
import clientcase from '../../utils/data/clientcase.json'

const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [assign, setAssign] = useState(false);
  const [reassign, setReassign] = useState(false);
  const openAssign = () => setAssign(true);
  const closeAssign = () => setAssign(false);

  const openReassign = () => setReassign(true);
  const closeReassign = () => setReassign(false);

  const loadData=()=>{
    const data = JSON.parse(JSON.stringify(clientcase))
    setData(data);
  }

  useEffect(()=>(
    loadData()
  ),[])
  
  return (
    <div className='__dash container-fluid'>
      <Modal show={assign} close={closeAssign} title="Assign Case to Employee">
        <Assign close={closeAssign} />
      </Modal>
      <Modal show={reassign} close={closeReassign} title="Re-Assign Case to Employee">
        <ReAssign close={closeReassign} />
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
            {
              data.length>0 ? data.map((cases)=>(
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
                    >
                      <i className="far fa-trash-alt" style={{marginRight:'20px', fontSize:'28px', color:'#f00'}} />
                    </a>
                    {
                      cases.assigned===null ? 
                        <button
                          style={{fontSize:'18px', textTransform:'uppercase',
                            outline:'none', borderRadius:'15%', width:'100px', height:'38px'}}
                          onClick={openAssign}>
                    Assign
                        </button>
                        :
                        <button
                          style={{fontSize:'18px', textTransform:'uppercase',
                            outline:'none', borderRadius:'15%', width:'120px', height:'38px'}}
                          onClick={openReassign}>
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
  )
}

export default DashboardPage
