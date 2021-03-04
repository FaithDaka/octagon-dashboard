import React, { useEffect, useState } from 'react';
import LoadSpinner from '../LoadSpinner';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useState as useGlobalState } from '@hookstate/core'
import globalState from '../../state'
import { useHistory } from 'react-router-dom';

const Assign = ({ close, id, case_name, client }) => {
  var { ccList, empList } = useGlobalState(globalState)
  var [c_case, setCCases] = useState(JSON.parse(ccList.get()))
  var emps = JSON.parse(empList.get())

  const [emp_name, setName] = useState('')

  const [showAlert, setShowAlert] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const hideAlert = () => setShowAlert(false)||setError('');

  const [loading, setLoading]= useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    c_case = c_case.filter(function (_c) {
      return _c.id !== id;
    });

    const newCC = {
      id:id,
      client:client,
      case:case_name,
      assigned:emp_name
    }

    c_case.push(newCC)
    setCCases(c_case)
    ccList.set(JSON.stringify(c_case))
    console.log('New CC:', c_case)

    setLoading(false)
    setShowAlert(true);
    setSuccess('Updated')
    setTimeout(() => {
      history.push('/landing')
    }, 2000);
    close()
  }

  const loadData = () =>{
    emps, c_case
  }

  useEffect(()=>{
    loadData()
  },[])

  return (
    <div className="card otc__assign">
      {showAlert && success && (
        <SweetAlert
          success
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          title={success}
          timeout={3000}
        />
      )}
      {showAlert && error && (
        <SweetAlert
          danger
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          title={error}
          timeout={4000}
        />
      )}
      <div className="card-header" />
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Case</label>
            <select
              className="form-control"
              value={case_name}
            >
              <option>{case_name}</option>
            </select>
          </div>
          <div className="form-group">
            <label>Employee</label>
            <select
              className="form-control"
              value={emp_name}
              onChange={(e) => setName(e.target.value)}
            >
              <option>{null}</option>
              {emps && emps.length > 0 ? (
                emps.map((e) => 
                  <option key={e.id} value={e.name}
                    onClick={()=>setName(e.name)}>
                    {e.name}
                  </option>)
              ) : (
                <LoadSpinner />
              )}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            {loading ? <LoadSpinner /> : 'Assign Case'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Assign
