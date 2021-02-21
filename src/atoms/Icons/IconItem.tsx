import { useState, FC } from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './styled';
import * as icons from './index';
import { ThemeProps, colorCheme } from 'styled/themes';

interface IconProps extends ThemeProps {
    name?: keyof typeof icons;
    onClick?: any;
    activeColor?: keyof typeof colorCheme;
    defaultColor?: keyof typeof colorCheme;
    [x:string]: any;
}

const IconItem: FC <IconProps> = ({
  name, onClick, activeColor, defaultColor, theme, ...rest
}) => {
  const Icon = name ? icons[name] : () => null;
  const [isHovered, setIsHovered] = useState(false);


  return (
    <StyledContainer 
      onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} {...rest}>
      <Icon name={name} theme={theme} color={isHovered ? activeColor : defaultColor} />
    </StyledContainer>
  );
};

IconItem.propTypes = {
  name: PropTypes.any,
  onClick: PropTypes.func
};

export default IconItem;
