import React from 'react';

function Welcome (props){
    console.log(props.match);
    console.log(props.name);
    let name = props.match && props.match.params.name || props.name || "Default";
    return (
        <div className="Welcome">
            Welcome, {name}!
        </div>
    );
}

export default Welcome;