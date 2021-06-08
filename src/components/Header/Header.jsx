import React, { useState, useEffect, useRef } from 'react';

import "./Header.scss";
import "../../App.scss";

import { openMenu, closeMenu } from "../../animations";
import { ReactComponent as UpArrow } from "../../assets/arrow-up.svg";

const Header = () => {
    const [menuState, setMenuState] = useState(false);

    // check for first render 
    const useIsMount = () => {
        const isMountRef = useRef(true);
        useEffect(() => {
          isMountRef.current = false;
        }, []);
        return isMountRef.current;
    };

    const isMount = useIsMount();

    useEffect(() => {
        if(menuState === true) {
            openMenu();
        } else if(!isMount) { // prevent useEffect from running on first render
            closeMenu();
        }
    }, [menuState]);

    return (
        <header className="Header">
            <p className="Header__logo">COMPANYX</p>
            <div className="Header__menu">
                <div onClick={() => setMenuState(true)} className="Header__menu-hamburger">
                    <span></span>
                    <span></span>
                </div>
                <div onClick={() => setMenuState(false)} className="Header__menu-closed">
                    <UpArrow />
                </div>
            </div>
        </header>
    )
}

export default Header;
