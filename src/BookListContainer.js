import React from "react";
import { useRemoteService } from "./hooks/useRemoteService";
import BookList from "./BookList";

export default function BookListContainer() {
  const { data, loading, error } = useRemoteService([]);


  return <BookList books={data} loading={loading} error={error} />;
}
