import React, {Component} from 'react';
import { connect } from 'react-redux';


class CounterContainer extends Component {
  render() {
    const {count, dispatch} = this.props;

    return (
      <div>
        <p id="render-store">{count}</p>
        <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
        <button onClick={() => dispatch({ type: 'REMOVE' })}>-</button>
        <button onClick={() => dispatch({ type: 'REMOVETEN' })}>-10</button>
        <button onClick={() => dispatch({ type: 'ADDTEN' })}>+10</button>
        <button onClick={() => dispatch({ type: 'RESETCOUNTER' })}>reset</button>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  count: state
});

export default connect(mapStateToProps)(CounterContainer);