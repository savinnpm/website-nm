import { css } from "styled-components";

const getGapLg = (size) => {
  if (size == "2xl") {
    return "12px";
  }

  return "8px";
};

const getGapMd = (size) => {
  return "8px";
};

export const gap = css`
  gap: ${(props) => getGapLg(props.size)};

  @media (max-width: 768px) {
    gap: ${props => getGapMd(props.size)}; 
  }
`;
