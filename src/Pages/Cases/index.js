import React from 'react'
import { Link } from 'react-router-dom'

const CaseManagement = () => {
  return (
    <div className='otc__case container-fluid'>
      <div className='__case-window column'>
        <div className='row'>
          <h2 className="float-left">Cases</h2> 
          <span className='float-right' title='Add Case'>
            <Link to="/add_case"><i className='fa fa-plus-circle'></i></Link>
          </span>
        </div>
        <div className='__table'>
          <table className='table table-responsive table-striped'>
            <thead>
              <tr>
                <th>Client</th>
                <th>Case</th>
                <th>Created By</th>
                <th>Assigned To</th>
                <th>Date Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>John Doe</th>
                <th>
                    Evation
                  <span className='badge badge-warning'
                    style={{marginLeft:'8px', fontSize:'18px'}}>
                        VAT
                  </span>
                </th>
                <th>Sarah Chase</th>
                <th>John Chase</th>
                <th>01/23/21</th>
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

            </tbody>

          </table>

        </div>

      </div>
            
    </div>
  )
}

export default CaseManagement
