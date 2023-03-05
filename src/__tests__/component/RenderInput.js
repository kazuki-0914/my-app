import userEvent from "@testing-library/user-event";
import RenderInput from '../../component/RenderInput'
import { render, screen,fireEvent } from '@testing-library/react';

// it("Should update input value correctly", () => {
//     render(<RenderInput />);
  
//     const inputValue = screen.getByPlaceholderText("Enter");
  
//     userEvent.type(inputValue, "test");
//     console.log(`screen`,screen.debug());
//     expect(inputValue.value).toBe("test");
//   });

  it("Should trigger output function", () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText("Enter");
    fireEvent.change(inputValue, {target: {value: '23'}})
    // console.log(`screen`,screen.debug());
    expect(inputValue.value).toBe("23");

    // console.log(`inputValue`,inputValue.value);
    // // userEvent.type(inputValue, "test");
    // // userEvent.click(screen.getByRole("button"));
    // userEvent.type(inputValue, "test");
    // console.log(`screen`,screen.debug());
    // expect(inputValue.value).toBe("test");
  
    // expect(outputConsole).toHaveBeenCalledTimes(1);
  });