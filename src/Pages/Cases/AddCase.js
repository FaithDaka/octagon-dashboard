import React from 'react'
import CaseManagement from '.'

const AddCase = () => {
  return (
    <CaseManagement>
      <div className="otc__add-case card">
        <div className="card-header" />
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Client</label>
              <select
                className="form-control"
              >
              </select>
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                className="form-control"
              >
              </select>
            </div>
            <div className="form-group">
              <label>Created By</label>
              <select
                className="form-control"
              >
              </select>
            </div>
            <div className="form-group">
              <label>Assigned To</label>
              <select
                className="form-control"
              >
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="case description"
              />
            </div>
            <button type="submit" className="btn btn-primary">
            Create Case
            </button>
          </form>
        </div>
      </div>
    </CaseManagement>

  )
}

export default AddCase
