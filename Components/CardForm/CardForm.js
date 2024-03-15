import styled from "styled-components";
import useSWR from "swr";

const StyledForm = styled.form`
  height: 40vh;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  background-color: white;
  margin-top: 100px;
  margin-bottom: 235px;

  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 12px;
  padding: 1rem;
`;
const StyledInput = styled.input`
  border-radius: 6px;
  padding: 0.5rem;
  margin-top: 0;
  border-style: none;
  border: 1px solid hotpink;
  color: black;
`;

const StyledSubmitButton = styled.button`
  border-style: none;
  background-color: white;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 6px;
  width: 70px;
  align-self: center;
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
        <label htmlFor="question">Question:</label>
        <StyledInput id="question" name="question" type="text"></StyledInput>
        <label htmlFor="answer">Answer:</label>
        <StyledInput id="answer" name="answer" type="text"></StyledInput>
        <StyledSubmitButton>Submit</StyledSubmitButton>
      </StyledForm>
    </>
  );
}
