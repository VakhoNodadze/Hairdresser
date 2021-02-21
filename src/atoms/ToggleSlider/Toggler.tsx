import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { SwitchLabel, Slider } from './styled';

interface Props{
  isChecked: boolean;
  [x:string]: any;
}

const Toggler: FC <Props> = ({ isChecked, onChange, ...props }) => (
  <SwitchLabel {...props}>
    <input type="checkbox" onChange={onChange} checked={isChecked} />
    <Slider />
  </SwitchLabel>
);

Toggler.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func
};

Toggler.defaultProps = {
  isActive: true
  // onChange: () => {}
};

export default Toggler;
