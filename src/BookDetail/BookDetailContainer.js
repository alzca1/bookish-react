import React, { useEffect, useState } from "react";
import { useRemoteService } from "../hooks/useRemoteService";
import BookDetail from "./BookDetail";

export default function BookDetailContainer({ match }) {
  const { data } = useRemoteService(
    `http://localhost:8080/books/${match.params.id}`,
    {}
  );
  console.log(data)
  const [id, _] = useState(match.params.id);
  const [book, setBook] = useState({});

  return <BookDetail book={data} />;
}
