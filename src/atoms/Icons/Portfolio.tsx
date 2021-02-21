/* eslint-disable max-len */
import { FC } from 'react';
import { withTheme } from 'styled-components';

import { ThemeProps, colorCheme } from 'styled/themes';

interface Props extends ThemeProps {
  color?: keyof typeof colorCheme;
}

export const Portfolio: FC <Props> = ({ theme, color }) => {

  return (
    <svg viewBox="0 0 24 24" style={{ width: theme.sizes.tiny, fill: theme.colors[color ?? 'primaryIcons'] }}>
      <path d="M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h6a1.19,1.19,0,0,0,.32-.05L20,12.39Zm0-7.72L14.84,12H9.16L4,10.28V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z"/>
    </svg>
  );
};

export default withTheme(Portfolio);
