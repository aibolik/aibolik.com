import styled, { keyframes } from "styled-components";

const waving = keyframes`

  12% {
    transform: rotate(-10deg);
  }

  24% {
    transform: rotate(10deg);
  }

  36% {
    transform: rotate(-10deg);
  }

  48% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

export const Wave = styled.span`
  display: inline-block;
  transform-origin: bottom right;
  animation: ${waving} 3s ease-in-out 2s infinite;
`;