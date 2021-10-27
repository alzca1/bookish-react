import { render } from "@testing-library/react";
import BookDetail from "./BookDetail";

describe("BookDetail", () => {
  it("renders title", () => {
    // defino las props que voy a recibir
    const props = {
      book: {
        name: "Refactoring",
      },
    };
    // renderizo virtualmente el componente dentro de la constante container
    // que hemos desestructurado
    const { container } = render(<BookDetail {...props} />);
    // accedo al title del componente y lo guardo en la const title
    const title = container.querySelector(".book-title");
    // espero que el contenido de title(innerHTML) sea igual a la prop
    // props.book.name que le he pasado.
    expect(title.innerHTML).toEqual(props.book.name);
  });
  it("renders description", () => {
    const props = {
      book: {
        name: "Refactoring",
        description:
          "Martin Fowler's Refactoring defined core ideas and techniques" +
          "that hundreds of thousansd of developers have used to improve" +
          "their software",
      },
    };
    const {container} = render(<BookDetail {...props} />);
    const description = container.querySelector("p.book-description");
    expect(description.innerHTML).toEqual(props.book.description);
  });
});
