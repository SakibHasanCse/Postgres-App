import React from 'react';
import { signUp, signInApi } from '../../actions/auth'
import { connect } from 'react-redux'
const Navbar = (props) => {
    const handlesignIn = () => {
        props.signInApi({
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
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/" className="navbar-brand h1">ROUTINE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={handlesignUp}>SignUp</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={handlesignIn}>Sign In</div>
                        </li>


                    </ul>

                </div>
            </nav>
        </React.Fragment>

    )
}
const mapStateToProps = ({ auth }) => {
    console.log(auth)
    return { ...auth }

}
export default connect(mapStateToProps, { signUp, signInApi })(Navbar)