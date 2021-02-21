/* eslint-disable max-len */
import { FC } from 'react';
import { withTheme } from 'styled-components';

import { ThemeProps, colorCheme } from 'styled/themes';

interface Props extends ThemeProps {
  color?: keyof typeof colorCheme;
  [x:string]: any;
}

export const Chart: FC <Props> = ({ theme, color , ...rest }) => {

  return (
    <svg viewBox="0 0 24 24" style={{ width: theme.sizes.tiny, fill: theme.colors[color ?? 'primaryIcons'] }} {...rest}>
      <path d="M18,10H14V3a1,1,0,0,0-1-1H8A1,1,0,0,0,7,3V8H3A1,1,0,0,0,2,9V21a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V11A1,1,0,0,0,18,10ZM7,20H4V10H7Zm5,0H9V4h3Zm5,0H14V12h3ZM21,4H20V3a1,1,0,0,0-2,0V4H17a1,1,0,0,0,0,2h1V7a1,1,0,0,0,2,0V6h1a1,1,0,0,0,0-2Z"/>
    </svg>
  );
};

export default withTheme(Chart);
