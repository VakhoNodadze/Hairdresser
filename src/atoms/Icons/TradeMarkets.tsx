/* eslint-disable max-len */
import { FC } from 'react';
import { withTheme } from 'styled-components';

import { ThemeProps, colorCheme } from 'styled/themes';

interface Props extends ThemeProps {
  color?: keyof typeof colorCheme;
}

export const TradeMarkets: FC <Props> = ({ theme, color }) => {

  return (
    <svg viewBox="0 0 24 24" style={{ width: theme.sizes.tiny, fill: theme.colors[color ?? 'primaryIcons'] }}>
      <path d="M21.71,7.29a1,1,0,0,0-1.42,0L14,13.59,9.71,9.29a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,11.41l4.29,4.3a1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,21.71,7.29Z"/>
    </svg>
  );
};

export default withTheme(TradeMarkets);
