import React from 'react'

const Modal = ({ children, title, show, close }) => {

  const showHideClassName = show ? 'modal fade show display-block' : 'modal display-none';
  
  return (
    <div className={showHideClassName}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={close}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={close}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
