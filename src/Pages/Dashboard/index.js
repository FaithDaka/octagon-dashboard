import React from 'react'

const DashboardPage = () => {
  return (
    <div className='__dash container-fluid'>
      <div className='__dash-add'>
        <div className='__dash-tab'>
          <span>Create Client Profile</span>
        </div>
        <div className='row'>
          <div className='__dash-client'>
            <i className='fa fa-user'></i>
            <span> Add Individual </span>
          </div>
          <div className='__dash-company'>
            <i className='fa fa-users'></i>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>OTC-1</th>
              <th>John Doe</th>
              <th>Evation</th>
              <th>
                <a
                  href="#"
                  className="btn-tab btn-danger-rgba"
                  title="Delete"
                >
                  <i className="far fa-trash-alt" />
                </a>
                <button>
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
