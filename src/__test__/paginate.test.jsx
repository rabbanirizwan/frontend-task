import { fireEvent, render, screen } from "@testing-library/react";
import Paginate from "../components/common/paginate";
import { mockAlbums } from "./mockData";

const obj = {
  data: mockAlbums,
  itemsPerPage: 20,
  handlePageChange: jest.fn(),
  currentPage: 1,
};

describe("paginate", () => {
  test("should display 5 pagination box", () => {
    render(<Paginate {...obj} />);
    expect(screen.getByTestId(1)).toBeInTheDocument();
    expect(screen.getByTestId(2)).toBeInTheDocument();
    expect(screen.getByTestId(3)).toBeInTheDocument();
    expect(screen.getByTestId(4)).toBeInTheDocument();
    expect(screen.getByTestId(5)).toBeInTheDocument();
    expect(screen.queryByTestId(6)).not.toBeInTheDocument();
  });
  test("button one should have blue background color initially", async () => {
    render(<Paginate {...obj} />);
    expect(await screen.findByTestId(1)).toHaveClass("bg-blue-500");
  });
  test("button two should have gray background color before click", async () => {
    render(<Paginate {...obj} />);
    expect(await screen.findByTestId(2)).toHaveClass("bg-gray-300");
  });
  test("should call handlePageChange on click", async () => {
    render(<Paginate {...obj} />);
    const button = screen.getByTestId(2);

    fireEvent.click(button);

    expect(obj.handlePageChange).toHaveBeenCalledWith(2);
   
  });
});
