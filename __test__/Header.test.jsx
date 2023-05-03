import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../src/components/Header'

describe('Show navbar contact', () => {
    it('renders text correctly', () => {
        const sut = render(
            <Router>
                <Header />
            </Router>
        );
        expect(sut).toMatchSnapshot();
    });

    it('Nav component renders correctly', () => {
        const component = render(
            <Router>
                <Nav>
                    <Link to='/login'></Link>
                    <Link to='/join'></Link>
                </Nav>
            </Router>
        );
        expect(component).toMatchSnapshot();
    });

      
});
