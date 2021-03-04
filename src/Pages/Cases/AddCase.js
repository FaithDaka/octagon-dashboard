import React, { useEffect, useState } from 'react'
import CaseManagement from '.'
import LoadSpinner from '../../Components/LoadSpinner'
import SweetAlert from 'react-bootstrap-sweetalert';
// import { getCases, getClients, getEmployees, getCategories } from '../../utils/helpers/storage';
import { useHistory, withRouter } from 'react-router-dom';
import { useState as useGlobalState } from '@hookstate/core'
import globalState from '../../state'

// eslint-disable-next-line react/prop-types
const AddCase = () => {
  const [_client, setClientName] = useState('')
  const [_cat, setCategory] = useState('')
  const [create_emp, setCreate] = useState('')
  const [assign_emp, setAssign] = useState('')
  const [desc, setDesc] = useState('')

  // const [clients, setClients] = useState(JSON.parse(getClients()))
  // const [emps, setEmps] = useState(JSON.parse(getEmployees()))
  // const [cats, setCats] = useState(JSON.parse(getCategories()))
  // const [_cases, setCases] = useState(JSON.parse(getCases())) 

  var { clientList, caseList, empList, catList} = useGlobalState(globalState)

  var clients = JSON.parse(clientList.get())
  var emps = JSON.parse(empList.get())
  var cats = JSON.parse(catList.get())
  var [_cases, setCases] = useState(JSON.parse(caseList.get()))

  const [showAlert, setShowAlert] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const hideAlert = () => setShowAlert(false)||setError('');
 
  const [loading, setLoading]= useState(false)
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const _id = (_cases.length + 1);

    const newCase = {
      id:_id,
      name:desc,
      category:_cat,
      client:_client,
      created_by:create_emp,
      assigned_to:assign_emp,
      date_created: Date()
    }

    _cases.push(newCase)
    setCases(_cases)
    caseList.set(JSON.stringify(_cases))
    console.log('New Cases:', _cases)
    // localStorage.setItem('Cases', JSON.stringify(_cases))

    setLoading(false)
    setShowAlert(true);
    setSuccess('New Case Created')
    setTimeout(() => {
      history.push('/cases')
    }, 3000);
    
  }

  const loadData = () =>{
    emps,clients,cats, _cases
  }

  useEffect(()=>{
    loadData()
  },[])

  return (
    <CaseManagement>
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
      <div className="otc__add-case card">
        <div className="row">
          <div>
            <h2>ADD NEW CASE</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group left">
                  <label>Client</label>
                  <select
                    className="form-control"
                    value={_client}
                    onChange={(e) => setClientName(e.target.value)}
                  >
                    <option>{null}</option>
                    {
                      clients.length > 0 ? (
                        clients.map((client) => 
                          <option key={client.id} value={client.name}
                            onClick={()=>setClientName(client.name)}>
                            {client.name}
                          </option>)
                      ) : (
                        <LoadSpinner />
                      )}
                  </select>
                </div>
                <div className="form-group right">
                  <label>Category</label>
                  <select
                    className="form-control"
                    value={_cat}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>{null}</option>
                    { 
                      cats && cats.length > 0 ? (
                        cats.map((cat) => 
                          <option key={cat.id} value={cat.name}>
                            {cat.name}
                          </option>)
                      ) : (
                        <LoadSpinner />
                      )}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="form-group left">
                  <label>Created By</label>
                  <select
                    className="form-control"
                    value={create_emp}
                    onChange={(e) => setCreate(e.target.value)}
                  >
                    <option>{null}</option>
                    { 
                      emps && emps.length > 0 ? (
                        emps.map((c) => 
                          <option key={c.id} value={c.name}
                            onClick={()=>setCreate(c.name)}>
                            {c.name}
                          </option>)
                      ) : (
                        <LoadSpinner />
                      )}
                  </select>
                </div>
                <div className="form-group right">
                  <label>Assigned To</label>
                  <select
                    className="form-control"
                    value={assign_emp}
                    onChange={(e) => setAssign(e.target.value)}
                  >
                    <option>{null}</option>
                    { 
                      emps && emps.length > 0 ? (
                        emps.map((c) => 
                          <option key={c.id} value={c.name}
                            onClick={()=>setAssign(c.name)}>
                            {c.name}
                          </option>)
                      ) : (
                        <LoadSpinner />
                      )}
                  </select>
                </div>
              </div>
              <div className="form-group desc">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="case description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-danger">
                {loading ? <LoadSpinner /> : 'Create Case'}
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </CaseManagement>

  )
}

export default withRouter(AddCase)
