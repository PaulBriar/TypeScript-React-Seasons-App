import './SeasonDisplay.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component<any, any> {
    state = { lat: null, errMsg: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({ errMsg: err.message})
        );
    };

    componentDidUpdate() {
        console.log('Component updated');

    };

	public render() {
        if (this.state.errMsg && !this.state.lat) {
            return <div>Error: {this.state.errMsg} </div>
        } else if (!this.state.errMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner />;
    };
};


ReactDOM.render(
    <App />,
    document.querySelector('#root'),
);