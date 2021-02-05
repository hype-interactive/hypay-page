import logo from './logo.svg';
import './App.css';
import Entry from './componets/entry'
import Services from './componets/services'
import Footer from './componets/footer'
import title from './componets/title'


function App() {
  return (
    <div  className="hypay-wrapper">
          {/* <title/> */}
          <Entry/>
          <div className="separator"></div>
          <Services/>
          <Footer/>
      <div className="row">

      </div>
    </div>
  );
}

export default App;
