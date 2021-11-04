import React from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const { register, handleSubmit } = useForm();

    const location = useLocation();
    const history = useHistory();
    const url = location.state?.from || '/home';

    const signInGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(url);
            })
    }
    const onsubmit = data => {
        console.log(data);
    }
    return (
        <div className="m-5 login">
            <h1 className="fw-bold pb-4">Log in to your account</h1>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input {...register("name")} placeholder="Enter your name" />
                <input type="email" {...register("email")} placeholder="Enter your email" />
                <input type="submit" />
            </form>
            <h2 className="fw-bold py-3">OR</h2>
            <Button variant="outline-warning" className=" m-0 p-0" onClick={signInGoogle}>
                <img src="https://img.icons8.com/color/42/000000/google-logo.png" alt=""
                    className="bg-info m-0 p-0 pe-4"
                />
                <span className="px-5 fw-bold text-danger">login with google</span>
            </Button>
        </div >
    );
};

export default Login;