import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'
export default function Navbar({isScrolled}) {
    const links=[
        {name:'Home',link:'/'},
        {name:'Tv Shows',link:'/tv'},
        {name:'Movies',link:'/movies'},
        {name:'My List',link:'/mylist'},
    ]
  return (
    <Container>
        <nav className={`flex ${isScrolled? 'scrolled':""}`}>
            <div className="left flex a-center">
                <div className="brand flex a-center j-center">
                    <img src={logo} alt='logo' />
                </div>
                <ul className="links flex">
                    {
                    links.map((name,link)=>{
                        return(
                            <li key={name}><Link to={link}>{name}</Link></li>
                        )
                    })
                    }
                </ul>
            </div>
        </nav>
    </Container>
  )
}

const Container =styled.div`
`