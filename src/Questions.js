import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h3>questions</h3>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
