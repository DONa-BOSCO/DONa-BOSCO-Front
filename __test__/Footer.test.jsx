import Footer from '../src/components/Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

describe("Show message from Develop Team", () => {
  it("Should render paragraph from Develop Team!", () => {
    const { getByText } = render(
      <Router>
        <Footer />
      </Router>
    );
    const paragraphElement = getByText(/Copyright/)
    expect(paragraphElement).toBeInTheDocument();
  });
});
