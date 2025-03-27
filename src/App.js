import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index';


function App() {
  return (<>
    { /*
    
    <ProductCard/>
    <Livraison />
    <Paiement/>
    <Aboutt /> 
    <Solve />
    <Home />
    */ }
    
    
    
    <RouterProvider router={router} />
    
    </>
  );
}

export default App;
