import logo from './logo.svg';
import './App.css';
function Article(props){
    
    return(
      <article>
      <h2>{props.title}</h2>  
      {props.body}
    </article>  
    );
  }

  function Nav(props){
    // var lis = [
    //   <li><a href="1.html">html</a></li>,
    //   <li><a href="2.html">css</a></li>
    // ]
    var lis = [];
    for(var i =0; i < props.data.length; i++){
      lis.push(<li key ={props.data[i].id}>{props.data[i].title}</li>)

    }
    return (
      <nav>
      <ol>
        {lis}
      </ol>
    </nav>
    );
  }
  function Header(props){
    return(
      <header><h1><a href="index.html">{props.title}</a></h1></header>

    );
  }

function App() {
  var topics = [
    {id:1, title:'html', body:'html is ..'},
    {id:2, title:'css', body:'css is ..'}
  ];
  return (
    <div>
    <Header title="WEB"></Header>
      <Nav data={topics}></Nav>
      <Article title="HTML" body="HTML is ..."></Article>
      <Article title="CSS" body="CSS is ..."></Article>
  </div>
  );
}

export default App;
