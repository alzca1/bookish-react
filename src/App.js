import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import BookListContainer from "./BookListContainer";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookishhhh
      </Typography>
      <BookListContainer />
    </div>
  );
}

export default App;
