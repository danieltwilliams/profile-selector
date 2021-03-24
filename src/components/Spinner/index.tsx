import styled, { css, keyframes } from "styled-components";

const load8 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  ${({ theme }) => css`
    &:after {
      border-radius: 50%;
      width: 10em;
      height: 10em;
    }
    position: relative;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-left: 2px solid ${theme.colors.red};
    transform: translateZ(0);
    animation: ${load8} 0.5s infinite linear;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
  `};
`;
export default Spinner;
