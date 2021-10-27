import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import BookListContainer from "./BookList/BookListContainer";
import { Route, Switch } from "react-router";
import BookDetailContainer from "./BookDetail/BookDetailContainer";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookishhhh
      </Typography>
      <Switch>
        <Route exact path="/" component={BookListContainer} />
        <Route path="/books/:id" component={BookDetailContainer} />
      </Switch>
    </div>
  );
}

export default App;
