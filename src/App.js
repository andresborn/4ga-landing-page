import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import { Navbar } from './components/Navbar.js';
import { Jumbotron } from './components/Jumbotron.js';
import { Card } from './components/Card.js';
import { Container } from './components/Container.js';

function App() {
  return (
    <div className="App">
      <Navbar title="A Hendrix Experience Tribute Page" search="Search Albums"/>
      <Jumbotron title="A Jimi Hendrix Tribute Page" content='The Rock and Roll Hall of Fame describes him as "arguably the greatest instrumentalist in the history of rock music".' />
      <Container />
    </div>
  );
}

export default App;
