import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    // console.log(signInUser);
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // firebase LogIn Send.
        signInUser(email, password)
            .then(result => {
                console.log(result.user);

                const logInInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }

                // update last login to the DB.
                fetch('https://a10-recipe-book-app-server-lilac.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(logInInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.matchedCount) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "LogIn Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        setTimeout(() => {
                            navigate('/');
                        }, 1100);
                    })

            })
            .catch(error => {
                alert(error);
            })
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