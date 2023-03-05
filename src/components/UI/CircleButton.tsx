import React, {FC} from 'react';
import Arrow from "../icons/Arrow";
import Play from "../icons/Play";
import Pause from "../icons/Pause";


interface ICircleButton{
    className?:string;
    type?: "play" | "arrow" | "pause";
    name?: React.ReactNode;
    onClick?: ()=>void
}

const CircleButton:FC<ICircleButton> = ({className,type="arrow",onClick,name}) => {
    return (
        <div className={`circle-button ${className ? className: ''}`}>
            <a onClick={onClick}  className={'circle-button__button'}>
                {type === "arrow" && <Arrow/>}
                {type === "play" && <Play/>}
                {type === "pause" && <Pause/>}
            </a>
            <span>
                {name}
            </span>
        </div>

    );
};

export default CircleButton;