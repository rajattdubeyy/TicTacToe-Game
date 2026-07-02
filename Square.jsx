import React from 'react';

const Square = ({value, onClick}) => {
    return (
        <div onClick = {onClick} className = {`square ${value === "X"?"x":"o"}`}>
            <h5>{value}</h5>    
        </div>
    );
};

export default Square;