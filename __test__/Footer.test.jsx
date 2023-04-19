import Footer from '../src/components/Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

describe("Show message from Develop Team", () => {
    it("Should render paragraph from Develop Team!", () => {
        const sut = render(
            <Router>
                <Footer />
            </Router>
        );
        const paragraphElement = sut.getByText("Copyright©️ 2023 - DONa BOSCO");
        expect(paragraphElement).toBeInTheDocument();
    });

 });