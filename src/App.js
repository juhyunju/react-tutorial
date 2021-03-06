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
      var item = props.data[i];
      lis.push(
      <li key ={item.id}>
        <a href={item.id+".html"}>
          {item.title}
          </a>
          </li>
      );

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
    function aHandler(ev){
      ev.preventDefault();
      props.onSelect();
    }
    return(
      <header>
        <h1>
          <a href="index.html" onClick={aHandler}>
            {props.title}
          </a>
         </h1>
      </header>

    );
  }

function App() {
  var topics = [
    {id:1, title:'html', body:'html is ..'},
    {id:2, title:'css', body:'css is ..'}
  ];
  function onSelectHandler(){
    alert('hi');
  }
  return (
    <div>
    <Header title="WEB" onSelect={onSelectHandler}></Header>
      <Nav data={topics}></Nav>
      <Article title="HTML" body="HTML is ..."></Article>
      <Article title="CSS" body="CSS is ..."></Article>
  </div>
  );
}

export default App;
