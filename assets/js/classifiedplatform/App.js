import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";
import Header from './Header.js'
import Homepage1 from './Homepage1.js'
import Homepage2 from './Homepage2.js'
import Listings from './Listings.js'
import Item from './Item.js'
import Newpost1 from './Newpost1.js'
import initFirebase from './initFirebase.js'
import Errorpage from './My404Component.js'
//import Auth from './signIn.js'
import ManagePosts from './ManagePosts.js'
import firebase from 'firebase/app';
import toastr from 'toastr'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
		authenticated: false,
        redirect: false
    }
	  this.signOut = this.signOut.bind(this);
  }
	
    componentWillMount(){
        toastr.options.timeOut = 4000;
        toastr.options.extendedTimeOut = 2500;
        toastr.options.positionClass = "toast-top-center";
		var self = this;
       
        
		this.removeAuthListener = firebase.auth().onAuthStateChanged((user) => {
			if (user){
                 var user = firebase.auth().currentUser;
				self.setState({
					authenticated: true
				}, () => {
                    
                })
                
                   
			} else{
				self.setState({
					authenticated: false,
				}, () => {})
				
			}
		})
	}
    
    
	componentWillUnmount(){
		this.removeAuthListener();
	}
	signOut(){
		firebase.auth().signOut().then((user,error) => {
			this.setState({authenticated: false})
						 
		})
	}
    
  render () {
	 const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
         <div>
        <Header  globalState={this.state} signOut={this.signOut}/>
        <Component {...props} />
        </div>
    }
  />
);
    return (
            <Router>
            <div>
             <Switch>
                
				<AuthRoute exact path='/Newpost1' component={Newpost1}/>
                <AuthRoute exact path='/ManagePosts' component={ManagePosts}/> 
                <AuthRoute exact path='/:uc(Berkeley|Davis|Irvine|Los Angeles|Merced|Riverside|San Diego|Santa Barbara|Santa Cruz|San Diego State)/' component={Homepage2}/>
                <AuthRoute exact path='/:uc(Berkeley|Davis|Irvine|Los Angeles|Merced|Riverside|San Diego|Santa Barbara|Santa Cruz|San Diego State)/:category(Sale|Housing|Resources|Events)' component={Listings}/>
                <AuthRoute exact path='/:uc(Berkeley|Davis|Irvine|Los Angeles|Merced|Riverside|San Diego|Santa Barbara|Santa Cruz|San Diego State)/:category(Sale|Housing|Resources|Events)/:listings(General|Classroom Items|Clothing|Electronics|Cars|Books|Household Items|Bikes|Tickets|House for rent|Apt for rent|Room for rent|Roommates|Class Notes|Internships|Scholarships|Tutoring|Lost and Found|General|Parties)' component={Listings}/>
                <AuthRoute exact path='/:uc(Berkeley|Davis|Irvine|Los Angeles|Merced|Riverside|San Diego|Santa Barbara|Santa Cruz|San Diego State)/:category(Sale|Housing|Resources|Events)/:listings(General|Classroom Items|Clothing|Electronics|Cars|Books|Household Items|Bikes|Tickets|House for rent|Apt for rent|Room for rent|Roommates|Class Notes|Internships|Scholarships|Tutoring|Lost and Found|General|Parties)/:itemId' component={Item}/>
                <AuthRoute exact path='/' component={Homepage1}/>
                <Errorpage authenticated={this.state.authenticated}/>

             </Switch>
              
            </div>
               
            </Router>
            )
  }
}