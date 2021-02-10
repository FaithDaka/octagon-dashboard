import React, { useState } from 'react'
import LoadSpinner from '../../Components/LoadSpinner';
import { getClients } from '../../utils/helpers/storage';
import SweetAlert from 'react-bootstrap-sweetalert';
import AddClient from './AddClient';
import { useHistory } from 'react-router-dom';

const Individual = () => {
  const [clients, setClients] = useState(JSON.parse(getClients()))

  const [showAlert, setShowAlert] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const hideAlert = () => setShowAlert(false)||setError('');

  const [loading, setLoading]= useState(false)
  const history = useHistory()

  const [first_name, setFirst] = useState('')
  const [middle_name, setMiddle] = useState('')
  const [last_name, setLast] = useState('')
  const [dob, setDob] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [tin, setTin] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')

  var name = (first_name + ' ' + last_name + ' ' +  middle_name)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const _id = (clients.length + 1);

    const newClient = {
      id:_id,
      name: name,
      dob:dob,
      email:email,
      phone:mobile,
      tin:tin,
      address:address,
      residence:country
    }

    clients.push(newClient)
    setClients(clients)
    console.log('New Clients:', clients)
    localStorage.setItem('Clients', JSON.stringify(clients))

    setLoading(false)
    setShowAlert(true);
    setSuccess('New Client Created')
    setTimeout(() => {
      history.push('/clients')
    }, 3000);
  }
  
  return (
    <AddClient>
      <div className="otc__add-client card">
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
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <div className="container-fluid">
                <div className='row'>
                  <input
                    type="text"
                    className="form-control name"
                    placeholder="first name"
                    value={first_name}
                    onChange={(e) => setFirst(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control name"
                    placeholder="middle name"
                    value={middle_name}
                    onChange={(e) => setMiddle(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control name"
                    placeholder="last name"
                    value={last_name}
                    onChange={(e) => setLast(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group dob">
                <label>D.O.B</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="date of birth"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="form-group email">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group number">
                <label>Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="e.g +256-..."
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="form-group tin">
                <label>TIN</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="TIN"
                  value={tin}
                  onChange={(e) => setTin(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="home address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Country of Residence</label>
              <input
                type="text"
                className="form-control"
                placeholder="country of residence"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? <LoadSpinner /> : 'Create Client'}
            </button>
          </form>
        </div>
      </div>
    </AddClient>
  )
}

export default Individual
