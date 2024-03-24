import styled from "styled-components";

const Spinner = styled.div`
  color: var(--color-font);
  position: fixed;
  z-index: 9;
  height: 2rem;
  width: 2rem;
  overflow: visible;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default function LoadingSpinner() {
  return <Spinner>Loading...</Spinner>;
}
