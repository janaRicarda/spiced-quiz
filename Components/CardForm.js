import styled from "styled-components";

const StyledForm = styled.form`
  width: 70vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--section-background);
  border-radius: 12px;
  padding: 1.5rem;
`;

const StyledLabel = styled.label`
  color: var(--font);
`;

const StyledInput = styled.input`
  border-radius: 6px;
  padding: 0.5rem;
  margin-top: 0;
  border: 1px solid var(--font);
  color: var(--font);
`;

const StyledSubmitButton = styled.button`
  background-color: transparent;
  padding: 0.5rem;
  border: 1px solid var(--font);
  color: var(--font);
  border-radius: 6px;
  width: 70px;
  align-self: center;
  &:hover {
    background-color: var(--background);
  }
`;

export default function CardForm({ onSubmit, value, isEditMode }) {
  return (
    <>
      <StyledForm $edit={isEditMode} onSubmit={onSubmit}>
        <StyledLabel htmlFor="question">Question:</StyledLabel>
        <StyledInput
          id="question"
          name="question"
          type="text"
          defaultValue={value.question}
        />

        <StyledLabel htmlFor="answer">Answer:</StyledLabel>
        <StyledInput
          id="answer"
          name="answer"
          type="text"
          defaultValue={value.answer}
        />

        <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
      </StyledForm>
    </>
  );
}
