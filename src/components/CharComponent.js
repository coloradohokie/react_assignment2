import React from 'react';

const charComponent = (props) => {

    return (
        <div className="char-component" onClick={props.deleteCharacter}>
            <p>{props.character}</p>
        </div>

    )
}
export default charComponent;