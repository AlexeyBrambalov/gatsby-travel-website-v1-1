import styled from "styled-components"
import { GiWhiteTower } from "react-icons/gi"
import {Link} from "gatsby"



export const Nav = styled.nav`
    background: ${({active}) => active ? "#fff" : "linear-gradient(to bottom, rgba(255,255,255, 0.9) 0%, rgba(255,255,255,0) 100%)"};
    height: 80px;
    display:  flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
       
        transition: 0.5s all ease; 
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1000px;
    `
export const NavLogo = styled(Link)`
color: #141414;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
font-family: 'Fredericka the Great', cursive;
`    
export const NavIcon = styled(GiWhiteTower)`
    color: white;
    margin: 0 0.5rem 0 2 rem;
    color: white;
    `
    export const MobileIcon = styled.div`
        display: none;

        @media screen and (max-width:960px) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;
        }
    `

    export const NavMenu = styled.ul`
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
        
        @media screen and (max-width: 960px) {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 90vh;
            position: absolute;
            top: ${({ click }) => (click ? "100%" : "-1000px")};
                opacity: 1;
                transition: all 0.2s ease;
                background: #fff;
    }
    `
    export const NavItem = styled.li`
        height: 80px;

        @media screen and (max-width: 960px) {
            width: 100%;
        }
        `

    export const NavLinks = styled(Link)`
        color: #141414;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 2rem;
        height: 100%;
        font-size: 20px;
        font-family: "Architects Daughter", cursive;
        
        &:hover {
           color: black; 
       
            transform: scale(1.1);
            transition: transform .4s;
    
        }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
           color: #ff4040; 
           transition: all 0.3s ease;
        }
    }
    `
   export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
  
    @media screen and (max-width: 768px) {
        display: none;
    }
    `