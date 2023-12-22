

import CamptimeLogo from './app/assets/img/Camptime_Logo.png';
// import otherLogo from './app/assets/img/logo.png';
import './App.css';
import CampsiteList  from './features/campsites/CampsitesList';
import CampsitesList from './features/campsites/CampsitesList';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    return (
        <div className='App'>
            <Header />
            <CampsitesList />
            <Footer/>
        </div>
    );
}

export default App;
