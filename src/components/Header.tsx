import React, {FC, useEffect, useRef, useState} from 'react';
import Menu from "./Menu";
import Logo from "./icons/Logo";
import Button from "./UI/Button";
import SwitchLang from "./SwitchLang";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

const Header:FC = () => {
    gsap.registerPlugin(ScrollTrigger);
    const [open, setOpen] = useState(false);
    const targetSection = useRef(null);
    useEffect(()=>{
        const UpStartUpDown = {y:-100,opacity:0,duration: 1.0, stagger: 0.5};
        const InFinishUpDown = {y:0,opacity:1,duration: 1.0, stagger: 0.3,clearProps:"transform"};
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: targetSection.current
            }});
        timeline
            .fromTo(".header", UpStartUpDown, InFinishUpDown, 2.0)
        ;
    },[targetSection]);
    return (
        <header className={'header'} ref={targetSection}>
            <div className="container">
                <div className="header__wrap">
                    <div className="header__logo">
                        <Logo/>
                    </div>
                    <div className="header__menu">
                        <Menu open={open} setOpen={setOpen}/>
                    </div>
                    <div className="header__controls">
                        <SwitchLang className={`header__lang ${open ? "active" : ""}`}/>
                        <Button name={'Explore'}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;