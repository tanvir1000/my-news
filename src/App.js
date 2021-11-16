import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup , Button, Row, Col, Card, Spinner} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [news, setNews]= useState([]);
  useEffect ( () => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-10-16&sortBy=publishedAt&apiKey=be5ec7ece6ee4e029cd890a9ff1bfcc8')
    .then(res => res.json())
    .then(data => setNews(data.articles));

  },[])
  return (
    // Your API key is: be5ec7ece6ee4e029cd890a9ff1bfcc8
    <div className="App">
     {news.length===0 ?
     <Spinner animation="border" />
     :
      <Row xs={1} md={3} className="g-4">
        {
          news.map(nw => <News news={nw}></News>)
        }

  
</Row>}
    </div>
  );
}

export default App;
