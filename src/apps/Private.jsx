import { Route, Routes } from 'react-router-dom';
import { PrivateHeader } from '../components/PrivateHeader/PrivateHeader';
import { PrivateHome } from '../pages/PrivateHome/PrivateHome';

export const Private = () => {
  return (
    <div>
      <PrivateHeader />
      <div>
        <Routes>
          <Route
            index
            path='/'
            element={<PrivateHome />}
          />
          <Route
            path='*'
            element={
              <h2 className='text-danger text-center'>Page Not Found!!!</h2>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
