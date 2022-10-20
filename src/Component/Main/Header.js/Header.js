import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const Header = () => {
     const user= useContext(AuthContext);
    //  console.log(user);



    return (
        <div>
   
<div className="navbar bg-primary text-primary-content">
  <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
</div>
        </div>
    );
};

export default Header;