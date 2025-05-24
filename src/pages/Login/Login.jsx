import React from 'react';
import { Link } from 'react-router';

const Login = () => {

    const handleLogIn = e => {
        e.preventDefault();
    }

    return (
        <div className='flex justify-center mx-6 my-20 md:my-25 lg:my-30'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-3xl text-center'>Login now!</h2>
                <form onSubmit={handleLogIn} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="text"
                            className="input" placeholder="Email" />

                        {/* password */}
                        <label className="label">Password</label>
                        <input name='password' type="password"
                            className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        {/* button */}
                        <button type='submit'
                            className="btn btn-neutral mt-4">Login</button>

                        <p className='flex gap-1 mt-5 justify-center font-semibold'>Don't have an account ?
                            <Link to="/auth/register" className='text-blue-500 font-medium'>Register</Link>.
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;