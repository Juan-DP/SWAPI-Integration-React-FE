import logo from './logo.svg';
import './App.css';
import Header from './components/UI/Header';
import Navbar from './components/UI/Navbar';
import styles from "./index.module.css";
import Universe from './components/Background/Universe';
import { createPortal } from 'react-dom';
import Home from './components/Home/Home';
function App() {
  
  return (
    <div className="App">
      {createPortal(
        <Universe />,
        document.body
      )}
      <head>
        <link href="https://fonts.cdnfonts.com/css/star-wars" rel="stylesheet"/>
        <link href="https://allfont.net/allfont.css?fonts=star-jedi" rel="stylesheet" type="text/css" />
      </head>
                
      <Header/>

      <Navbar>
        <button className={styles['navbar-button']}type='button'>Home</button>
        <button className={styles['navbar-button']}type='button'>Categories</button>
        <button className={styles['navbar-button']}type='button'>Project insight</button>
      </Navbar>

      <Home></Home>
      {/* {false && <Categories></Categories>}
      {false && <ProjectInsight></ProjectInsight>} */}
    </div>
  );
}

export default App;
