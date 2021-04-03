import React from 'react'
import { Main } from './Styles'


import Navbar from '../Layout/Navbar'

export const Landing = () => {
    return (
        <>
            <Navbar />
            <Main>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn">Get Started</button>
                        </div>
                    </div>
                </div>

            </Main>

        </>
    )
}
