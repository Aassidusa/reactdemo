import React, { Component } from 'react';
class ClickCounter extends Component{
    state = { count: 0 }

    onClickButton  = () => {
     this.setState({ count: this.state.count + 1 });
    }

    render() {
        const customStyle = {
            margin: '16px',
            color: "red"
        }

        return (
           <div style={customStyle}>
               <button onClick={this.onClickButton}>Click Me</button>
               <div>Click Click Count: { this.state.count }</div>
           </div>
        );
    }
}
export default ClickCounter;