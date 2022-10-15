import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

// props here is coming from the FormControl down below. It is very useful for dinamically styling.
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? 'red' : 'black'};
  }
 
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    background: ${props => props.invalid ? 'salmon' : '#f5eff3'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #f5eff3;
    border-color: #86637b;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true); // after starting typing, remove the red background
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // // with div
  // `` is a in-built javascript for templating. It will be treating as normal string and we can add JS inside $
  // we are adding dinamically the ccs class by using  isValid as a condition
  // <div className={`form-control ${!isValid ? "invalid" : ""}`}></div>
  
  // // with FormControl controlling the css output
  // <FormControl className={!isValid && 'invalid'}>

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
