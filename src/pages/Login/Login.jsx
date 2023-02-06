import { useContext, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';

export const Login = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post('http://localhost:5000/user/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => {
        if (data.status === 201) {
          setToken(data.data.token);
          setUser(data.data.user);
          navigate('/');
        }
      })
      .catch((err) => console.log(err));

    console.log();
  };

  return (
    <div className='w-50 mx-auto my-5 py-5 shadow'>
      <h2 className='h2 mb-4 text-center'>Login</h2>
      <form
        className='w-75 mx-auto'
        onSubmit={handleSubmit}
      >
        <input
          required
          ref={emailRef}
          className='form-control'
          type='email'
          placeholder='Email'
        />
        <input
          required
          ref={passwordRef}
          className='form-control my-3'
          type='password'
          placeholder='Password'
        />
        <button className='btn btn-primary'>SEND</button>
      </form>
    </div>
  );
};
