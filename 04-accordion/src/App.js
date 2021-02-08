import './App.css';
import SingleQuestion from './Questions';
import questions from './Data'

function App() {

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about log in</h3>
        <section className="info">
          {
            questions.map((question) => {
              return <SingleQuestion {...question} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
