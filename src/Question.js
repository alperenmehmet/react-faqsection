import React, { useState } from "react";

const Question = ({ que, ans }) => {
  const [showAns, setShowAns] = useState(false);
  return (
    <article>
      <div className="question-box">
        <button className="btn" onClick={() => setShowAns(!showAns)}>
          {que}
        </button>
        {showAns && <p>{ans}</p>}
      </div>
    </article>
  );
};

export default Question;
