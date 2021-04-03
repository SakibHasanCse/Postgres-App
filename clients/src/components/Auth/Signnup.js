import React, { useState, useEffect } from 'react'
import { Layout } from '../Layout/Layout'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
const SignnUp = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        nameError: '',
        emailError: '',
        confirmPasswordError: '',
        passwordError: '',
        error: '',
        success: false
    })

    const { name, email, password,
        confirmPassword, nameError
        , emailError, passwordError
        , confirmPasswordError, error,
        success } = values




    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (event, name) => {
        // setValues({ ...values, error: false, [name]: event.target.value })

        const user = {}
        const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        user[name] = event.target.value
        switch (name) {
            case 'name':
                setValues({ ...values, name: user.name, success: '', error: '' })

                user.name.length < 3 ? setValues({ ...values, nameError: 'Name must be at least 3 characters' }) : setValues({ ...values, nameError: '' })
                break;
            case 'email':
                setValues({ ...values, email: user.email, success: '', error: '' })
                !emailRegex.test(user.email) ? setValues({ ...values, emailError: 'Invalid Email' }) : setValues({ ...values, emailError: '' })
                break;
            case 'password':
                setValues({ ...values, password: user.password, success: '', error: '' })
                user.password.length < 6 ? setValues({ ...values, passwordError: 'Password must be at least 6 characters' }) : setValues({ ...values, passwordError: '' })
                break;
            case 'confirmPassword':
                console.log(user.confirmPassword)
                setValues({ ...values, confirmPassword: user.confirmPassword, success: '', error: '' })
                user.confirmPassword == password ? setValues({ ...values, confirmPasswordError: 'Confram Password not match' }) : setValues({ ...values, confirmPasswordError: '' })
                break;

            default:
                break;


        }
        console.log(confirmPasswordError, user)






    }



    const signupForm = () => {

        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Full Name</label>
                    <input type="text"
                        className={classnames("form-control", { 'is-invalid': nameError, 'is-valid': !nameError && name.length })}
                        placeholder="Enter your name"
                        onChange={(e) => handleChange(e, 'name')}

                    />
                    {nameError && <small className="text-danger">{nameError}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor=""> Email</label>
                    <input type="email"
                        className={classnames("form-control", {
                            'is-invalid': emailError, 'is-valid': !emailError && email.length
                        })}
                        onChange={(e) => handleChange(e, 'email')}

                        placeholder="Enter your  email"

                    />
                    {emailError && <small className="text-danger">{emailError}</small>}

                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password"
                        className={classnames("form-control", { 'is-invalid': passwordError, 'is-valid': !passwordError && password.length })}
                        onChange={(e) => handleChange(e, 'password')}
                        placeholder="Enter your password"

                    />
                    {passwordError && <small className="text-danger">{passwordError}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password"
                        className={classnames("form-control", { 'is-invalid': confirmPasswordError, 'is-valid': !confirmPasswordError && confirmPassword.length })}
                        onChange={(e) => handleChange(e, 'confirmPassword')}

                        placeholder="Confirm your password" />
                    {confirmPasswordError && <small className="text-danger">{confirmPasswordError}</small>}
                </div>
                <div>

                    <button type="submit" className="btn btn-info">Create</button>
                </div>
                <p className="float-left">
                    Already Have an Account ?
                    <NavLink to="/signin" >Sign in</NavLink>
                </p>

            </form>
        )
    }
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2>Create a new account</h2>
                        {signupForm()}
                    </div>
                </div>
            </div>






            {/* </AuthFromWrapper> */}
        </Layout>
    )
}

export default SignnUp