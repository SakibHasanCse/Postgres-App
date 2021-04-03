import React from 'react'
import styled from 'styled-components'
import { Footer } from './Footer'
import Navbar from './Navbar'

const Wrapper = styled.div`
    width:100%;
    min-height:100vh;
    position:relative;

`
export const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Navbar />
            {children}
            <Footer />

        </Wrapper>
    )
}
