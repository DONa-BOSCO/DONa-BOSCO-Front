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
import Contact from "../pages/Contact";
import UserProfileView from "../pages/UserProfileView"
import AddPost from "../components/AddPost";
import AllPost from "../components/AllPosts";
import Post from "../components/Post";

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
                path: '/contact',
                element: <Contact />,
                
            },
            {
                path: '/userprofileview',
                element: <UserProfileView />,
            },
            {
                path: '/addpost',
                element: <AddPost />,
            },
            {
                path: '/allpost',
                element: <AllPost />,
                loader: loaderPosts
            },
            {
                path: '/post',
                element: <Post />,
                loader: loaderPost
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

async function loaderPost({ params }) {
    const Post = await postHandler.loadPost(params.id)
    return { Post, params };
};
async function loaderPosts() {
    const posts = await postHandler.loadPosts()
    return { posts };
};