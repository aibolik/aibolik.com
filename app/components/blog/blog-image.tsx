import * as React from 'react';
import styled from 'styled-components';

const IMG_CLOUD_PROVIDER_URL = `https://aibolik.mo.cloudinary.net/`;

interface BlogImageProps {
  imgProps: Omit<JSX.IntrinsicElements['img'], 'ref'>;
  caption?: string | React.ReactElement;
  cloudId?: string;
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
  cloudId,
}: BlogImageProps) => {
  let src = cloudId ? `${IMG_CLOUD_PROVIDER_URL}${cloudId}` : imgProps.src;

  return (
    <Wrapper>
      <Image {...imgProps} src={src} />
      {caption ? <Caption>{caption}</Caption> : null}
    </Wrapper>
  );
}

export { BlogImage };