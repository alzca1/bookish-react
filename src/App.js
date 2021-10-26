import Typography from "@material-ui/core/Typography";

const books = [{ name: "Refactoring" }, { name: "Domain-driven design" }];

function App() {
  const renderBooks = (books) => {
    return (
      <div data-test="book-list">
        {books.map((book) => {
          return (
            <div className="book-item">
              <h2 className="title">{book.name}</h2>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookishhhh
      </Typography>
      {renderBooks(books)}
    </div>
  );
}

export default App;
