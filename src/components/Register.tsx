import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {login} from '../store/authenticationSlice'
import Button from '@mui/material/Button';

interface RegisterProps {
    isAuthenticated: boolean;
}

export const Register: React.FC<RegisterProps> = ({isAuthenticated}) => {
    
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
            <h1>Регистрация</h1>
            <Button onClick={handleClick} variant="outlined">Зарегистрироваться</Button>
        </>
    );
}