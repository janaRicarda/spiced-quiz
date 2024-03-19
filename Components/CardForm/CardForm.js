import styled from "styled-components";
import useSWR from "swr";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  background-color: white;
  margin-top: 150px;
  margin-bottom: 60px;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-font);
  padding: 1.5rem;
`;

const StyledLabel = styled.label`
  color: var(--color-font);
`;

const StyledInput = styled.input`
  border-radius: 6px;
  padding: 0.5rem;
  margin-top: 0;
  border-style: none;
  border: 1px solid var(--color-font);
  color: var(--color-font);
  height: ${({ $moreHeight }) => ($moreHeight ? "13rem" : null)};
`;

const StyledSubmitButton = styled.button`
  border-style: none;
  background-color: white;
  padding: 0.5rem;
  border: 1px solid var(--color-font);
  color: var(--color-font);
  border-radius: 6px;
  width: 70px;
  align-self: center;
  &:hover {
    background-color: var(--color1);
  }
`;

export default function CardForm() {
  const { mutate } = useSWR("/api/spices");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const spiceData = Object.fromEntries(formData);

    const response = await fetch("/api/spices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spiceData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    event.target.reset();
  }
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="question">Question:</StyledLabel>
        <StyledInput id="question" name="question" type="text"></StyledInput>
        <StyledLabel htmlFor="answer">Answer:</StyledLabel>
        <StyledInput id="answer" name="answer" type="text"></StyledInput>
        <StyledLabel htmlFor="description">Description:</StyledLabel>
        <StyledInput
          $moreHeight
          id="description"
          name="description"
          type="text"
        ></StyledInput>
        <StyledSubmitButton>Submit</StyledSubmitButton>
      </StyledForm>
    </>
  );
}
