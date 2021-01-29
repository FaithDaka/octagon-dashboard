import React from 'react'

const Individual = () => {
  return (
    <div className="otc__add-case card">
      <div className="card-header" />
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="full name"
            />
          </div>
          <div className="form-group">
            <label>D.O.B</label>
            <input
              type="text"
              className="form-control"
              placeholder="date of birth"
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="email address"
            />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="mobile number"
            />
          </div>
          <div className="form-group">
            <label>TIN</label>
            <input
              type="text"
              className="form-control"
              placeholder="TIN"
            />
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
