import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
}

export default App;
