import React from "react";
import { useRemoteService } from "../hooks/useRemoteService";

import BookList from "./BookList";

export default function BookListContainer() {
  const { data, loading, error } = useRemoteService(
    "http://localhost:8080/books",
    []
  );

  return <BookList books={data} loading={loading} error={error} />;
}
