import React, { useEffect, useState } from 'react'
import CaseManagement from '.'
import LoadSpinner from '../../Components/LoadSpinner'
import emps from '../../utils/data/employees.json'
import clients from '../../utils/data/clients.json'
import categories from '../../utils/data/categories.json'

const AddCase = () => {
  const [_emp, setEmp] = useState([])
  const [client, setClient] = useState([])
  const [cat, setCat] = useState([])
 
  const [loading, setLoading]= useState(false)

  const loadData = () =>{
    const _emp = JSON.parse(JSON.stringify(emps))
    const _client = JSON.parse(JSON.stringify(clients))
    const _cat = JSON.parse(JSON.stringify(categories))
    setEmp(_emp)
    setClient(_client)
    setCat(_cat)
  }

  const LocalStorage = localStorageKey => {
    const [value, setValue] = useState(
      localStorage.getItem(localStorageKey) || ''
    );
   
    useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);
   
    return [value, setValue];
  };

  const [_client, setClientName] = LocalStorage('Client Name')
  const [_cat, setCategory] = LocalStorage('Category')
  const [create_emp, setCreate] = LocalStorage('Created By')
  const [assign_emp, setAssign] = LocalStorage('Assigned To')
  const [desc, setDesc] = LocalStorage('Description')

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000);
    console.log('Success!')
    e.target.reset();
  }

  useEffect(()=>(
    loadData()
  ),[])

  return (
    <CaseManagement>
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
                <option>None</option>
                {client.length > 0 ? (
                  client.map((client) => 
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
                <option>None</option>
                {cat.length > 0 ? (
                  cat.map((cat) => 
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
                <option>None</option>
                {_emp.length > 0 ? (
                  _emp.map((c) => 
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
                <option>None</option>
                {_emp.length > 0 ? (
                  _emp.map((c) => 
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
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? <LoadSpinner /> : 'Create Case'}
            </button>
          </form>
        </div>
      </div>
    </CaseManagement>

  )
}

export default AddCase
