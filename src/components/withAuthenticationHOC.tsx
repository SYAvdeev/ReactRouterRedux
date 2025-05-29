import React from 'react';
import {useSelector} from 'react-redux';
import type {RootState} from '../store/store';

interface AuthenticationProps {
    isAuthenticated: boolean;
}

function withAuthentication<P extends object>(WrappedComponent: React.ComponentType<P & AuthenticationProps>) {
    return (props: P) => {
        const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
        return <WrappedComponent {...props} isAuthenticated={isAuthenticated}/>;
    };
}

export default withAuthentication;
