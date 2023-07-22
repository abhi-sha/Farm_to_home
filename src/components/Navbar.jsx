import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Badge } from '@material-ui/core';
import { useCart } from './ContextReducer';

const Navbar = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem('authToken')
    navigate('/loginuser')
  }
  let data = useCart();
  return (
    <div className=" mb-2" style={{ 'position': 'fixed', 'zIndex': '1', 'width': '100%' }}>
      <nav className=" navbar navbar-expand-lg navbar-dark bg-success " style={{ height: '4.5rem' }}>


        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav me-auto ">
            <li className="navbar-brand p-4">
              <Link className="navbar-brand " to="/">HOME</Link>
            </li>
            {(localStorage.getItem('authToken')) ? (<li className="navbar-brand p-4">
              <Link className="navbar-brand " to="/">MY ORDER</Link>
            </li>) : ""}

          </ul>
          {
            (!localStorage.getItem('authToken')) ?
              <div className='d-flex justify-content-end'>
                <Link className='btn bg-warning m-3 rounded' to='/loginuser' >LOGIN</Link>
                <Link className='btn bg-warning m-3 rounded' to='/createuser'>REGISTER</Link></div>
              :<div className='d-flex'> <div><Link className='btn bg-warning m-3 rounded' to='/cart'> CART <Badge className='bg-danger rounded-circle p-1 '>{data.length}</Badge></Link> </div>

                <div className='btn bg-warning m-3 rounded' onClick={handlelogout}>LOGOUT</div></div>
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
