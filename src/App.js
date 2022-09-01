import './App.js';
import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Featured />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
