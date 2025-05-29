import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {login} from '../store/authenticationSlice'
import Button from '@mui/material/Button';

interface LoginProps {
    isAuthenticated: boolean;
}

export const Login: React.FC<LoginProps> = ({ isAuthenticated }) => {
    
   const navigate = useNavigate();

    if(isAuthenticated)
        navigate('/');
    
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(login());
        navigate('/');
    }

    return (
        <>
            <h1>Страница входа</h1>
            <Button onClick={handleClick} variant="outlined">Войти</Button>
        </>
    );
}