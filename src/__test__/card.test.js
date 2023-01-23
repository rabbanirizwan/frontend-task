import { fireEvent, render, screen } from "@testing-library/react";
import Card from "../components/common/card";

const obj = {
  name: "Leanne Graham",
  title: "distinctio laborum qui",
  userColors: {
    1: "https://via.placeholder.com/150/f4a724",
    2: "https://via.placeholder.com/150/33f66e",
  },
};

test("card should be display data on Album", () => {
  render(<Card {...obj} />);

  expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
  expect(screen.getByText(/distinctio laborum qui/i)).toBeInTheDocument();
});

const objForPhoto = {
  name: "eaque aut omnis ",
  title: "ratione vel quas nostrum et eius est",
  thumbnailUrl: "https://via.placeholder.com/150/53f7dd",
  albumId: 5,
  setPhoto: jest.fn(),
};

describe("test card for Photo", () => {
  test("card should be display data on Photo", () => {
    render(<Card {...objForPhoto} />);

  
    expect(
      screen.getByText(/ratione vel quas nostrum et eius est/i)
    ).toBeInTheDocument();
  });

  test("setPhoto should call when click on photo",()=>{
    render(<Card {...objForPhoto} />);
    const card = screen.getByText(/ratione vel quas nostrum et eius est/i);
    fireEvent.click(card);
    expect(objForPhoto.setPhoto).toBeCalledTimes(1);
  })
});
