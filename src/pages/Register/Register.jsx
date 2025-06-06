import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());


        // Create user with firebase.
        createUser(email, password)
            .then(result => {
                const user = result.user;

                // User profile upgrade.
                updateProfile(user, {
                    displayName: restFormData.name,
                    photoURL: restFormData.photo
                })

                // User Data.
                const userProfile = {
                    email,
                    restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }

                // Save profile info in the DB.
                fetch('https://a10-recipe-book-app-server-lilac.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your Account Is Created!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })
            })
            .catch(error => {
                alert(error);
            })
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
                <div className='mx-auto'>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;