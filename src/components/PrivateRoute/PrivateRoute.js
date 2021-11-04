import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLogining } = useAuth();

    if (isLogining) {
        return <Spinner animation="border" variant="secondary" />
    }

    // console.log(user)
    return (
        <Route
            {...rest}
            render={({ location }) => !!user && !isLogining ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;