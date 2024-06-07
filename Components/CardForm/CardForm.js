import styled from "styled-components";

const StyledForm = styled.form`
  width: 70vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;

  border-radius: 12px;

  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
`;

const StyledLabel = styled.label`
  color: var(--color-font);
`;

const StyledInput = styled.input`
  border-radius: 6px;
  padding: 0.5rem;
  margin-top: 0;
  border: 1px solid var(--color-font);
  color: var(--color-font);
`;

const StyledSubmitButton = styled.button`
  background-color: transparent;
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

export default function CardForm({ handleSubmit, value, isEditMode }) {
  return (
    <>
      <StyledForm $edit={isEditMode} onSubmit={handleSubmit}>
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
