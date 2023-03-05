import React, { FC } from 'react';


interface ISwitchLang {
    className?:string
}

const SwitchLang:FC<ISwitchLang> = ({className}) => {
    return (
        <div className={`lang ${className ? className:''}`}>
            <a href="#">UA</a>
            <a className={'active'} href="#">EN</a>
        </div>
    );
};

export default SwitchLang;