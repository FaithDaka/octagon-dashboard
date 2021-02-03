import React from 'react'

const Individual = () => {
  return (
    <div className="otc__add-case card">
      <div className="card-header" />
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Name</label>
            <div className=" container-fluid">
              <div className='row'>
                <input
                  type="text"
                  className="form-control name"
                  placeholder="first name"
                />
                <input
                  type="text"
                  className="form-control name"
                  placeholder="middle name"
                />
                <input
                  type="text"
                  className="form-control name"
                  placeholder="last name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group dob">
              <label>D.O.B</label>
              <input
                type="text"
                className="form-control"
                placeholder="date of birth"
              />
            </div>
            <div className="form-group email">
              <label>Email Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="email address"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group number">
              <label>Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g +256-..."
              />
            </div>
            <div className="form-group tin">
              <label>TIN</label>
              <input
                type="text"
                className="form-control"
                placeholder="TIN"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="home address"
            />
          </div>
          <div className="form-group">
            <label>Country of Residence</label>
            <input
              type="text"
              className="form-control"
              placeholder="country of residence"
            />
          </div>
          <button type="submit" className="btn btn-primary">
        Create Client
          </button>
        </form>
      </div>
    </div>
  )
}

export default Individual
