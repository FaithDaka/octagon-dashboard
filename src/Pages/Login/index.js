import React, { useState } from 'react'
import LoadSpinner from '../../Components/LoadSpinner'
import logo from '../../Assets/img/logo512.png'
import '../../Assets/css/login.css'
import { useHistory, withRouter } from 'react-router-dom'

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const history = useHistory()

  const clickSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (values.password === 'password' || values.email === 'admin@gmail.com') {
      setValues({
        ...values,
      });
      setLoading(false);
      history.push('/landing')
    }
    else{
      setValues({
        ...values,
      });
      setLoading(false);
    }
  }

  return (
    <div className='otc__login'>
      <div className='container-fluid'>
        <div className='otc__align-center col-8'>
          <div className='col-4'>
            <div className='otc__logo'>
              <img src={logo}/>
            </div>
          </div>
          <form>
            <div className='col-6 login-form'>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='username or email'
                  name='email'
                  onChange={handleChange('email')}
                  required/>
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                  name='password'
                  onChange={handleChange('password')}
                  required/>
              </div>
              <button type='submit' className='btn btn-warning' onClick={clickSubmit}>
                {loading ? <LoadSpinner /> : 'Sign In'}
              </button>
            </div>
          </form>
        </div>
        <div className='otc__help'>
          <button>
            <i className='fa fa-phone fa-rotate-90'></i>
          </button>
        </div>

      </div>
            
    </div>
  )
}

export default withRouter(Login)

