import React, { useEffect, useState } from 'react'
import LoadSpinner from '../../Components/LoadSpinner'
import SweetAlert from 'react-bootstrap-sweetalert';
import { getCases, getClients, getEmployees, getCategories } from '../../utils/helpers/storage';

const UpdateCase = ({ case_id, name, cate, create, assign, close }) => {

  const [clients, setClients] = useState(JSON.parse(getClients()))
  const [emps, setEmps] = useState(JSON.parse(getEmployees()))
  const [cats, setCats] = useState(JSON.parse(getCategories()))
  var [_cases, setCases] = useState(JSON.parse(getCases())) 

  const [_client, setClientName] = useState('')
  const [_cat, setCategory] = useState('')
  const [create_emp, setCreate] = useState('')
  const [assign_emp, setAssign] = useState('')
  const [desc, setDesc] = useState('')

  const [showAlert, setShowAlert] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const hideAlert = () => setShowAlert(false)||setError('');
 
  const [loading, setLoading]= useState(false)

  const loadData = () =>{
    setEmps(emps)
    setClients(clients)
    setCats(cats)
    setCases(_cases)
  }

  useEffect(()=>{
    loadData()
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    _cases = _cases.filter(function (_cases) {
      return _cases.id !== case_id;
    });
    const updateClient = {
      id:case_id,
      name:desc,
      category:_cat,
      client:_client,
      created_by:create_emp,
      assigned_to:assign_emp,
      date_created: Date()
    }

    _cases.push(updateClient)
    setCases(_cases)
    console.log('Updated Cases:', _cases)
    localStorage.setItem('Cases', JSON.stringify(_cases))

    setLoading(false)
    setShowAlert(true);
    setSuccess('Case Updated')
    close()
  }

  return (
    <div>
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
        <div className="card-header" />
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Client</label>
              <select
                className="form-control"
                value={_client}
                onChange={(e) => setClientName(e.target.value)}
              >
                <option>{_client}</option>
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
            <div className="form-group">
              <label>Category</label>
              <select
                className="form-control"
                value={_cat}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>{cate}</option>
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
            <div className="form-group">
              <label>Created By</label>
              <select
                className="form-control"
                value={create_emp}
                onChange={(e) => setCreate(e.target.value)}
              >
                <option>{create}</option>
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
            <div className="form-group">
              <label>Assigned To</label>
              <select
                className="form-control"
                value={assign_emp}
                onChange={(e) => setAssign(e.target.value)}
              >
                <option>{assign}</option>
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
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="case description"
                value={name}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? <LoadSpinner /> : 'Update Case'}
            </button>
          </form>
        </div>
      </div>
            
    </div>
  )
}

export default UpdateCase
