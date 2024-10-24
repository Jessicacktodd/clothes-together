import { fireEvent, render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";

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

test('renders NavBar with links and logo', () => {
    render(<NavBar />)

    const logoElement = screen.getByAltText(/clothes together logo/i);
    expect(logoElement).toBeInTheDocument();

    const instagramLink = screen.getByAltText(/Instagram/i);
    expect(instagramLink).toBeInTheDocument();

    const facebookLink = screen.getByAltText(/Facebook/i);
    expect(facebookLink).toBeInTheDocument();
})

test('navigates to correct pages when top buttons are clicked', () => {
    render(<NavBar />);

    const brandButton = screen.getByText(/find out more \(brands\)/i);
    fireEvent.click(brandButton);
    expect(mockNavigate).toHaveBeenNthCalledWith(1, "/FindOutMoreBrands");

    const charityButton = screen.getByText(/find out more \(charities\)/i);
    fireEvent.click(charityButton)
    expect(mockNavigate).toHaveBeenNthCalledWith(2, "/FindOutMoreCharities");

});


test('navigates to correct pages when spreadout links are clicked', () => {
    render(<NavBar />);

    const WhoWeAreButton = screen.getByRole('button', { name: /who we are/i })
    fireEvent.click(WhoWeAreButton);
    expect(mockNavigate).toHaveBeenNthCalledWith(1, "/WhoWeAre");

    const PressButton = screen.getByRole('button', { name: /Press/i})
    fireEvent.click(PressButton);
    expect(mockNavigate).toHaveBeenNthCalledWith(2, "/PRESS")
});

test('logo navigates to landing page when clicked', () => {
    render(<NavBar />)

    const logoButton = screen.getByRole('button', { name: /clothes together logo/i})
    fireEvent.click(logoButton);
    expect(mockNavigate).toHaveBeenNthCalledWith(1, "/")
});
