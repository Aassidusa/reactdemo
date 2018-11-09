
import React, { Component, PropTypes } from 'react';


const buttonStyle = {
    margin: '10px'
};

class Counter extends Component{
    static defaultProps = {
        initValue: 0,
        onUpdate: f => f
    }


    state = {
        count: this.props.initValue
    }
    onClickIncrementButton = () => {
        this.updateCount(true);
    }

    onClickDecrementButton = () => {
        this.updateCount(false);
    }

    updateCount(isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;

        this.setState({count: newValue})
        this.props.onUpdate(newValue, previousValue)
    }

    render() {
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }


}
;
export default Counter;