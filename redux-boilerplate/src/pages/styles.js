import React from 'react';

import {styled} from 'fusion-plugin-styletron-react';

const Panel = styled('div', {background: 'silver'});

import {prepared} from 'fusion-react';
import Axios from 'axios';

/*
const RPC = ({name}) => (
  <div>
    RPC DEMO {name}
  </div>
);
*/

class RPC extends React.Component {
  render() {
    const {name} = this.props;
    console.log('What props do we get', this.props.name);
    return <div>RPC DEMO {name}</div>;
  }
}

//export default RPC;
const preparedFunc = async (props, context) => {
  console.log('What props', context);
  const response = await Axios.get('http://localhost:3000/api/user/1');
  console.log('AFTER PROMISEResponse come back', response.data);
  return {...response.data};
};
export default prepared(preparedFunc, {forceUpdate: true})(RPC);

// export default Styles;
