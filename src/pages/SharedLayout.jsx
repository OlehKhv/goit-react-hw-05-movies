import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
    return (
        <>
            <header>
                <Nav>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="movies">Movies</StyledLink>
                </Nav>
            </header>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};
