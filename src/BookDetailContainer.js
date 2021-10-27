import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRemoteService } from "./hooks/useRemoteService";

export default function BookDetailContainer({ match }) {
const {data} = useRemoteService(`http://localhost:8080/books/${match.params.id}`, {})
  const [id, _] = useState(match.params.id);
  const [book, setBook] = useState({});


  return <h2 className="book-title">{data.name}</h2>;
}
