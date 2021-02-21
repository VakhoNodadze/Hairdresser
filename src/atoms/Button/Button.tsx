import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { variantType, variants } from 'styled/oneOf';
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  ColorProps,
  TypographyProps, BorderProps
} from 'styled-system';

import { colorCheme, fontSizes, ThemeProps } from 'styled/themes';
import { StyledContainer, StyledStartIcon } from './styled';

type SystemProps = ThemeProps & SpaceProps & LayoutProps & TypographyProps & ColorProps & FlexboxProps & BorderProps
interface Props extends SystemProps {
  fontSize?: keyof typeof fontSizes;
  color?: keyof typeof colorCheme;
  variant?: variantType;
  fluid?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: any;
  startIcon?: React.ReactNode;
  isActive?: boolean;
}

const Button:FC <Props> = ({
  children,
  size,
  color,
  fluid,
  fontSize,
  disabled,
  loading,
  onClick,
  variant,
  startIcon,
  isActive,
  ...rest
}) => {
  const handleClick = (e: any) => {
    if (disabled) {
      return null;
    }
    if (!loading) {
      onClick(e);
    }
    return null;
  };

  const renderLoader = () => (
    <>
      ...
    </>
  );

  const renderContent = () => {
    if (loading) {
      return renderLoader();
    }
    return (children);
  };

  return (
    <StyledContainer
      fontSize={fontSize}
      size={size}
      fluid={fluid}
      isDisabled={disabled}
      isActive={isActive}
      onClick={handleClick}
      variant={variant}
      {...rest}
    >
      {startIcon && <StyledStartIcon isActive={isActive}>{startIcon}</StyledStartIcon>}
      {renderContent()}
    </StyledContainer>
  );
};

Button.propTypes = {
  // size: String,
  // color: PropTypes.oneOf(colorCheme),
  fluid: PropTypes.bool,
  // attached: PropTypes.oneOf(attachs),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  startIcon: PropTypes.node,
  isActive: PropTypes.bool,
  variant: PropTypes.oneOf(variants)
};

Button.defaultProps = {
  fontSize: 'md',
  color: 'whiteBlack',
  fluid: false,
  disabled: false,
  loading: false,
  // eslint-disable-next-line no-empty-function
  onClick: () => {},
  startIcon: null,
  isActive: false
};
export default withTheme(Button);