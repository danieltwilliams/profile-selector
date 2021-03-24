import styled, { css } from "styled-components/macro";

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 15px;
    margin: 0 auto;
    margin-top: 80px;

    @media (min-width: ${theme.breakPoints.sm}px) {
      width: 540px;
    }
  `}
`;

export default Container;
