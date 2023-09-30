import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, StyledNavLink } from './SharedLayout.styled';

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Nav>
                    <StyledNavLink to="/">Home</StyledNavLink>
                    <StyledNavLink to="movies">Movies</StyledNavLink>
                </Nav>
            </Header>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </Container>
    );
};
