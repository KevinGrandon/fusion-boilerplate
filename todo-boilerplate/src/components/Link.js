import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { styled } from 'fusion-plugin-styletron-react';

const StyledLink = styled('a', {
  cursor: 'pointer'
});

const Link = ({ active, children, setFilter }) => (
  <StyledLink
    className={classnames({ selected: active })}
    onClick={setFilter}
  >
    {children}
  </StyledLink>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default Link;
