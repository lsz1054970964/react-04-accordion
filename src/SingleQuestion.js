import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  //const [showinfo, setShowinfo] = useState(false);

  /*
  const toggle = () => {
    setShowinfo(!showinfo);
  };
  */

  // used to decide on which question is asked to be shown more
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
