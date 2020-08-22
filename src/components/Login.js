import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Header from './Header';

function Login({  }) {
  return (
    <>
      <Header />
      <LoginForm/>
    </>
  );
}

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handlepasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handleUsernameChange = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }
  return (
    <div className='contentLoginpage'>
      <div className="loginForm">
        <form>
          <div>
            <label htmlFor="username">Nom d'Utilisateur :</label>
            <input name="username" type="input" value={username} onChange= {handleUsernameChange}/>
          </div>
          <div>
            <label htmlFor="password">Mot de passe :</label>
            <input name="password" type="password" value={password} onChange={handlepasswordChange}/>
          </div>
          <input type="submit" value="se connecter" />
        </form>
      </div>
    </div>
  )
}

Login.defaultProps = {};

Login.propTypes = {
};

export default Login;
