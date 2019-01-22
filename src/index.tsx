import React from 'react';
import ReactDOM from 'react-dom';

const App: React.StatelessComponent<{}> = () => {
    return <div>Hi there!</div>
};

ReactDOM.render(
    <App />,
    document.querySelector('#root'),
);