import { fireEvent, render, screen } from "@testing-library/react";
import TotalPage from "../components/common/totalPage";

const obj = {
  handlePagination: jest.fn(),
  page: 20,
};

describe("Pagination",()=>{
    test("should have 20 initially",()=>{
        render(<TotalPage {...obj}/>);
        expect(screen.getByText(20)).toBeInTheDocument();
    });
    test("click on 30 should call handlePagination and change items in page to 30",()=>{
        render(<TotalPage {...obj}/>);
        const button  =  screen.getByTestId('menu-button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        const option = screen.getByText(30);
        fireEvent.click(option);
        expect(obj.handlePagination).toBeCalledTimes(1);
    })
})
