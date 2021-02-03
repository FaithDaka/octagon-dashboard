import React, { useEffect, useState } from 'react';
import emps from '../../utils/data/employees.json'
import otc_cases from '../../utils/data/cases.json'
import LoadSpinner from '../LoadSpinner';

const Assign = () => {
  const [emp, setEmp] = useState([])
  const [cases, setCase] = useState([])

  const [emp_name, setName] = useState('')
  const [case_name, setCaseName] = useState('')

  const loadData = () =>{
    const _emp = JSON.parse(JSON.stringify(emps))
    const _cases = JSON.parse(JSON.stringify(otc_cases))
    setEmp(_emp)
    setCase(_cases)
  }

  useEffect(()=>{
    loadData()
  },[])
  return (
    <div className="card">
      <div className="card-header" />
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Case</label>
            <select
              className="form-control"
              value={case_name}
              onChange={(e) => setCaseName(e.target.value)}
            >
              <option>None</option>
              {cases.length > 0 ? (
                cases.map((c) => 
                  <option key={c.id} value={c.name}
                    onClick={()=>setCaseName(c.name)}>
                    {c.name}
                  </option>)
              ) : (
                <LoadSpinner />
              )}
            </select>
          </div>
          <div className="form-group">
            <label>Employee</label>
            <select
              className="form-control"
              value={emp_name}
              onChange={(e) => setName(e.target.value)}
            >
              <option>None</option>
              {emp.length > 0 ? (
                emp.map((e) => 
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
            Assign Case
          </button>
        </form>
      </div>
    </div>
  )
}

export default Assign
