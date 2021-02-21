import React, { FC, useState, useEffect } from 'react';
import { withTheme } from 'styled-components';

import { StyledContainer } from './styled';
import { ThemeProps } from 'styled/themes';
import { List, ListItem } from 'molecules/List';
import Segment from 'atoms/Segment';


interface Props extends ThemeProps{
  panes: any;
  activeIndex: any;
  onlyMenu?: boolean;
  onlyPanes?: boolean;
  onTabClick?: any;
  onUpdate?: any;
  fluidMenu?: any;
}

// eslint-disable-next-line max-len
const Tab: FC <Props> = ({ theme, panes, activeIndex, onlyMenu = false, onlyPanes = false, onTabClick, onUpdate, fluidMenu, ...rest }) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);

  // const fluidMenuStyle = {
  //   borderBottom: `1px solid ${theme.colors.primaryIcons}`,
  //   margin: 0,
  //   display: 'flex',
  //   flexWrap: 'nowrap',
  //   justifyContent: 'space-around'
  // };

  const handleItemClick = (index: number) => {
    setCurrentIndex(index);
    if (onTabClick) {onTabClick(index);}
  };

  const renderMenu = () => (
    <List display='flex' style={{ justifyContent: 'center', paddingTop: '10px', background: theme.colors.secondaryBg } }>
      {panes.map((item: any, index: number) => (
        <ListItem
          isTab
          hasBorderBottom={currentIndex === index}
          key={item.title}
          onClick={() => handleItemClick(index)}
          active={currentIndex === index}
          mx={theme.space.small}
          px={theme.space.small}
          my={0}
          mb={-1}
          style={{
            cursor: 'pointer'
          }}
        >
          {item.title}
        </ListItem>
      ))}
    </List>
  );
  const renderPanes = () => (
    <>
      {panes.map((item: any, index: number) => {
        if (currentIndex === index) {
          return (
            <Segment key={item.title} color='togglerBg' my={theme.space.border}
              style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
              {item.render()}
            </Segment>
          );
        }
        return null;
      })}
    </>
  );

  const renderContent = () => {
    if (onlyMenu) {return renderMenu();}
    if (onlyPanes) {return renderPanes();}
    return (
      <>
        {renderMenu()}
        {renderPanes()}
      </>
    );
  };

  useEffect(
    () => {
      setCurrentIndex(activeIndex);
      setTimeout(onUpdate, 100);
    },
    [activeIndex]
  );

  return <StyledContainer {...rest}>{renderContent()}</StyledContainer>;
};

// Tab.propTypes = {
//   panes: PropTypes.array,
//   activeIndex: PropTypes.number,
//   onlyMenu: PropTypes.bool,
//   onlyPanes: PropTypes.bool,
//   onTabClick: PropTypes.func,
//   onUpdate: PropTypes.func,
//   fluidMenu: PropTypes.bool
// };

Tab.defaultProps = {
  panes: [],
  activeIndex: 0,
  onlyMenu: false,
  onlyPanes: false,
  onTabClick: null,
  // onUpdate: () => {},
  fluidMenu: false
};

export default withTheme(Tab);
