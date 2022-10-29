function App() {
  const [quote, setQuote] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState([]);

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
      {quote.map((quote) => (
        <div>{quote.text}</div>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
