/* eslint-disable max-len */
import { FC } from 'react';
import { withTheme } from 'styled-components';

import { ThemeProps, colorCheme } from 'styled/themes';

interface Props extends ThemeProps {
  color?: keyof typeof colorCheme;
}

export const InviteFriends: FC <Props> = ({ theme, color }) => {

  return (
    <svg viewBox="0 0 24 24" style={{ width: theme.sizes.tiny, fill: theme.colors[color ?? 'primaryIcons'] }}>
      <path d="M21,10.5H20v-1a1,1,0,0,0-2,0v1H17a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Zm-7.7,1.72A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5Z"/>
    </svg>
  );
};

export default withTheme(InviteFriends);
