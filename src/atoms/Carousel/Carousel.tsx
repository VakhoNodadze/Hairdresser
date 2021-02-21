import React, { FC, useRef, useState, useEffect, MutableRefObject, Children } from 'react';
import { StyledContainer, StyledContent, StyledArrow } from './styled';


import ChevronLeft from 'atoms/Icons/ArrowLeft';
import ChevronRight from 'atoms/Icons/ArrowRight';
import { spacing } from 'styled/themes';

type Props = {
  columns: number;
  spacing: keyof typeof spacing;
  children: JSX.Element[] | JSX.Element
}

const Carousel: FC <Props> = ({ children, columns, spacing, ...rest }) => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const contentRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  const [disabledLeft, setDisabledLeft] = useState(true);
  const [disabledRight, setDisabledRight] = useState(false);


  useEffect(() => {
    setDisabledRight(false);
  }, []);
  const handlePrevClick = () => {
    setActive((prevActive) => (!prevActive ? 0 : prevActive - 1));
    // setTimeout(checkArrows, 1000)
  };

  const handleNextClick = () => {
    setActive((prevActive) => 
      (Children.toArray(children).length - columns === prevActive ? 
        Children.toArray(children).length - columns : prevActive + 1));
    console.log('NEXT');
    // setTimeout(checkArrows, 1000)
  };

  const renderPrevNext = () => (
    <>
      {!disabledLeft && (
        <StyledArrow className="btn-prev" onClick={handlePrevClick}>
          <ChevronLeft color="white" />
        </StyledArrow>
      )}
      {!disabledRight && (
        <StyledArrow className="btn-next" onClick={handleNextClick}>
          <ChevronRight color="white" />
        </StyledArrow>
      )}
    </>
  );

  useEffect(() => {
    setWidth(containerRef.current.offsetWidth);
  }, []);

  useEffect(
    () => {
      if (width) {contentRef.current.style.transform = `translateX(-${Math.ceil(width / columns) * active}px)`;}
      setDisabledLeft(active === 0);
      // setDisabledRight(active === children.length - columns);
    },
    [active]
  );

  return (
    <StyledContainer spacing={spacing} ref={containerRef} /*hasPrevNext={children.length > columns}*/ {...rest}>
      <StyledContent spacing={spacing} ref={contentRef} columns={columns} width={width}>
        {children}
      </StyledContent>
      {/*children.length > columns &&*/ renderPrevNext()}
    </StyledContainer>
  );
};


export default Carousel;
