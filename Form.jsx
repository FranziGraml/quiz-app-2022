 export default function App() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
  
    function createQuestion(question, answer) {
      setQuestion(question);
      setAnswer(answer);
    }
  
    return (
      <div className="App">

        <Form onCreateQuestion={createQuestion} />
        
      </div>
    );
  }



   function Form({ onCreateQuestion }) {
    function handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const { question, answer } = form.elements;
      onCreateQuestion(question.value, answer.value);
      form.reset();
    }
    return (
      <div className="App">
        <form aria-labelledby="user" onSubmit={handleSubmit}>
          <h2 id="user">Create a question</h2>
          <label htmlFor="question">Question: </label>
          <input id="question" type="text" />
          <label htmlFor="answer">Answer: </label>
          <input id="answer" type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
  