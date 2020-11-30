import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#AC1010' : '#077BF1')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '8px 14px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({round}) => (round ? '50px' : 'none')};
    font-family: Roboto Slab;
    &:hover {
        background: ${({ primary }) => (primary ?  '#C31212' : '#F26A2E')};
        transform: translateY(-2px);

    }
    `