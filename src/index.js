// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './CommentApp'
import './index.css'

/*
测试题：百分比转换器
*/

class Input extends Component {
    constructor() {
        super()
        this.state = {
            number: 0
        }
    }

    inputClickHandle(event) {
        this.setState({number: event.target.value},
            () => {
                if (this.props.onSubmit) {
                    const {number} = this.state
                    this.props.onSubmit({number})
                }
            }
        )
    }

    render() {
        return (
            <div>
                <input type='number' onChange={this.inputClickHandle.bind(this)}/>
            </div>
        )
    }
}

class PercentageShower extends Component {
    render() {
        return (
            <div>
                {Math.round(this.props.number * 100) / 100 * 100}%
            </div>
        )
    }
}

class PercentageApp extends Component {
    constructor() {
        super()
        this.state = {
            number: 0
        }
    }

    parmHandle(number) {
        this.setState(number)
    }

    render() {
        return (
            <div>
                <Input onSubmit={this.parmHandle.bind(this)}/>
                <PercentageShower number={this.state.number}/>
            </div>
        )
    }
}


ReactDOM.render(
    <PercentageApp/>,
    document.getElementById('root')
);
