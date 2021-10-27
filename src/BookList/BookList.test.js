import React from "react";
import { render } from "@testing-library/react";
import BookList from "./BookList";

describe("BookList", () => {
    // testamos si el componente carga el loading
  it("loading", () => {
      // definimos props solo con la función loading
    const props = {
      loading: true,
    };
    // renderizamos <BookList /> y extraemos container
    const { container } = render(<BookList {...props} />);
    // definimos content a partir de la selección de la tag <p>
    // dentro de container
    const content = container.querySelector("p");
    // esperamos que content contenga el texto "Loading"
    expect(content.innerHTML).toContain("Loading");
  });
  it("error", () => {
    const props = {
      error: true,
    };
    const { container } = render(<BookList {...props} />);
    const content = container.querySelector("p");
    expect(content.innerHTML).toContain("Error");
  });
  it("render books", () => {
    const props = {
      books: [
        { name: "Refactoring", id: 1 },
        { name: "Domain-driven design", id: 2 },
      ],
    };
    const { container } = render(<BookList {...props} />);
    // en el caso success, definimos titles y lo mapeamos 
    // para que nos devuelva un array de títulos
    const titles = [...container.querySelectorAll("h2")].map(
      (x) => x.innerHTML
    );
    // esperamos que ese array contenga los títulos que se indican
    expect(titles).toEqual(["Refactoring", "Domain-driven design"]);
  });
});
