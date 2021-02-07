import './App.css';
import Review from './Review';

function App() {
  return (
    <div>
      <main >
        <section className="container">
          <div className="title">
            <h2>Our reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>

    </div>
  );
}

export default App;
