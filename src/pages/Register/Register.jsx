import React from 'react';
import { Link } from 'react-router';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
    }

    return (
        <div className='flex justify-center mx-6 my-8'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-3xl text-center'>Create Your Account!</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input name='name' type="text"
                            className="input" placeholder="Name" required />

                        {/* photo url */}
                        <label className="label">Photo URL</label>
                        <input name='photo' type="text"
                            className="input" placeholder="Photo URL" required />

                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email"
                            className="input" placeholder="Email" required />

                        {/* password */}
                        <label className="label">Password</label>
                        <input name='password' type="password"
                            className="input" placeholder="Password" required />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        {/* button */}
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>

                        <p className='flex gap-1 mt-5 justify-center font-semibold'>Already have an account?
                            <Link to="/auth/login" className='text-blue-500 font-medium'>Login Now</Link>.
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;