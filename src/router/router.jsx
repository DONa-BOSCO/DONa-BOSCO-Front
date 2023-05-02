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
import UserProfileView from "../pages/UserProfileView"
import ContactForm from "../pages/ContactForm"

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
                path: "/dashboardadmin/editProduct/:id",
                element: <EditProduct />,
                loader: loaderProduct, 
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
                path: '/dashboardadmin',
                element: <DashboardAdmin />,
                loader: loaderProducts,
            },
            {
                path: '/ContactForm',
                element: <ContactForm />,
                
            },
            {
                path: '/userprofileview',
                element: <UserProfileView />,
            },
            
        ]
    }
])

async function loaderProduct({ params }) {
    const Product = await productHandler.loadProduct(params.id)
    return { Product, params };
};
async function loaderProducts() {
    const products = await productHandler.loadProducts()
    return { products };
};