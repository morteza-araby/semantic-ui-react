import React from "react";
//import  {connect } from "react-redux";
//import {bindActionCreators} from "redux";
import { Link } from "react-router";
//import Header from './header';
import Sidebar from './sidebar';
import HomePage from './home-page';
//import Footer from './footer';
//import MainContent from './mainContent';

class Home extends React.Component {
  render() {
    return (
      <div>      
        <Sidebar />
        <HomePage />
        {/*<Header />*/}     
      </div>
    );
  }
}

//function mapStateToProps(state){
//    return {appState: state.appState};
//}
//export default connect(mapStateToProps) (Home);
export default Home;

//<h1>This is the main view</h1>
//                <PdfContaine