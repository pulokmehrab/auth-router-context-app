import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
    const {user}=useContext(AuthContext);

    return (
        <div>
           {user?.email && <span className='mx-4'> 
           User Email:-{user.email}
           <h1> Welcome {user.displayName}</h1>
  </span>}
        </div> 
    );
};

export default Home;