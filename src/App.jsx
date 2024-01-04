import "./App.css";

function App() {
  return (
    <div className='Wrapper'>
      <div className='Container'>
        <div className='TopRow'>
          <h3>Join our community</h3>
          <h4>30-day, hassle-free money back guarantee</h4>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews.
          </p>
          <p>
            Perfect for any developers who are serious bout honing their skills.
          </p>
        </div>
        <div className='BottomRow'>
          <div className='RigthCard'>
            <h4>Monthly Subscription</h4>
            <div className='PriceTag'>
              <h2>$29</h2>
              <a>per month</a>
            </div>
            <p>Full access for less than $1 a day</p>
            <button>Sing Up</button>
          </div>
          <div className='LeftCard'>
            <h4>Why Us</h4>
            <p>Tutorials by industry experts</p>
            <p>Peer & expert code review </p>
            <p>Coding exercises</p>
            <p>Access to our GitHub repos</p>
            <p>Community forum </p>
            <p>Flashcards decks</p>
            <p>New videos every week</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
