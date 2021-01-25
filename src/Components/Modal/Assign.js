import React from 'react'

const Assign = () => {
  return (
    <div className="card">
      <div className="card-header" />
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Case</label>
            <select
              className="form-control"
            >
            </select>
          </div>
          <div className="form-group">
            <label>Employee</label>
            <select
              className="form-control"
            >
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Assign Case
          </button>
        </form>
      </div>
    </div>
  )
}

export default Assign
