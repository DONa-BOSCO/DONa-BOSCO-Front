import { render, screen, waitFor  } from "@testing-library/react";
import "@testing-library/jest-dom";
/* import userEvent from '@testing-library/user-event';   */
import DashboardAdmin from "../src/pages/DashboardAdmin";
import { productService } from "../src/services/productService";



vi.mock("../src/services/productService", () => ({
    productService: vi.fn(() => ({
        getProducts: vi.fn(() => ({
        products: [
            {
                id: 1,
                title: 'sofa grande',
                description: 'Sofa muy comodo de color vinotinto de tres asientos',
                category: "Hogar y jardin",
                condition: "seminuevo",
                location: "Huelva",
                img: "https://cdn.shopify.com/s/files/1/0266/2403/2817/products/womens-japanese-temari-kimono-one-size-739_2000x.jpg?v=1619718576"
            },

            {
                id: 2,
                title: 'Juego de Mesa',
                description: 'Juego de Mesa XCOM para jugar con amigos',
                category: "Videojuegos y videojuegos",
                condition: "seminuevo",
                location: "Sevilla",
                img: "https://cdn.shopify.com/s/files/1/0266/2403/2817/products/womens-japanese-temari-kimono-one-size-739_2000x.jpg?v=1619718576"
            },
        ]
        }))
    })),  
}))

beforeEach(() => {
    render(<DashboardAdmin />)
})

describe("AdmDashboard rendering", () => {
    test("should render search bar", () => {
        const searchElement = screen.getByPlaceholderText(/search/i);
        expect(searchElement).toBeInTheDocument();
    })

    test("should render delete button", () => {
        const deleteButtonElements = screen.getAllByRole("button", { name: /delete/i });
        expect(deleteButtonElements[0]).toBeInTheDocument();
    })

    test("should render title of second product", () => {
        const productTwoElement = screen.getByText(/Juego de Mesa/);
        expect(productTwoElement).toBeInTheDocument();
    })

    test("should render title of first product", () => {
        const productOneElement = screen.getByText(/sofa grande/);
        expect(productOneElement).toBeInTheDocument();
    })
})

