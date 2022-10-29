function App() {
  const [quote, setQuote] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  const [color, setColor] = React.useState("#16a085");
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

  const getNewQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    let randIndex = Math.floor(Math.random() * quote.length);
    let randColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuote(quote[randIndex]);
    setColor(colors[randColorIndex]);
  };

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
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
            <div className="row">
              <button
                onClick={getNewQuote}
                className="btn btn-primary ml-4 mb-3"
              >
                New Quote
              </button>
              <a
                href={
                  "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                  encodeURIComponent(
                    '"' + randomQuote.text + '" ' + randomQuote.author
                  )
                }
                target="_blank"
              >
                <i className="fa fa-twitter ml-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
