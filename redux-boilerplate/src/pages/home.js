import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {increment} from '../actions/increment.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {increment, counter} = this.props;
    return (
      <div>
        <h2>Sample Redux Counter</h2>
        <p>Current Count: {counter}</p>
        <button onClick={() => increment(1)}>Increment by one</button>
        <button onClick={() => increment(2)}>Increment by two</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  increment: increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
