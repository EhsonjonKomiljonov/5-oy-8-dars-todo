import { NavLink, Link } from 'react-router-dom';

export const PublicHeader = () => {
  return (
    <header className='bg-dark py-3'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between'>
          <Link className='fs-4 text-decoration-none text-white' to='/'>TODOS</Link>
          <nav>
            <ul className='list-unstyled m-0 d-flex align-items-center'>
              <li className='me-3'>
                <NavLink
                  className='btn btn-outline-primary'
                  to='/login'
                >
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink
                  className='btn btn-outline-success'
                  to='/register'
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
