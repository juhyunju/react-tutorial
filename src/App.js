import logo from './logo.svg';
import './App.css';
function Article(){
    return(
      <article>
      <h2>Welcome</h2>  
      Hello, WEB
    </article>  
    );
  }

  function Nav(){
    return (

      <nav>
      <ol>
        <li><a href="1.html">html</a></li>
        <li><a href="2.html">css</a></li>
      </ol>
    </nav>
    );
  }
      

    


function App() {
  return (
    <div>
    <header><h1><a href="index.html">WEB</a></h1></header>
      <Nav></Nav>
      <Article></Article>
  </div>
  );
}

export default App;
