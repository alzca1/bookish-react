import React from "react";
import { useRemoteService } from "./hooks/useRemoteService";
import BookList from "./BookList";

export default function BookListContainer() {
  const { data, loading, error } = useRemoteService([]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }

  return <BookList books={data} />;
}
