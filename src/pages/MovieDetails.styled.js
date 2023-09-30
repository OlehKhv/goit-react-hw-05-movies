import { styled } from 'styled-components';
import { SearchButton } from './Movies.styled';
import { MovieList } from './Home.styled';

export const BackButton = styled(SearchButton)`
    height: 40px;
    margin-bottom: 40px;
`;

export const Title = styled('h2')`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const SubTitle = styled('h3')`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const Text = styled('p')`
    font-size: 16px;
    margin-bottom: 20px;
`;

export const Card = styled('div')`
    padding: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid grey;
`;

export const AddInfoList = styled(MovieList)`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 20px;
    border-bottom: 2px solid grey;
    margin-bottom: 20px;
`;
