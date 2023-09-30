import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MainTitle = styled('h1')`
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 40px;
    color: green;
`;

export const MovieList = styled('ul')`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: blueviolet;
    background-color: lightblue;
    font-size: 20px;
    padding: 4px;
    border: 1px solid blue;
    border-radius: 4px;
    &.active {
        color: red;
    }
`;
