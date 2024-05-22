import { NavBarComponent } from "./components/NavBarComponent/NavBarComponent";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  //Fragment --> Creado por react, se puede escribir <> </> o <React.Fragment> </React.Fragment>
  
  return (
    <>
     <NavBarComponent />
     <ItemListContainer greeting="Compra todo lo que necesitas para tu aventura" />
    </>
  );
};

export default App;
