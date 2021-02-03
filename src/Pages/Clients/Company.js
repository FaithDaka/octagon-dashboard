import React from 'react'

const Company = () => {
  return (
    <div className="otc__add-case card">
      <div className="card-header" />
      <div className="card-body">
        <form>
          <div className="form-group">
            <label> Company Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="full name"
            />
          </div>
          <div className="row">
            <div className="form-group left">
              <label>Website URL</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
              />
            </div>
            <div className="form-group right">
              <label>Email Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="email address"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group left">
              <label>Company Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="+256..."
              />
            </div>
            <div className="form-group right">
              <label>TIN</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group left">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g plot 24 luthuli avenue"
              />
            </div>
            <div className="form-group right">
              <label>Country of Operation</label>
              <input
                type="text"
                className="form-control"
                placeholder="email address"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Name of Correspondent</label>
            <input
              type="text"
              className="form-control"
              placeholder="full name"
            />
          </div>
          <div className="row">
            <div className="form-group left">
              <label>Email Address</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
              />
            </div>
            <div className="form-group right">
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="+256..."
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
        Create Client
          </button>
        </form>
      </div>
    </div>
  )
}

export default Company
