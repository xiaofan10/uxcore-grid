/*
 * Inspired by react-bootstrap: https://github.com/react-bootstrap/react-bootstrap/ 
 */

import classNames from 'classnames';

import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Col from './Col';

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ComponentClass = this.props.componentClass;
    const className = this.props.fluid ? 'kuma-container-fluid' : 'kuma-container';

    return (
      <ComponentClass
        {...this.props}
        className={classNames(this.props.className, className)}
          >
        {this.props.children}
      </ComponentClass>
    );
  }
}

Grid.displayName = 'Grid';
Grid.propTypes = {
  /**
     * Turn any fixed-width grid layout into a full-width layout by this property.
     *
     * Adds `container-fluid` class.
     */
  fluid: PropTypes.bool,
  /**
     * You can use a custom element for this component
     */
  componentClass: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

Grid.defaultProps = {
  componentClass: 'div',
  fluid: false,
};

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
