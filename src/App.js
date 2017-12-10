import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import 'font-awesome/css/font-awesome.css';

import {FooterComponent}  from './components/FooterComponent/FooterComponent';
import {SocialComponent} from './components/SocialComponent/SocialComponent';
import {CallToActionComponent} from './components/CallToActionComponent/CallToActionComponent';
import {FeaturesComponent} from './components/FeaturesComponent/FeaturesComponent';
import {AppDownloadComponent} from './components/AppDownloadComponent/AppDownloadComponent';
import {HeroComponent} from './components/HeroComponent/HeroComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';


class App extends Component {
  constructor(props){
    super(props);
    this.state={navBarShrink:""};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event){
    const domNode = ReactDOM.findDOMNode(this.navEl);
    const nbs = window.pageYOffset>100 ? "navbar-shrink" : "";
    this.setState({navBarShrink:nbs});
  }

  render() {
    const nbs = this.state ? this.state.navBarShrink : "";
    return (
      <div>
        <NavBarComponent navBarShrink = {nbs} />
        <HeroComponent />
        <AppDownloadComponent />
        <FeaturesComponent />
        <CallToActionComponent />
        <SocialComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
