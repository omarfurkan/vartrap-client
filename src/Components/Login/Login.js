import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';





const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading || googleLoading) {
        return <Loading />
    };

    let signInError;

    if (error || googleError) {
        signInError = <p className='text-primary'>{error?.message || googleError?.message}</p>
    }

    if (googleUser) {
        console.log(googleUser)
    }


    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };







    return (
        <div className='max-w-screen-2xl flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl mt-8">
                <div className="card-body">
                    <h2 className="text-center font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {errors.email?.type === 'required' && <span className='text-primary'>Email is required</span>}
                            <input type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs"
                                {...register("email", { required: true, message: 'Email Required' })} />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {errors.password?.type === 'required' && <span className='text-primary'>Password Requried</span>}

                            <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password Required'
                                    }
                                }
                                )} />
                        </div>


                        {signInError}
                        <input className='btn w-full max-w-xs  bg-primary text-white mt-5' type="submit" value="Login" />
                    </form>



                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary">Login with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;