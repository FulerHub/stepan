import React, {FC, useState} from 'react';
import SwitchLang from "./SwitchLang";

interface IMenu{
    open?: boolean;
    setOpen?:(value:boolean)=>void
}

const Menu:FC<IMenu> = ({open,setOpen=()=>{}}) => {
    return (
        <nav className={`menu ${open ? 'active': ''}`}>
            <ul className={`menu__wrap ${open ? 'active': ''}`}>
                <li className={'menu__item'}><a href="">history</a></li>
                <li className={'menu__item'}><a href="">biography</a></li>
                <li className={'menu__item'}><a href="">achievements</a></li>

            </ul>
            <SwitchLang className={`header__lang-mob ${open ? "active" : ""}`}/>
            <div className={`menu__burger-wrap ${open ? 'active': ''}`}>
                <div className={`menu__burger ${open ? 'active': ''}`} onClick={()=>setOpen(!open)}>
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>

        </nav>
    );
};

export default Menu;