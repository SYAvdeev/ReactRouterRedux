import React from 'react';

interface HomePageProps {
    isAuthenticated: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({isAuthenticated}) => {

    return (isAuthenticated ? <h1>Добро пожаловать, авторизованный пользователь!</h1> : <h1>Добро пожаловать, гость!</h1>);
}