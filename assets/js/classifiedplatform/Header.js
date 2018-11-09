import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,
       Route,
       Link} from 'react-router-dom'
import Newpost1 from './Newpost1.js'
import ManagePosts from './ManagePosts.js'
import firebase from 'firebase/app';

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
		redirect: false,
            emailVerified: false
    }
  }
    
    createEmailPassword = (event) => {
        event.preventDefault();
        const email = this.emailNewInput.value;
        const password = this.passwordNewInput.value;

        firebase.auth().fetchSignInMethodsForEmail(email).then((providers) => {

        if (providers.length === 0) {
            //create user
            //('user created')
            this.loginForm.reset()

//            toastr.info('Click the Verify Email button to continue to sign in.')
            $(".submit").removeAttr('id')
            //('Here are our providers', providers)
            return firebase.auth().createUserWithEmailAndPassword(email, password)

        }

    }).then(() =>{
            var self = this;
        //('verification enter')
        toastr.info('We have sent you an email to verify your account. Check your inbox to continue.')
        firebase.auth().currentUser.sendEmailVerification().then(function () {
            //('Email Sent!')
            self.setState({
                    emailVerified: true
                }, ()  =>{

                //('I have posted email verification to state')
                //  window.location.reload(); 
                          })
        }).catch(function (error) {
            // An error happened.
            //('oops', error)
        });
            
        }).then(() => {
            //('check for uid', user.uid)
            firebase.database().ref('users/' + user.uid + 'userSe tting').set({
                authLogin: 'emailpass',
                name: null,
                displayPicture: null,
                email: this.emailInput.value
            })
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        })
    }
    authWithEmailPassword = (event) => {
        var self = this;
        event.preventDefault()
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        //(email, password)
        firebase.auth().fetchSignInMethodsForEmail(email).then((providers) => {
            //(providers)
            if (providers.length === 0) {

                toastr.error('Email and password information not found. It looks like you have not signed up!')
                this.loginForm.reset()
            }
            if (providers.indexOf('password') === -1) {
                //they used facebook, google
                this.loginForm.reset()
                toastr.info('Please use another form of signin to continue.')
                //('You should not use this type of authentication')
            } else {
                //sign user in
                //('user signedin')

                return firebase.auth().signInWithEmailAndPassword(email, password)
            }
        }).then((user) => {
            //('new promise user', user)

                this.loginForm.reset()
                //('user and email exists')
                if (firebase.auth().currentUser.emailVerified === false) {
                    //('User is NOT verfied')
                    toastr.info('Please make sure to verify your account to continue.')
                    user.sendEmailVerification().then(function () {
                        //('Email Sent!')
                    }).catch(function (error) {
                        // An error happened.
                        //('oops', error)
                    });

                } else if (firebase.auth().currentUser.emailVerified) {
                    //('user IS verified')
                
                    this.setState({
                        redirect: true
                    }, () => {//('final redirect'))
                })
                }
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        })
    }
    signInGoogle() {
        var self = this;
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            //('This my image', user)
            firebase.database().ref('users/' + user.uid + '/userSetting').set({
                authLogin: 'google',
                name: user.displayName,
                displayPicture: user.photoURL,
                email: user.email
            })
            self.setState({
                username: user.displayName,
                email: user.email,
                displayPicture: user.photoURL,
                redirect: true
            })
            //(self.state)
            // ...

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    signInFacebook() {
        var self = this;
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            firebase.database().ref('users/' + user.uid + '/userSetting').set({
                authLogin: 'facebook',
                name: user.displayName,
                displayPicture: user.photoURL,
                email: user.email
            })
            self.setState({
                username: user.displayName,
                displayPicture: user.photoURL,
                email: user.email,
                redirect: true
            }, () => {
                //('Done', self.state)
            })
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    
    /****** **/
     componentWillMount(){
         if(this.props.globalState.authenticated){
             this.getUserInfo()
             $('.mainheader header .userimg img').css('width','40px');
         } 

     }
    getUserInfo = () => {
        var currentUser = firebase.auth().currentUser
        
             const newTo = {
          pathname: '/ManagePosts',
          state: {
          currentUserName: currentUser.displayName,
          currentUserEmail: currentUser.email,
          currentUserPhoto: currentUser.photoURL
      }
      }
                 
        this.setState({
            currentUserName: currentUser.displayName,
            currentUserEmail: currentUser.email,
            currentUserPhoto: currentUser.photoURL,
            newTo
        }, ()=> {
        })
    }
  render () {
      
    return (<div className='mainheader'>
            <section className='survey'> 
                <div className='surverylink'><a href='https://docs.google.com/forms/d/e/1FAIpQLSd6R69sH4IDHam0knEDqqyg1cxwR0aWMSq3AjcIA5UMFbQiwg/viewform' target='_blank'>Feedback Survey </a></div>
            </section>
        <header>
                <section className='leftmenu'>
                   <div>
                    <Link to={'/'}><div className='logo logoheader' style={{
        backgroundImage: `url('https://www.kiruweb.com/img/craiglistlogo.png')`}}></div></Link>
                   <a href={this.props.globalState.authenticated ? '/Newpost1' : '#login'}><div className='post'><p>Post a Question</p></div></a>
                       </div>
                </section>
                <section className='rightmenu'>
                    <div className='user'>
                         <div className='userimg'>
                             <img src={this.state.currentUserPhoto}></img>
                         </div>
                         <span className='username'>{this.state.currentUserName}
                         </span>
                        </div>
                </section>
             <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href={this.props.globalState.authenticated ? '/Newpost1' : '#login'} className="navigation__link"><span>01</span>Post a Question</a></li>
                    <li className="navigation__item"><a href={this.props.globalState.authenticated ? '/ManagePosts' : '#login'}  className="navigation__link"><span>02</span>Manage my Posts</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>About Golden Catalog</a></li>
                    <li className="navigation__item"><a onClick={this.props.signOut} href="/" className="navigation__link "><span>04</span>Log out</a></li>
                    
                    </ul>
            </nav>
        </div>
            </header>
    
    <div className="popup" id="login">
        <div className="popup__content">
         <a href="#EditCancel" className="popup__close">&times;</a>
          <h6>Login to your account</h6>
                 <div className='auth'>
		
				<div className='login'>
				<section className='emailpass'>
				<form autoComplete="off" onSubmit= {(event) => {this.authWithEmailPassword(event)}} ref={(form) => {this.loginForm= form}}>
                    <div className='wrapper'>
						<input className='pt-input' name='email' type='email' ref={(input) => {this.emailInput = input }} placeholder='Email' required/>
						<label>Email</label>
						</div>
						<div className='wrapper'>
						<input className='pt-input' pattern=".{6,}"   title="6 characters minimum" name='password' type='password' ref={(input) => {this.passwordInput = input }} placeholder='Password' required/>		
						<label> Password</label>
						<input type='submit' className='submit' value='Log In'></input>
				        </div>
				</form>
				<div className='joinTag'>Need to sign up? <a href="#signup">Join the Community</a></div>
				
				
				</section>
				<div className='oauth'>
					<div className='google' onClick={this.signInGoogle}>
						<section><img className='googlelogo' src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'></img></section>
						<p>Continue with Google</p></div>
					<div className='fb' onClick={this.signInFacebook}>
						<section><i className="fab fa-facebook-f"></i></section>
							<p>Continue with Facebook</p></div>
				</div>
				</div>
			</div>
                 
        </div>
    </div>
     <div className="popup" id="signup">
        <div className="popup__content">
         <a href="#signInHome" className="popup__close">&times;</a>
          <h3>Join the Community</h3>
           <form autoComplete="off" onSubmit= {(event) => {this.createEmailPassword(event)}} ref={(form) => {this.loginForm= form}}>
                    <div className='wrapper'>
						<input className='pt-input' name='email' type='email' ref={(input) => {this.emailNewInput = input }} placeholder='Email' required/>
						<label>Email</label>
						</div>
						<div className='wrapper'>
						<input className='pt-input' pattern=".{6,}"   title="6 characters minimum" name='password' type='password' ref={(input) => {this.passwordNewInput = input }} placeholder='Password' required/>		
						<label> Password</label>
						<input type='submit' className='submit' value='Sign Up'></input>
				        </div>
				</form>
        </div>
    </div>
            </div>
            )
  }
}

