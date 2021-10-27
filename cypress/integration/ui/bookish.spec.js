// bookish.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import axios from "axios";

// before(() => {
//   return axios
//     .delete("http://localhost:8080/books?_cleanup=true")
//     .catch((err) => err);
// });

// afterEach(() => {
//   return axios
//     .delete("http://localhost:8080/books?_cleanup=true")
//     .catch((err) => err);
// });

// beforeEach(() => {
//   const books = [
//     { "name": "Refactoring", "id": 1 },
//     { "name": "Domain-driven design", "id": 2 },
//     { "name": "Building Microservices", "id": 3 },
//   ];
//   return books.map((item) =>
//     axios.post("http://localhost:8080/books", item, {
//       headers: { "Content-Type": "application/json" },
//     })
//   );
// });

describe("Bookish application", () => {
  it("Visits the bookish", () => {
    cy.visit("http://localhost:3000/");
    cy.get('h2[data-test="heading"]').contains("Bookish");
  });
  it("Shows a book list", () => {
    cy.visit("http://localhost:3000/");
    cy.get('div[data-test="book-list"]').should("exist");

    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);

      const titles = [...books].map((x) => x.querySelector("h2").innerHTML);
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
        "Building Microservices",
      ]);
    });
  });
  it("Goes to the detail page", () => {
    // vamos a la url
    cy.visit("http://localhost:3000/");
    // buscamos el primer View Details que encontremos y clickamos
    cy.get("div.book-item").contains("View Details").eq(0).click();
    // la url debería incluir el fragmento "/books/1"
    cy.url().should("include", "/books/1");
    cy.get("h2.book-title").contains("Refactoring");
  });
});
