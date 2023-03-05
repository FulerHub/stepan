import React, {FC} from 'react';

const Arrow:FC = () => {
    return (
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5.5H2.5V6.5H3V5.5ZM15 6.5C15.2761 6.5 15.5 6.27614 15.5 6C15.5 5.72386 15.2761 5.5 15 5.5V6.5ZM3 6.5L15 6.5V5.5L3 5.5V6.5Z" fill="white"/>
            <path d="M12 2.5L15.5 6L12 9.5" stroke="white" strokeLinecap="square"/>
        </svg>
    );
};

export default Arrow;