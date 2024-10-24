import { fireEvent, render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { LinkImages } from "./LinkImages";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

let mockNavigate;

beforeEach(() => {
    mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate); 
    jest.clearAllMocks(); 
});

test('test that the link images render correctly when page is loaded', () => {
    render(<LinkImages />);

    const mustard_link_image = screen.getByAltText(/mustard link/i);
    expect (mustard_link_image).toBeInTheDocument();

    const green_link_image = screen.getByAltText(/green link/i);
    expect (green_link_image).toBeInTheDocument();

    const orange_link_image = screen.getByAltText(/green link/i);
    expect (orange_link_image).toBeInTheDocument();
})

// test('make sure that link images links work', () => {
//     render(<LinkImages />);

//     // const mustard_link = screen.getAllByAltText(/mustard link/i);
//     userEvent.click(screen.getByRole('link', {name: 'mustard_link_image'}))
//     expect(screen.getByRole('p', {name: 'Who We Are'})).toBeInTheDocument()
// })