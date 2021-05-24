import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>
                Made: 20.5.2021
            </p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
