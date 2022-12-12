import { Header } from "./components/Header/header";
import { Login } from "./pages/cadastro";
import {GlobalStyle} from "./styles/global"

function App() {
  return (
    <div >
      <GlobalStyle/>
      <Header/>
      <Login/>

      
     
    </div>
  );
}

export default App;
