import { createBrowserRouter } from "react-router-dom";
import { productHandler } from '../handlers/productHandler'
import Root from './Root'
import Home from '../pages/Home'
import AddProduct from '../pages/AddProduct'
import EditProduct from '../pages/EditProduct'
import NotFound from '../pages/NotFound'
import Join from '../pages/Join'
import Login from '../pages/Login'
import DashboardUser from '../pages/DashboardUser'
import DashboardAdmin from '../pages/DashboardAdmin'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,

        children: [
            {
                index: true,
                element: <Home />,

            },
            {
                path: '/addproduct',
                element: <AddProduct />,
            },
            {
                path: '/editproduct',
                element: <EditProduct />,
            },
            {
                path: '/join',
                element: <Join />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/dashboarduser',
                element: <DashboardUser />,
                loader: loaderProducts,
            },
            {
                path: '/dashboarduser',
                element: <DashboardAdmin />,
                loader: loaderProducts,
            },
            
        ]
    }
])

async function loaderProduct({ params }) {
    const product = await productHandler.loadProduct(params.id)
    return { product };
};
async function loaderProducts() {
    const products = await productHandler.loadProducts()
    return { products };
};