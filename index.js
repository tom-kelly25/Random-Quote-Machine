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
    <div>
      Hello World
      {quotes.map((quote) => (
        <div>{quote.text}</div>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
