import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 h-8 lg:mr-10 hover:bg-orange-200 flex items-center  rounded-sm'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;