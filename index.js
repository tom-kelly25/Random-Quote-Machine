function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuotes, setRandomQuotes] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const respose = await fetch("https://type.fit/api/quotes");
      const data = await respose.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuotes(data[randIndex]);
    }
    fetchData();
  }, []);

  return (
    <div className="container pt-5">
      <div className="jumbotron">
        <div className="card">
          <div className="card-header">Inspirational Quotes</div>
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
