import React, {Component} from 'react';
import './app.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/TourList'

class App extends Component{
    render(){
        return <React.Fragment>
            <Navbar />
            <TourList/>
        </React.Fragment>
    }
}


export default App;

