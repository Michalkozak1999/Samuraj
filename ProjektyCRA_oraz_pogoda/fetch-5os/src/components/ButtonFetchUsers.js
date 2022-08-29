import React from 'react';



const ButtonFetchUsers = (props) => {
    return (

        <div>
            <button style={{
                padding: '10px 20px',
                border: 'solid black 2px',
                backgroundColor: 'red',
                margin: '20px'

            }}onClick={props.click2}>

                Dodaj  użytkonika

            </button>
        </div>
    );
}

export default ButtonFetchUsers;