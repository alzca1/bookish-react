import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookishhhh
      </Typography>
      <div data-test="book-list">
        <div className="book-item"></div>
        <div className="book-item"></div>
      </div>
    </div>
  );
}

export default App;
