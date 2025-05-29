import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {logout} from "../store/authenticationSlice.ts";
import Button from '@mui/material/Button';

interface HeaderProps {
    isAuthenticated: boolean;
}

export const Header: React.FC<HeaderProps> = ({isAuthenticated}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function logoutClick() {
        dispatch(logout());
        navigate('/');
    }
    
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/">Главная</Link>
                </li>
                {
                    isAuthenticated ? (
                        <>
                            <li>
                                <Button onClick={logoutClick} variant="outlined">Выйти</Button>
                            </li>
                        </>                    
                    ) :(
                        <>
                            <li>
                                <Link to="/register">Регистрация</Link>
                            </li>
                            <li>
                                <Link to="/login">Войти</Link>
                            </li>
                        </>                    
                    )                    
                }
            </ul>
        </nav>
    );
}