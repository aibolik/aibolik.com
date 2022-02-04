import * as React from 'react';
import styled from 'styled-components';

interface BlogImageProps {
  imgProps: Omit<JSX.IntrinsicElements['img'], 'ref'>;
  caption?: string | React.ReactElement;
}

const Wrapper = styled.div`
  margin: 24px 0 32px;
`;

const Image = styled.img`
  
`;

const Caption = styled.span`
  display: block;
  font-size: 0.875rem;
  /* TODO: update colors */
  color: #ACACAC;
  text-align: center;
  margin-top: 12px;
`;

const BlogImage = ({
  imgProps,
  caption,
}: BlogImageProps) => {


  return (
    <Wrapper>
      <Image {...imgProps} />
      {caption ? <Caption>{caption}</Caption> : null}
    </Wrapper>
  );
}

export { BlogImage };