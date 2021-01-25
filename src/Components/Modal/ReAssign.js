import React from 'react'

const ReAssign = () => {
  return (
    <div className="card">
      <div className="card-header" />
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Case</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category Name"
            />
          </div>
          <div className="form-group">
            <label>From</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category Name"
            />
          </div>
          <div className="form-group">
            <label>To</label>
            <select
              className="form-control"
            >
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Re-Assign Case
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReAssign
