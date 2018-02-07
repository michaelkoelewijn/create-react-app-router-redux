import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { increment, decrement } from '../actions/list';

class Home extends React.Component {

    handleClick() {
        this.props.actions.increment();
    }

    handleClickDecrement() {
        this.props.actions.decrement();
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

function mapStateToProps(state) {
    return {
        list: state.list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ increment, decrement }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);