import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import IndexBody from './components/index_body/IndexBody';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import KontaktiBody from './components/kontakti_body/KontaktiBody';
import OnamaBody from './components/onama_body/OnamaBody';
import GalerijaBody from './components/galerija_body/GalerijaBody';
import Omedjavanje from './components/usluge/Omedjavanje';
import DeobaParcela from './components/usluge/DeobaParcela';
import Ucrtavanje from './components/usluge/Ucrtavanje';
import Ozakonjenje from './components/usluge/Ozakonjenje';
import IzGeoPodloga from './components/usluge/IzGeoPodloga';
import SnPodzemnihIns from './components/usluge/SnPodzemnihIns';
import AeroSnimanje from './components/usluge/AeroSnimanje';
import SnSaobracajnica from './components/usluge/SnSaobracajnica';
import LsNepokretnosti from './components/usluge/LsNepokretnosti';
import InzenjerskaGeo from './components/usluge/InzenjerskaGeo';


function App() {
  return (
    <Router>
    <div className="fullbody">
    <div className="appbody">
      <Header />
      <hr className="hr-white"/>
      <Switch>
      <Route path="/" exact component={IndexBody} />
      <Route path="/onama" exact component={OnamaBody} />
      <Route path="/galerija" exact component={GalerijaBody} />
      <Route path="/kontakti" exact component={KontaktiBody} />

      <Route path="/omedjavanje" exact component={Omedjavanje} />
      <Route path="/deobaparcela" exact component={DeobaParcela} />
      <Route path="/ucrtavanjeobjekata" exact component={Ucrtavanje} />
      <Route path="/ozakonjenjeobjekata" exact component={Ozakonjenje} />
      <Route path="/geodetskepodloge" exact component={IzGeoPodloga} />
      <Route path="/podzemeninstalacije" exact component={SnPodzemnihIns} />
      <Route path="/aerosnimanje" exact component={AeroSnimanje} />
      <Route path="/saobracajnice" exact component={SnSaobracajnica} />
      <Route path="/listovinepokretnosti" exact component={LsNepokretnosti} />
      <Route path="/inzenjerskageodezija" exact component={InzenjerskaGeo} />
      </Switch>
      <hr className="hr-white"/>
      <Footer />
      <hr className="hr-white"/>
      <br />
    </div>
    </div>
    </Router>
  );
}

export default App;
