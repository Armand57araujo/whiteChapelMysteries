import React from 'react';

const ButtonList = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => (
                <button className='margin-top container d-flex align-items-center justify-content-center' key={index} onClick={() => console.log(`Button clicked for ${item}`)}>
                    {item}
                </button>
            ))}
        </div>
    );
};

export default ButtonList;