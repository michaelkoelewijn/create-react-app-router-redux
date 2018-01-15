import React from 'react';
import { connect } from 'react-redux'

class Home extends React.Component {
    
    handleClick() {
        this.props.dispatch({
            type: 'INCREMENT'
        })
    }

    handleClickDecrement() {
        this.props.dispatch({
            type: 'DECREMENT'
        })
    }

    render() {
        const { count } = this.props.list;
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Clicked {count} times</button>
                <button onClick={this.handleClickDecrement.bind(this)}>DECREMENT</button>
            </div>
        )
    }
}

export default connect(state => ({
    list: state.list
}))(Home);