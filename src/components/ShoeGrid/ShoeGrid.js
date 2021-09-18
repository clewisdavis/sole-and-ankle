import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard  {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* gap: 32px; */
  flex-wrap: wrap;
  /* deal with margins gap */
  margin: -16px;
`;

const ShoeWrapper = styled.div`
  min-width: 275px;
  /* deal with margins gap */
  margin: 16px;
  flex: 1;
`;

export default ShoeGrid;
