import styled from "styled-components";

export const Container = styled.div``;

export const BlockContainer = styled.div<{ isCleanData: boolean }>`
  margin: 40px;
  padding: 24px;
  background: ${(props) => (props.isCleanData ? "#ddffdd" : "#ffefef")};
`;
