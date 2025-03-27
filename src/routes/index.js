import { createBrowserRouter } from "react-router-dom";
import Devis from "../PAGES/devis";
import Aboutt from "../PAGES/about";
import Home from "../PAGES/Home";
import Livraison from "../PAGES/livraison";
import Login from "../PAGES/login";
import Paiement from "../PAGES/paiement";
import Profil from "../PAGES/profil";
import Solve from "../PAGES/solve";
import Notfound from "../PAGES/not";
import Layout from "../layouts/layout";
import NotFound from "../PAGES/not";


export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<Aboutt />
            },
            {
                path:'/devis',
                element:<Devis/>
            },
            {
                path:'/livraison',
                element:<Livraison/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/paiement',
                element:<Paiement/>
            },
            {
                path:'/profil',
                element:<Profil/>
            },
            {
                path:'/solve',
                element:<Solve/>
            },
            
        ],
    },
    {
        path:'*',
        element:<NotFound/>,
    },
])