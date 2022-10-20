import { error } from 'daisyui/src/colors';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';


const Register = () => {
     const {createUser, signWithGoogle } = useContext(AuthContext);
      console.log( 'createuser', createUser);
        const handleSubmit = event =>{
            event.preventDefault();

            const form = event.target;
            const name =form.name.value
            const  email= form.email.value;
            const password =form.password.value;
            console.log(email,password,name)

            createUser(email,password)
            .then(result=>{
                const user =result.user;
                console.log('registered user', user)
            })
            .catch(error=>{
                console.error(error);
            })
            form.reset()
        }
        const handlesigninwithggle =()=>{
            signWithGoogle()
            .then(result=>{
                const user =result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
        }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register here</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter your name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email123@gmai.com" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <p className='mt-5 '>Already have an accoun?</p>
          <Link to="/login" className="btn glass ">Log In</Link>
        </div>
      </form>
      <button onClick={handlesigninwithggle} className="btn btn-success">Success</button>

    </div>
  </div>
</div>
        </div>
    );
};

export default Register;