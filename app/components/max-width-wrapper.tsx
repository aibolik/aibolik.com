import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '~/utils/theme-get';


const MaxWidthWrapper = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;

  @media ${themeGet('breakpoints.mobile')} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export { MaxWidthWrapper };
