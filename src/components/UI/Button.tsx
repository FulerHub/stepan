import React, {FC} from 'react';

interface IButton{
    name:React.ReactNode
}

const Button:FC<IButton> = ({name}) => {
    return (
        <a className={'button'}>
            {name}
        </a>
    );
};

export default Button;