import React from "react";

export default function BookDetail({ book }) {
  console.log(book);
  return (
    <>
      <h2 className="book-title">{book.name}</h2>
      <p className="book-description">{book.description}</p>
    </>
  );
}
