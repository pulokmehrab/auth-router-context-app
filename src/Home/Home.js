import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
    const {user}=useContext(AuthContext);

    return (
        <div>
          <h1>welcome {user.displayName}</h1>
        </div>
    );
};

export default Home;