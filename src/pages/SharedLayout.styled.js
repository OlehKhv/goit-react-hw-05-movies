import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    color: black;
    &.active {
        color: red;
    }
`;

export const Nav = styled('nav')`
    display: flex;
    gap: 40px;
`;
