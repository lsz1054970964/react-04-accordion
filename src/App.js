import React, { useState } from "react";
import data from "./data";
import Questions from "./Questions";

function App() {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toggleQuestion = (id) => {
    // used to close the button
    // if the answer has been shown and the button has been clicked
    // close it
    // if the answer has been shown and another button has been clicked
    // close it and open another button
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <section>
        <Questions
          questions={questions}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      </section>
    </main>
  );
}

export default App;
