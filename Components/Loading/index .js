import styled from "styled-components";
import Chilli from "@/icons/chilli.svg";

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RedChilli = styled(Chilli)`
  width: 8rem;
  height: 8rem;
  fill: black;
`;

export default function LoadingSpinner() {
  return (
    <StyledSection>
      <RedChilli />
      Loading...
    </StyledSection>
  );
}
