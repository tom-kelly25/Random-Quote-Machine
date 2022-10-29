function App() {
  const [quote, setQuote] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  React.useEffect(() => {
    async function fetchData() {
      const respose = await fetch("https://type.fit/api/quotes");
      const data = await respose.json();
      setQuote(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="container pt-5">
        <div className="jumbotron">
          <div className="card">
            <div className="card-header">
              <h2>Inspirational Quotes</h2>
            </div>
            <div className="card-body"></div>
            {randomQuote ? (
              <>
                <p className="card-title">
                  - {randomQuote.author || "No author"}
                </p>
                <h5 className="card-text">&quot;{randomQuote.text}&quot;</h5>
              </>
            ) : (
              <h2>Loading</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
