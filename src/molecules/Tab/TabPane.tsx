import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { StyledItem } from './styled';

const TabPane: FC = ({ children, ...rest }) => <StyledItem {...rest}>{children}</StyledItem>;

TabPane.propTypes = {};

TabPane.defaultProps = {};

export default TabPane;
