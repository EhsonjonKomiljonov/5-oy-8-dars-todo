import { Route, Routes } from 'react-router-dom';
import { PublicHeader } from '../components/PublicHeader/PublicHeader';
import { Login } from '../pages/Login/Login';
import { PublicHome } from '../pages/PublicHome/PublicHome';
import { Register } from '../pages/Register/Register';

export const Public = () => {
  return (
    <div>
      <PublicHeader />
      <div className='container'>
        <Routes>
          <Route
            index
            path='/'
            element={<PublicHome />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='*'
            element={
              <h1 className='text-center text-danger'>Page Not Found !!!</h1>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
