/* eslint-disable max-len */
import { FC } from 'react';
import { withTheme } from 'styled-components';

import { ThemeProps, colorCheme } from 'styled/themes';

interface Props extends ThemeProps {
  color?: keyof typeof colorCheme;
}

export const Spinner: FC <Props> = ({ theme, color }) => {
  return (
    <svg viewBox="0 0 24 24" style={{ width: theme.sizes.tiny, fill: theme.colors[color ?? 'primaryIcons'] }}>
      <path fill={color || '#2675fe'} d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite" />
      </path>
    </svg>
  );
};

export default withTheme(Spinner);
