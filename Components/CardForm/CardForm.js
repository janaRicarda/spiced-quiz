import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  background-color: white;
  margin-top: ${({ $edit }) => ($edit ? "2rem" : "150px")};
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
`;

const StyledTextarea = styled.textarea`
  border-radius: 6px;
  padding: 0.5rem;
  margin-top: 0;
  border-style: none;
  border: 1px solid var(--color-font);
  color: var(--color-font);
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
