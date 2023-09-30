import { styled } from 'styled-components';

export const SearchForm = styled('form')`
    display: flex;
    gap: 20px;
    width: 100%;
    height: 40px;
    margin-bottom: 40px;
`;

export const SearchInput = styled('input')`
    width: 300px;
    padding: 16px;
    border-radius: 8px;
`;

export const SearchButton = styled('button')`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100px;
    border: 1px solid black;
    border-radius: 8px;
`;
