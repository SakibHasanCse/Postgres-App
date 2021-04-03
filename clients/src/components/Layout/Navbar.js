import React from 'react';
import { signUp, signIn } from '../../actions/auth'
import { connect } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom';
import { Nav } from './Styles';
const Navbar = (props) => {
    const handlesignIn = () => {
        props.signIn({
            email: 'asdasdas@gmail.com',
            password: 'dfdasfasdsa'
        })
    }
    const handlesignUp = () => {
        props.signUp({
            name: 'Sakib Hasan',
            email: 'asdasdas@gmail.com',
            password: 'dfdasfasdsa'
        })
    }


    return (
        <Nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <div className="logo"><a href="/">Best To Do List</a></div>
                    </div>
                    <div className="auth-btns col-md-7">
                        {/* {user ? (
                            <div className="float-right mt-3">{user.email}</div>
                        ) : ( */}
                        <>
                            <NavLink to="/signup">
                                <button className="btn sign-up">Sign Up</button>
                            </NavLink>
                            <NavLink to="/signin">
                                <button className="btn sign-in">Sign In</button>
                            </NavLink>
                        </>
                        {/* )} */}
                    </div>
                </div>
            </div>
        </Nav>


    )
}
const mapStateToProps = ({ auth }) => {
    console.log(auth)
    return { ...auth }

}
export default Navbar