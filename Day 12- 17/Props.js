import React from 'react'

export const Greeting = (props) => {
  return (
    <div>
        <h1>Hello {props.name}!!!</h1>
        <p>You are {props.age} years old.</p>
    </div>
  );
};

export const Apps = () => {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
    </div>
  );
};
