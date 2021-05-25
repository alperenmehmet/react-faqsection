import React, { useState } from "react";
import Question from "./Question";
import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main className="box">
      <div>
        <h1>Frequently Asking Questions</h1>
      </div>
      <section>
        {questions.map((question) => {
          return <Question key={question.id} {...question}></Question>;
        })}
      </section>
    </main>
  );
}

export default App;
