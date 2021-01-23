import React from 'react'
import LoadSpinner from '../../Components/LoadSpinner'
import logo from '../../Assets/img/logo512.png'
import '../../Assets/css/login.css'

const Login = () => {
  const loading = false;

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
                  required/>
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                  required/>
              </div>
              <button type='submit' className='btn btn-warning'>
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

export default Login

