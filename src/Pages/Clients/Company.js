import React, { useState } from 'react'
import LoadSpinner from '../../Components/LoadSpinner';
import { getClients } from '../../utils/helpers/storage';
import SweetAlert from 'react-bootstrap-sweetalert';
import AddClient from './AddClient';
import { useHistory } from 'react-router-dom';

const Company = () => {
  const [clients, setClients] = useState(JSON.parse(getClients()))

  const [showAlert, setShowAlert] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const hideAlert = () => setShowAlert(false)||setError('');

  const [loading, setLoading]= useState(false)
  const history = useHistory()

  const [name, setName] = useState('')
  const [website, setWebsite] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [tin, setTin] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')

  const [_name, setNameCc] = useState('')
  const [_email, setEmailC] = useState('')
  const [_mobile, setMobileC] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const _id = (clients.length + 1);

    const newClient = {
      id:_id,
      name: name,
      website:website,
      email:email,
      phone:mobile,
      tin:tin,
      address:address,
      residence:country,
      correspondent:_name,
      corr_email:_email,
      corr_phone:_mobile
    }

    clients.push(newClient)
    setClients(clients)
    console.log('New Clients:', clients)
    localStorage.setItem('Clients', JSON.stringify(clients))

    setLoading(false)
    setShowAlert(true);
    setSuccess('New Company Added')
    setTimeout(() => {
      history.push('/clients')
    }, 3000);
  }

  return (
    <AddClient>
      <div className="otc__add-company card">
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
              <label> Company Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="form-group l">
                <label>Website URL</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <div className="form-group r">
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
              <div className="form-group l">
                <label>Company Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="+256..."
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="form-group r">
                <label>TIN</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={tin}
                  onChange={(e) => setTin(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group l">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g plot 24 luthuli avenue"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group r">
                <label>Country of Operation</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Name of Correspondent</label>
              <input
                type="text"
                className="form-control"
                placeholder="full name"
                value={_name}
                onChange={(e) => setNameCc(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="form-group l">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder=""
                  value={_email}
                  onChange={(e) => setEmailC(e.target.value)}
                />
              </div>
              <div className="form-group r">
                <label>Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="+256..."
                  value={_mobile}
                  onChange={(e) => setMobileC(e.target.value)}
                />
              </div>
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

export default Company
