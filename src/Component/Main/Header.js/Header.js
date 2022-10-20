import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const Header = () => {
     const {user,logOut}= useContext(AuthContext);
     console.log(user);

     const handlesignOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
     }

    return (
        <div>
   
<div className="navbar bg-primary text-primary-content">
  <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
  {/* <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link> */}
  {user?.email && <span className='mx-4'> User Email:-{user.email}
  </span>}
    { 
      user?.email?
      <Link onClick={handlesignOut} className="btn btn-primary normal-case text-xl" >SignOut</Link>
      :<Link className='btn btn-ghost normal-case text-xl' to='/login'>Log In</Link>
     }      
 
</div>
        </div>
    );
};

export default Header;