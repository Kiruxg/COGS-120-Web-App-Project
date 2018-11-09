webpackJsonp([0],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

var _Header = __webpack_require__(158);

var _Header2 = _interopRequireDefault(_Header);

var _Homepage = __webpack_require__(159);

var _Homepage2 = _interopRequireDefault(_Homepage);

var _Homepage3 = __webpack_require__(160);

var _Homepage4 = _interopRequireDefault(_Homepage3);

var _Listings = __webpack_require__(161);

var _Listings2 = _interopRequireDefault(_Listings);

var _Item = __webpack_require__(47);

var _Item2 = _interopRequireDefault(_Item);

var _Newpost = __webpack_require__(82);

var _Newpost2 = _interopRequireDefault(_Newpost);

var _initFirebase = __webpack_require__(164);

var _initFirebase2 = _interopRequireDefault(_initFirebase);

var _My404Component = __webpack_require__(162);

var _My404Component2 = _interopRequireDefault(_My404Component);

var _ManagePosts = __webpack_require__(81);

var _ManagePosts2 = _interopRequireDefault(_ManagePosts);

var _app = __webpack_require__(21);

var _app2 = _interopRequireDefault(_app);

var _toastr = __webpack_require__(131);

var _toastr2 = _interopRequireDefault(_toastr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Auth from './signIn.js'


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      authenticated: false,
      redirect: false
    };
    _this.signOut = _this.signOut.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _toastr2.default.options.timeOut = 4000;
      _toastr2.default.options.extendedTimeOut = 2500;
      _toastr2.default.options.positionClass = "toast-top-center";
      var self = this;

      this.removeAuthListener = _app2.default.auth().onAuthStateChanged(function (user) {
        if (user) {
          var user = _app2.default.auth().currentUser;
          self.setState({
            authenticated: true
          }, function () {});
        } else {
          self.setState({
            authenticated: false
          }, function () {});
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeAuthListener();
    }
  }, {
    key: 'signOut',
    value: function signOut() {
      var _this2 = this;

      _app2.default.auth().signOut().then(function (user, error) {
        _this2.setState({ authenticated: false });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var AuthRoute = function AuthRoute(_ref) {
        var Component = _ref.component,
            rest = _objectWithoutProperties(_ref, ['component']);

        return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
          render: function render(props) {
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_Header2.default, { globalState: _this3.state, signOut: _this3.signOut }),
              _react2.default.createElement(Component, props)
            );
          }
        }));
      };
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(AuthRoute, { exact: true, path: '/Newpost1', component: _Newpost2.default }),
            _react2.default.createElement(AuthRoute, { exact: true, path: '/ManagePosts', component: _ManagePosts2.default }),
            _react2.default.createElement(AuthRoute, { exact: true, path: '/:uc(Berkeley|Davis|Irvine|Los Angeles|Merced|Riverside|San Diego|Santa Barbara|Santa Cruz|San Diego State)/', component: _Homepage4.default }),
            _react2.default.createElement(AuthRoute, { exact: true, path: '/:uc(Berkeley|Davis|Irvine|Los Angeles|Merced|Riverside|San Diego|Santa Barbara|Santa Cruz|San Diego State)/:category(Sale|Housing|Resources|Events)', component: _Listings2.default }),
            _react2.default.createElement(AuthRoute, { exact: true, path: '/:uc(Berkeley|Davis|Irvine|Los Angeles|Merced|Riverside|San Diego|Santa Barbara|Santa Cruz|San Diego State)/:category(Sale|Housing|Resources|Events)/:listings(General|Classroom Items|Clothing|Electronics|Cars|Books|Household Items|Bikes|Tickets|House for rent|Apt for rent|Room for rent|Roommates|Class Notes|Internships|Scholarships|Tutoring|Lost and Found|General|Parties)', component: _Listings2.default }),
            _react2.default.createElement(AuthRoute, { exact: true, path: '/:uc(Berkeley|Davis|Irvine|Los Angeles|Merced|Riverside|San Diego|Santa Barbara|Santa Cruz|San Diego State)/:category(Sale|Housing|Resources|Events)/:listings(General|Classroom Items|Clothing|Electronics|Cars|Books|Household Items|Bikes|Tickets|House for rent|Apt for rent|Room for rent|Roommates|Class Notes|Internships|Scholarships|Tutoring|Lost and Found|General|Parties)/:itemId', component: _Item2.default }),
            _react2.default.createElement(AuthRoute, { exact: true, path: '/', component: _Homepage2.default }),
            _react2.default.createElement(_My404Component2.default, { authenticated: this.state.authenticated })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

var _Newpost = __webpack_require__(82);

var _Newpost2 = _interopRequireDefault(_Newpost);

var _ManagePosts = __webpack_require__(81);

var _ManagePosts2 = _interopRequireDefault(_ManagePosts);

var _app = __webpack_require__(21);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.createEmailPassword = function (event) {
            event.preventDefault();
            var email = _this.emailNewInput.value;
            var password = _this.passwordNewInput.value;

            _app2.default.auth().fetchSignInMethodsForEmail(email).then(function (providers) {

                if (providers.length === 0) {
                    //create user
                    //('user created')
                    _this.loginForm.reset();

                    //            toastr.info('Click the Verify Email button to continue to sign in.')
                    $(".submit").removeAttr('id');
                    //('Here are our providers', providers)
                    return _app2.default.auth().createUserWithEmailAndPassword(email, password);
                }
            }).then(function () {
                var self = _this;
                //('verification enter')
                toastr.info('We have sent you an email to verify your account. Check your inbox to continue.');
                _app2.default.auth().currentUser.sendEmailVerification().then(function () {
                    //('Email Sent!')
                    self.setState({
                        emailVerified: true
                    }, function () {

                        //('I have posted email verification to state')
                        //  window.location.reload(); 
                    });
                }).catch(function (error) {
                    // An error happened.
                    //('oops', error)
                });
            }).then(function () {
                //('check for uid', user.uid)
                _app2.default.database().ref('users/' + user.uid + 'userSetting').set({
                    authLogin: 'emailpass',
                    name: null,
                    displayPicture: null,
                    email: _this.emailInput.value
                });
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
            });
        };

        _this.authWithEmailPassword = function (event) {
            var self = _this;
            event.preventDefault();
            var email = _this.emailInput.value;
            var password = _this.passwordInput.value;
            //(email, password)
            _app2.default.auth().fetchSignInMethodsForEmail(email).then(function (providers) {
                //(providers)
                if (providers.length === 0) {

                    toastr.error('Email and password information not found. It looks like you have not signed up!');
                    _this.loginForm.reset();
                }
                if (providers.indexOf('password') === -1) {
                    //they used facebook, google
                    _this.loginForm.reset();
                    toastr.info('Please use another form of signin to continue.');
                    //('You should not use this type of authentication')
                } else {
                    //sign user in
                    //('user signedin')

                    return _app2.default.auth().signInWithEmailAndPassword(email, password);
                }
            }).then(function (user) {
                //('new promise user', user)

                _this.loginForm.reset();
                //('user and email exists')
                if (_app2.default.auth().currentUser.emailVerified === false) {
                    //('User is NOT verfied')
                    toastr.info('Please make sure to verify your account to continue.');
                    user.sendEmailVerification().then(function () {
                        //('Email Sent!')
                    }).catch(function (error) {
                        // An error happened.
                        //('oops', error)
                    });
                } else if (_app2.default.auth().currentUser.emailVerified) {
                    //('user IS verified')

                    _this.setState({
                        redirect: true
                    }, function () {//('final redirect'))
                    });
                }
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
            });
        };

        _this.getUserInfo = function () {
            var currentUser = _app2.default.auth().currentUser;

            var newTo = {
                pathname: '/ManagePosts',
                state: {
                    currentUserName: currentUser.displayName,
                    currentUserEmail: currentUser.email,
                    currentUserPhoto: currentUser.photoURL
                }
            };

            _this.setState({
                currentUserName: currentUser.displayName,
                currentUserEmail: currentUser.email,
                currentUserPhoto: currentUser.photoURL,
                newTo: newTo
            }, function () {});
        };

        _this.state = {
            redirect: false,
            emailVerified: false
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'signInGoogle',
        value: function signInGoogle() {
            var self = this;
            var provider = new _app2.default.auth.GoogleAuthProvider();
            _app2.default.auth().signInWithPopup(provider).then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                //('This my image', user)
                _app2.default.database().ref('users/' + user.uid + '/userSetting').set({
                    authLogin: 'google',
                    name: user.displayName,
                    displayPicture: user.photoURL,
                    email: user.email
                });
                self.setState({
                    username: user.displayName,
                    email: user.email,
                    displayPicture: user.photoURL,
                    redirect: true
                });
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
    }, {
        key: 'signInFacebook',
        value: function signInFacebook() {
            var self = this;
            var provider = new _app2.default.auth.FacebookAuthProvider();
            provider.addScope('email');
            _app2.default.auth().signInWithPopup(provider).then(function (result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                _app2.default.database().ref('users/' + user.uid + '/userSetting').set({
                    authLogin: 'facebook',
                    name: user.displayName,
                    displayPicture: user.photoURL,
                    email: user.email
                });
                self.setState({
                    username: user.displayName,
                    displayPicture: user.photoURL,
                    email: user.email,
                    redirect: true
                }, function () {
                    //('Done', self.state)
                });
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

    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.globalState.authenticated) {
                this.getUserInfo();
                $('.mainheader header .userimg img').css('width', '40px');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'mainheader' },
                _react2.default.createElement(
                    'section',
                    { className: 'survey' },
                    _react2.default.createElement(
                        'div',
                        { className: 'surverylink' },
                        _react2.default.createElement(
                            'a',
                            { href: 'https://docs.google.com/forms/d/e/1FAIpQLSd6R69sH4IDHam0knEDqqyg1cxwR0aWMSq3AjcIA5UMFbQiwg/viewform', target: '_blank' },
                            'Feedback Survey '
                        )
                    )
                ),
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'section',
                        { className: 'leftmenu' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/' },
                                _react2.default.createElement('div', { className: 'logo logoheader', style: {
                                        backgroundImage: 'url(\'https://www.kiruweb.com/img/craiglistlogo.png\')' } })
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: this.props.globalState.authenticated ? '/Newpost1' : '#login' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'post' },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Post To Classifieds'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'rightmenu' },
                        _react2.default.createElement(
                            'div',
                            { className: 'user' },
                            _react2.default.createElement(
                                'div',
                                { className: 'userimg' },
                                _react2.default.createElement('img', { src: this.state.currentUserPhoto })
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'username' },
                                this.state.currentUserName
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'navigation' },
                        _react2.default.createElement('input', { type: 'checkbox', className: 'navigation__checkbox', id: 'navi-toggle' }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'navi-toggle', className: 'navigation__button' },
                            _react2.default.createElement(
                                'span',
                                { className: 'navigation__icon' },
                                '\xA0'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'navigation__background' },
                            '\xA0'
                        ),
                        _react2.default.createElement(
                            'nav',
                            { className: 'navigation__nav' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'navigation__list' },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'navigation__item' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: this.props.globalState.authenticated ? '/Newpost1' : '#login', className: 'navigation__link' },
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            '01'
                                        ),
                                        'Post to Classifieds'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'navigation__item' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: this.props.globalState.authenticated ? '/ManagePosts' : '#login', className: 'navigation__link' },
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            '02'
                                        ),
                                        'Manage my Posts'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'navigation__item' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#', className: 'navigation__link' },
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            '03'
                                        ),
                                        'About Golden Catalog'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'navigation__item' },
                                    _react2.default.createElement(
                                        'a',
                                        { onClick: this.props.signOut, href: '/', className: 'navigation__link ' },
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            '04'
                                        ),
                                        'Log out'
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'popup', id: 'login' },
                    _react2.default.createElement(
                        'div',
                        { className: 'popup__content' },
                        _react2.default.createElement(
                            'a',
                            { href: '#EditCancel', className: 'popup__close' },
                            '\xD7'
                        ),
                        _react2.default.createElement(
                            'h6',
                            null,
                            'Login to your account'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'auth' },
                            _react2.default.createElement(
                                'div',
                                { className: 'login' },
                                _react2.default.createElement(
                                    'section',
                                    { className: 'emailpass' },
                                    _react2.default.createElement(
                                        'form',
                                        { autoComplete: 'off', onSubmit: function onSubmit(event) {
                                                _this2.authWithEmailPassword(event);
                                            }, ref: function ref(form) {
                                                _this2.loginForm = form;
                                            } },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'wrapper' },
                                            _react2.default.createElement('input', { className: 'pt-input', name: 'email', type: 'email', ref: function ref(input) {
                                                    _this2.emailInput = input;
                                                }, placeholder: 'Email', required: true }),
                                            _react2.default.createElement(
                                                'label',
                                                null,
                                                'Email'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'wrapper' },
                                            _react2.default.createElement('input', { className: 'pt-input', pattern: '.{6,}', title: '6 characters minimum', name: 'password', type: 'password', ref: function ref(input) {
                                                    _this2.passwordInput = input;
                                                }, placeholder: 'Password', required: true }),
                                            _react2.default.createElement(
                                                'label',
                                                null,
                                                ' Password'
                                            ),
                                            _react2.default.createElement('input', { type: 'submit', className: 'submit', value: 'Log In' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'joinTag' },
                                        'Need to sign up? ',
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#signup' },
                                            'Join the Community'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'oauth' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'google', onClick: this.signInGoogle },
                                        _react2.default.createElement(
                                            'section',
                                            null,
                                            _react2.default.createElement('img', { className: 'googlelogo', src: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' })
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Continue with Google'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'fb', onClick: this.signInFacebook },
                                        _react2.default.createElement(
                                            'section',
                                            null,
                                            _react2.default.createElement('i', { className: 'fab fa-facebook-f' })
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Continue with Facebook'
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'popup', id: 'signup' },
                    _react2.default.createElement(
                        'div',
                        { className: 'popup__content' },
                        _react2.default.createElement(
                            'a',
                            { href: '#signInHome', className: 'popup__close' },
                            '\xD7'
                        ),
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Join the Community'
                        ),
                        _react2.default.createElement(
                            'form',
                            { autoComplete: 'off', onSubmit: function onSubmit(event) {
                                    _this2.createEmailPassword(event);
                                }, ref: function ref(form) {
                                    _this2.loginForm = form;
                                } },
                            _react2.default.createElement(
                                'div',
                                { className: 'wrapper' },
                                _react2.default.createElement('input', { className: 'pt-input', name: 'email', type: 'email', ref: function ref(input) {
                                        _this2.emailNewInput = input;
                                    }, placeholder: 'Email', required: true }),
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    'Email'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'wrapper' },
                                _react2.default.createElement('input', { className: 'pt-input', pattern: '.{6,}', title: '6 characters minimum', name: 'password', type: 'password', ref: function ref(input) {
                                        _this2.passwordNewInput = input;
                                    }, placeholder: 'Password', required: true }),
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    ' Password'
                                ),
                                _react2.default.createElement('input', { type: 'submit', className: 'submit', value: 'Sign Up' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

var _axios = __webpack_require__(36);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homepage1 = function (_Component) {
  _inherits(Homepage1, _Component);

  function Homepage1() {
    _classCallCheck(this, Homepage1);

    var _this = _possibleConstructorReturn(this, (Homepage1.__proto__ || Object.getPrototypeOf(Homepage1)).call(this));

    _this.loopSchools = function () {
      if (_this.state.schoolData != '') {
        return _this.state.schoolData.map(function (school, index) {
          return _react2.default.createElement(
            'a',
            { href: '' + school.name, key: index, className: 'button' },
            _react2.default.createElement(
              'p',
              null,
              school.name
            )
          );
        });
      }
    };

    _this.state = {
      schoolData: ''
    };
    return _this;
  }

  _createClass(Homepage1, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get('/api/schools').then(function (response) {
        self.setState({
          schoolData: response.data
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'h3',
          null,
          'The Classified Ad Platform for University Students'
        ),
        _react2.default.createElement(
          'section',
          { className: 'mainpage' },
          _react2.default.createElement(
            'div',
            { className: 'gridwrapper' },
            _react2.default.createElement(
              'h5',
              null,
              'University of California'
            ),
            _react2.default.createElement(
              'section',
              { className: 'schoollist' },
              this.loopSchools()
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'gridwrapper' },
            _react2.default.createElement(
              'h5',
              null,
              'California State University'
            ),
            _react2.default.createElement(
              'section',
              { className: 'schoollist' },
              _react2.default.createElement(
                'a',
                { href: 'San Diego State', className: 'button' },
                _react2.default.createElement(
                  'p',
                  null,
                  'San Diego State'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Homepage1;
}(_react.Component);

exports.default = Homepage1;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

var _axios = __webpack_require__(36);

var _axios2 = _interopRequireDefault(_axios);

var _app = __webpack_require__(21);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homepage2 = function (_Component) {
    _inherits(Homepage2, _Component);

    function Homepage2() {
        _classCallCheck(this, Homepage2);

        var _this = _possibleConstructorReturn(this, (Homepage2.__proto__ || Object.getPrototypeOf(Homepage2)).call(this));

        _this.loopCategories = function () {
            var _this$props = _this.props,
                match = _this$props.match,
                history = _this$props.history;
            //if promise gave back our data...

            if (_this.state.categoriesData != '') {

                //index every category title 
                return _this.state.categoriesData.map(function (category, i) {
                    //method to index every category listing
                    var loopListings = function loopListings() {
                        return category.listings.map(function (listing, index) {
                            return (
                                //link to listings page on click
                                _react2.default.createElement(
                                    'a',
                                    { href: '/' + _this.props.match.params.uc + '/' + category.title + '/' + listing.slug, className: 'link', key: index },
                                    listing.name,
                                    ' '
                                )
                            );
                        });
                    };
                    return _react2.default.createElement(
                        'div',
                        { className: 'categories', key: i },
                        _react2.default.createElement(
                            'a',
                            { href: '/' + match.params.uc + '/' + category.title, className: 'title' },
                            category.title
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'group-links' },
                            loopListings()
                        )
                    );
                });
            }
        };

        _this.handleSearchInput = function (event) {
            var name = event.target.name;
            var value = event.target.value;
            var myNode = document.getElementById("displaySearchResults");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            if (value == "") {
                $('#displaySearchResults').css('display', 'none');
            } else {
                $('#displaySearchResults').css('display', 'block');
            }

            _this.setState(_defineProperty({}, name, value), function () {
                _this.filterSearchResults();
            });
        };

        _this.filterSearchResults = function () {
            if (_this.state.filteredData !== undefined) {

                var listingObj = {};
                var itemProp = {};
                var results = document.getElementById("displaySearchResults");
                var counter = 0;
                var newData = _this.state.filteredData.filter(function (item, i) {
                    if (_this.props.match.params.uc === item.school) {
                        var items = item.title.toLowerCase();
                        var listings = item.listing.toLowerCase();
                        var searchText = _this.state.search.toLowerCase();
                        var itemMatch = items.includes(searchText);
                        var listingMatch = listings.includes(searchText);
                        if (itemMatch) {
                            //|| listingMatch

                            if (listingObj.hasOwnProperty(item.listing)) {
                                listingObj[item.listing].count += 1;
                            } else {
                                listingObj[item.listing] = {
                                    count: 1,
                                    searchCategory: item.category,
                                    searchListing: item.listing

                                };
                            }

                            console.log('my obj', listingObj);
                            return true;
                        } else {}
                    }
                });
                if (jQuery.isEmptyObject(listingObj)) {
                    var para = document.createElement("p");

                    para.innerHTML = 'No results found for your search.';
                    document.getElementById("displaySearchResults").appendChild(para);
                }
                for (var prop in listingObj) {
                    if (listingObj[prop].count != 0) {
                        var div = document.createElement("a");
                        div.class = 'searchResult';
                        var newTo = {
                            pathname: '/' + _this.props.match.params.uc + '/' + listingObj[prop].searchCategory + '/' + listingObj[prop].searchListing,
                            state: {
                                searchText: _this.state.search
                            }
                        };

                        console.log('properties', listingObj[prop]);
                        var m = listingObj[prop].count + ' found in the ' + prop + ' listing Wall';
                        div.href = '/' + _this.props.match.params.uc + '/' + listingObj[prop].searchCategory + '/' + listingObj[prop].searchListing;
                        // let l = `<Link to={${newTo}}>${m}</Link>`
                        div.innerHTML = '<a>' + m + '</a>';

                        document.getElementById("displaySearchResults").appendChild(div);
                    }
                    $('#displaySearchResults').css('border-radius', '5px');
                    $('#displaySearchResults').css('background-color', '$color-offwhite');

                    _this.setState({
                        searchData: newData
                    }, function () {});
                }
            }
        };

        _this.state = {
            categoriesData: '',
            search: ''
        };
        _this.handleSearchInput = _this.handleSearchInput.bind(_this);
        return _this;
    }

    _createClass(Homepage2, [{
        key: 'componentWillMount',
        value: function componentWillMount() {

            var ref = _app2.default.database().ref('users');
            var self = this;
            ref.on('value', function (data) {
                var userData = data.val();
                var keys = Object.keys(userData);
                var postArray = [];
                for (var i = 0; i < keys.length; i++) {

                    var k = keys[i];
                    var userPosts = userData[k].Posts;
                    if (userPosts !== undefined) {
                        //the user has atleast 1 post
                        for (var prop in userPosts) {
                            postArray.push(userPosts[prop]);
                        }
                        var postKeys = Object.keys(userPosts); //keys of individual posts

                    } else {
                        continue;
                    }
                }

                self.setState({
                    postArray: postArray,
                    filteredData: postArray
                }, function () {});
            });
            var self = this;
            _axios2.default.get('/api/categories').then(function (response) {
                self.setState({
                    categoriesData: response.data
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'home' },
                _react2.default.createElement(
                    'section',
                    { className: 'searchsection' },
                    _react2.default.createElement(
                        'div',
                        { className: 'search' },
                        _react2.default.createElement('input', { onChange: this.handleSearchInput, type: 'text', name: 'search', placeholder: 'You search, we fetch...' }),
                        _react2.default.createElement('i', { className: 'fas fa-search' })
                    ),
                    _react2.default.createElement('div', { id: 'displaySearchResults' })
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'category' },
                    _react2.default.createElement(
                        'div',
                        null,
                        this.loopCategories()
                    )
                )
            );
        }
    }]);

    return Homepage2;
}(_react.Component);

exports.default = Homepage2;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

var _axios = __webpack_require__(36);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(92);

var _queryString2 = _interopRequireDefault(_queryString);

var _Item = __webpack_require__(47);

var _Item2 = _interopRequireDefault(_Item);

var _app = __webpack_require__(21);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    function Listings() {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

        _this.addPriceIcon = function (index) {
            if (_this.state.filteredData[index] !== undefined) {
                var _this$props = _this.props,
                    match = _this$props.match,
                    history = _this$props.history,
                    location = _this$props.location;

                if (match.params.category === 'Resources' || match.params.category === 'Events' || match.params.listings === 'Roommates') {
                    return '';
                } else if (match.params.category === 'Sale' || match.params.category === 'Housing' && _this.state.filteredData[index].listing !== 'Roommates') {
                    return '$';
                }
            }
        };

        _this.loopItems = function () {
            var _this$props2 = _this.props,
                match = _this$props2.match,
                history = _this$props2.history,
                location = _this$props2.location;

            var data = _this.state.filteredData;
            var noResult = 'No Results Found.';

            if (_this.state.filteredData !== undefined) {

                if (_this.state.filteredData.length === 0) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'noresult' },
                        noResult
                    );
                }
                var listingArray = [];
                return _this.state.filteredData.map(function (item, i) {
                    var postKeys = Object.keys(item); //keys of individual posts

                    if (match.params.uc === item.school) {
                        if (match.params.listings === item.listing) {
                            listingArray.push(item);
                            var newTo = {
                                pathname: '/' + match.params.uc + '/' + match.params.category + '/' + match.params.listings + '/' + i,
                                state: { item: item,
                                    priceIcon: _this.addPriceIcon(),
                                    listingArray: listingArray
                                }
                            };

                            return _react2.default.createElement(
                                'section',
                                { className: 'listloop', key: i },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: newTo },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'item', onClick: function onClick() {
                                                return _react2.default.createElement(_Item2.default, { globalState: _this.state, item: item });
                                            } },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'image', style: { backgroundImage: 'url(\'' + item.img + '\')' } },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'price' },
                                                _this.addPriceIcon(i),
                                                item.price
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'item-desc' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    null,
                                                    item.title
                                                ),
                                                _react2.default.createElement(
                                                    'h6',
                                                    { className: 'dateposted' },
                                                    'Item Posted: ',
                                                    item.date
                                                )
                                            )
                                        )
                                    )
                                )
                            );
                        } else if (match.params.category === item.category && match.params.listings === undefined) {
                            var _newTo = {
                                pathname: '/' + match.params.uc + '/' + match.params.category + '/' + item.listing + '/' + i,
                                state: { item: item,
                                    priceIcon: _this.addPriceIcon(),
                                    listingArray: listingArray,
                                    location: '/' + match.params.uc + '/' + match.params.category
                                }
                            };
                            return _react2.default.createElement(
                                'section',
                                { className: 'listloop', key: i },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: _newTo },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'item', onClick: function onClick() {
                                                return _react2.default.createElement(_Item2.default, { globalState: _this.state, item: item });
                                            } },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'image', style: { backgroundImage: 'url(\'' + item.img + '\')' } },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'price' },
                                                _this.addPriceIcon(i),
                                                item.price
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'item-desc' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    null,
                                                    item.title
                                                ),
                                                _react2.default.createElement(
                                                    'h6',
                                                    null,
                                                    'Item Posted: ',
                                                    item.date
                                                )
                                            )
                                        )
                                    )
                                )
                            );
                        }
                    }
                });
            }
        };

        _this.handleChange = function (event) {
            //event.target is a reference to object that dispatched the event
            var name = event.target.name;
            var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;
            _this.setState(_defineProperty({}, name, value), function () {
                _this.filteredData();
            });
        };

        _this.changeView = function (viewName) {
            _this.setState({
                view: viewName
            });
        };

        _this.handleView = function () {

            if (_this.state.view == 'box') {
                return _react2.default.createElement(
                    'section',
                    { className: 'all-items box' },
                    _this.loopItems()
                );
            } else if (_this.state.view == 'list') {
                return _react2.default.createElement(
                    'section',
                    { className: 'all-items list' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _this.loopItems()
                    )
                );
            }
        };

        _this.submitForm = function () {
            var self = _this;
            var _this$props3 = _this.props,
                match = _this$props3.match,
                history = _this$props3.history,
                location = _this$props3.location;
            var _this$state = _this.state,
                min_price = _this$state.min_price,
                max_price = _this$state.max_price,
                sort = _this$state.sort;


            var newData = _this.state.postArray.filter(function (item, i) {
                return parseInt(item.price) >= (_this.state.min_price ? _this.state.min_price : 0) && parseInt(item.price) <= (_this.state.max_price ? _this.state.max_price : Number.MAX_SAFE_INTEGER);
            });

            _this.setState({
                newData: newData,
                filteredData: newData
            });

            //    history.push(`/${match.params.uc}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort=${sort}`)
            //    document.location.href = 
            //        `/${match.params.uc}/${match.params.category}/?min_price=${min_price}&max_price=${max_price}&sort=${sort}`

            var queryParams = _queryString2.default.parse(_this.props.location.search);
        };

        _this.resetData = function () {
            var self = _this;
            var _this$props4 = _this.props,
                match = _this$props4.match,
                history = _this$props4.history,
                location = _this$props4.location;
            var _this$state2 = _this.state,
                min_price = _this$state2.min_price,
                max_price = _this$state2.max_price,
                sort = _this$state2.sort;

            history.push('/' + match.params.uc + '/' + match.params.category);
            var newData = _this.state.postArray.filter(function (item, i) {
                return true;
            });
            _this.setState({
                filteredData: newData
            });
        };

        _this.toggleFilter = function () {
            $('.filter').toggleClass('filter-active');
            $('.wrapper').toggleClass('wrapper-active');
        };

        _this.state = {
            itemsData: '',
            view: 'box',
            search: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.filteredData = _this.filteredData.bind(_this);
        return _this;
    }

    _createClass(Listings, [{
        key: 'filteredData',
        value: function filteredData() {
            var _this2 = this;

            if (!this.state.newData) {

                var newData = this.state.postArray.filter(function (item, i) {
                    var postKeys = Object.keys(item); //keys of individual posts
                    //var item = item[postKeys[i]]
                    var items = item.title.toLowerCase();
                    var listings = item.listing.toLowerCase();
                    var searchText = _this2.state.search.toLowerCase();
                    var itemMatch = items.includes(searchText);
                    var listingMatch = listings.includes(searchText);
                    if (itemMatch || listingMatch) {
                        return true;
                    }
                });
            } else {

                newData = this.state.newData.filter(function (item, i) {
                    var postKeys = Object.keys(item); //keys of individual posts
                    //var item = item[postKeys[i]]
                    var items = item.title.toLowerCase();
                    var listings = item.listing.toLowerCase();
                    var searchText = _this2.state.search.toLowerCase();
                    var itemMatch = items.includes(searchText);
                    var listingMatch = listings.includes(searchText);
                    if (itemMatch || listingMatch) {
                        return true;
                    }
                });
            }
            if (this.state.sort == 'Oldest') {
                newData.sort(function (a, b) {
                    return a.dateUnix - b.dateUnix;
                });
            }
            if (this.state.sort == 'Newest') {
                newData.sort(function (a, b) {
                    return b.dateUnix - a.dateUnix;
                });
            }
            if (this.state.sort == 'Lowest') {
                newData.sort(function (a, b) {
                    return a.price - b.price;
                });
            }
            this.setState({
                filteredData: newData
            }, function () {});
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                match = _props.match,
                history = _props.history,
                location = _props.location;


            if (match.params.category === 'Resources' || match.params.category === 'Events' || match.params.listings === 'Roommates') {
                $('.formwrapper .price').css('display', 'none');
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {

            var ref = _app2.default.database().ref('users');
            var self = this;
            ref.on('value', function (data) {
                var userData = data.val();
                var keys = Object.keys(userData);
                var postArray = [];
                for (var i = 0; i < keys.length; i++) {

                    var k = keys[i];
                    var userPosts = userData[k].Posts;
                    if (userPosts !== undefined) {
                        //the user has atleast 1 post
                        for (var prop in userPosts) {
                            postArray.push(userPosts[prop]);
                        }
                        var postKeys = Object.keys(userPosts); //keys of individual posts

                    } else {
                        continue;
                    }
                }

                self.setState({
                    postArray: postArray,
                    filteredData: postArray
                }, function () {});
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'listings-page' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'section',
                        { className: 'list-view' },
                        _react2.default.createElement(
                            'section',
                            { className: 'listing-setting' },
                            _react2.default.createElement('div', { className: 'filterwrapper' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'wrapper' },
                                _react2.default.createElement(
                                    'section',
                                    { id: 'searchview' },
                                    _react2.default.createElement('input', { onChange: this.handleChange, className: 'search', name: 'search', value: this.state.search, type: 'text', placeholder: 'Search for Ads..' }),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'views' },
                                        _react2.default.createElement('i', { className: 'fas fa-th', onClick: this.changeView.bind(null, 'box') }),
                                        _react2.default.createElement('i', { className: 'fas fa-th-list', onClick: this.changeView.bind(null, 'list') })
                                    )
                                ),
                                _react2.default.createElement(
                                    'section',
                                    { className: 'filter' },
                                    _react2.default.createElement(
                                        'section',
                                        { className: 'formwrapper' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'form-group price' },
                                            _react2.default.createElement(
                                                'label',
                                                null,
                                                'Price'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min_price', placeholder: '0', onChange: this.handleChange }),
                                                _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max_price', placeholder: '1000', onChange: this.handleChange })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'button' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'primary-btn', onClick: this.submitForm },
                                                    'Update'
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'reset-btn', onClick: this.resetData.bind(this) },
                                                    'Reset'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'form-group sort' },
                                            _react2.default.createElement(
                                                'label',
                                                null,
                                                'Sort By'
                                            ),
                                            _react2.default.createElement(
                                                'select',
                                                { name: 'sort', className: 'sortBy', onChange: this.handleChange },
                                                _react2.default.createElement(
                                                    'option',
                                                    { value: 'Highest' },
                                                    'Relevance'
                                                ),
                                                _react2.default.createElement(
                                                    'option',
                                                    { value: 'Oldest' },
                                                    'Old'
                                                ),
                                                _react2.default.createElement(
                                                    'option',
                                                    { value: 'Newest' },
                                                    'New'
                                                ),
                                                _react2.default.createElement(
                                                    'option',
                                                    { value: 'Lowest' },
                                                    'Price'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'section',
                            { className: 'handleView' },
                            this.handleView()
                        )
                    )
                )
            );
        }
    }]);

    return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var My404Component = function (_Component) {
  _inherits(My404Component, _Component);

  function My404Component(props) {
    _classCallCheck(this, My404Component);

    var _this = _possibleConstructorReturn(this, (My404Component.__proto__ || Object.getPrototypeOf(My404Component)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(My404Component, [{
    key: 'render',
    value: function render() {
      if (this.props.authenticated === true) {

        return _react2.default.createElement(
          'div',
          { className: 'errorpage', id: 'unauthorized' },
          _react2.default.createElement(
            'div',
            { className: 'errorWrapper' },
            _react2.default.createElement(
              'h3',
              null,
              'Sorry!'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We could not find the page you were looking for.'
            ),
            _react2.default.createElement(
              'p',
              { className: 'errorRedirect' },
              'Let us guide you back to the ',
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/Homepage' },
                'Homepage'
              ),
              '. '
            )
          )
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'errorpage', id: 'unauthorized' },
        _react2.default.createElement(
          'div',
          { className: 'errorWrapper' },
          _react2.default.createElement(
            'h3',
            null,
            'Sorry!'
          ),
          _react2.default.createElement(
            'p',
            null,
            'We could not find the page you were looking for.'
          ),
          _react2.default.createElement(
            'p',
            { className: 'errorRedirect' },
            'Let us guide you back to the ',
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              'Homepage'
            ),
            '. '
          )
        )
      );
    }
  }]);

  return My404Component;
}(_react.Component);

exports.default = My404Component;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(134);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _app = __webpack_require__(21);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(183);

__webpack_require__(184);

__webpack_require__(185);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// If using Firebase storage

var config = {
	apiKey: "AIzaSyCccvko6m2qAlRgNeoICbeM9CjwQSNMKZQ",
	authDomain: "kirus-craigslist.firebaseapp.com",
	databaseURL: "https://kirus-craigslist.firebaseio.com",
	projectId: "kirus-craigslist",
	storageBucket: "kirus-craigslist.appspot.com",
	messagingSenderId: "545866356812"
}; // If using Firebase database

if (!_app2.default.apps.length) {
	_app2.default.initializeApp(config);
}

exports.default = _app2.default;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
  title: "Sale",
  listings: [{ name: "General", slug: 'General' }, { name: "Books", slug: "Books" }, { name: "Classroom Items", slug: "Classroom Items" }, { name: "Household Items", slug: "Household Items" }, { name: "Clothing", slug: "Clothing" }, { name: "Bikes", slug: "Bikes" }, { name: "Electronics", slug: "Electronics" }, { name: "Tickets", slug: "Tickets" }, { name: "Cars", slug: "Cars" }]
}, {
  title: "Housing",
  listings: [{ name: "House for rent", slug: "House for rent" }, { name: "Apt for rent", slug: "Apt for rent" }, { name: "Room for rent", slug: "Room for rent" }, { name: "Roommates", slug: "Roommates" }]
}, {
  title: "Resources",
  listings: [{ name: "Class Notes", slug: "Class Notes" }, { name: "Internships", slug: "Internships" }, { name: "Scholarships", slug: "Scholarships" }, { name: "Tutoring", slug: "Tutoring" }, { name: "Lost and Found", slug: "Lost and Found" }]
}, {
  title: "Events",
  listings: [{ name: "General", slug: "General" }, { name: "Parties", slug: "Parties" }]
}];

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{ name: "Berkeley", slug: "Berkeley" }, { name: "Davis", slug: "Davis" }, { name: "Irvine", slug: "Irvine" }, { name: "Los Angeles", slug: "Los Angeles" }, { name: "Merced", slug: "Merced" }, { name: "Riverside", slug: "Riverside" }, { name: "San Diego", slug: "San Diego" }, { name: "Santa Barbara", slug: "Santa Barbara" }, { name: "Santa Cruz", slug: "Santa Cruz" }];

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(36);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
    _inherits(Item, _Component);

    function Item() {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                match = _props.match,
                location = _props.location,
                history = _props.history;
            var _location$state$item = location.state.item,
                category = _location$state$item.category,
                description = _location$state$item.description,
                date = _location$state$item.date,
                img = _location$state$item.img,
                listing = _location$state$item.listing,
                name = _location$state$item.name,
                note = _location$state$item.note,
                phone = _location$state$item.phone,
                price = _location$state$item.price,
                school = _location$state$item.school,
                title = _location$state$item.title;

            return _react2.default.createElement(
                'div',
                { className: 'itempage' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'section',
                        { className: 'submenu' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: location.state.location ? location.state.location : '/' + match.params.uc + '/' + match.params.category + '/' + match.params.listings },
                            _react2.default.createElement('i', { className: 'fas fa-arrow-left' }),
                            ' Back '
                        ),
                        _react2.default.createElement(
                            'nav',
                            { className: 'sub-link' },
                            _react2.default.createElement('span', { id: 'socialShare' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'wrapper' },
                        _react2.default.createElement(
                            'section',
                            { className: 'media-column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'gallery' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'slider' },
                                    _react2.default.createElement('div', { className: 'main-image', style: {
                                            "backgroundImage": 'url(\'' + img + '\')'
                                        } })
                                ),
                                _react2.default.createElement('div', { className: 'thumbnails' })
                            )
                        ),
                        _react2.default.createElement(
                            'section',
                            { className: 'details-column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'title' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Posted ',
                                    date
                                ),
                                _react2.default.createElement(
                                    'h2',
                                    null,
                                    title
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'pricelist' },
                                    location.state.priceIcon,
                                    price
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'moredetails' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'contactbtn' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#contactme' },
                                        'Contact Poster'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'description' },
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        'Description'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { id: 'desc' },
                                        description
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'popup', id: 'contactme' },
                    _react2.default.createElement(
                        'div',
                        { className: 'popup__content', id: 'popupwrapper' },
                        _react2.default.createElement(
                            'a',
                            { href: '#EditCancel', className: 'popup__close' },
                            '\xD7'
                        ),
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Contact'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'wrapper' },
                            _react2.default.createElement(
                                'section',
                                { className: 'contactdetails' },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        'Name'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        name
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        'Phone Number'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        phone
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        'Note'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        note
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Item;
}(_react.Component);

exports.default = Item;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

var _Item = __webpack_require__(47);

var _Item2 = _interopRequireDefault(_Item);

var _app = __webpack_require__(21);

var _app2 = _interopRequireDefault(_app);

var _toastr = __webpack_require__(131);

var _toastr2 = _interopRequireDefault(_toastr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.getUserData = function () {
            var currentUser = _app2.default.auth().currentUser;
            console.log('ayy', currentUser);
            _this.setState({
                currentUserName: currentUser.displayName,
                currentUserEmail: currentUser.email,
                currentUserPhoto: currentUser.photoURL
            }, function () {});
        };

        _this.clearFileInput = function () {

            var newUpload = document.createElement("input");

            newUpload.type = "file";
            newUpload.id = $('#imagefile').id;
            newUpload.accept = $('#imagefile').accept;
            //newUpload.style.cssText = $('#imagefile').style.cssText; 

            newUpload.parentNode.replaceChild(newUpload, $('#imagefile'));
        };

        _this.editPost = function (index) {
            var self = _this;
            if (_this.state.postArray[index].category === 'Events' || _this.state.postArray[index].category === 'Resources') {
                $('.pricing').css('display', 'none');
            } else {
                $('.pricing').css('display', 'block');
            }

            $("[name= 'title']").val(_this.state.postArray[index].title);
            $("[name= 'description']").val(_this.state.postArray[index].description);
            $("[name= 'name']").val(_this.state.postArray[index].name);
            $("[name= 'price']").val(_this.state.postArray[index].price);
            $("[name= 'phone']").val(_this.state.postArray[index].phone);
            $("[name= 'note']").val(_this.state.postArray[index].note);

            var imgURL = null;
            $('.editimage').on('change', function (event) {

                var userId = _app2.default.auth().currentUser.uid;
                var imageUpload = document.getElementById('imagefile');
                var file = event.target.files[0];
                var filename = file.name;
                var storageRef = _app2.default.storage().ref('/Appimg/' + filename);
                var uploadTask = storageRef.put(file);
                uploadTask.on('state_changed', function (snapshot) {
                    var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    self.setState({
                        progress: progress
                    });
                    if (progress === 100) {
                        setTimeout(function () {
                            //toastr.success('Your image has been successfully uploaded.')
                        }, 1000);
                    }
                }, function (error) {
                    console.log(error);
                }, function () {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        imgURL = downloadURL;
                        self.setState({
                            imgURL: imgURL
                        });
                    });
                });
            });
            $('.update').on('click', function () {

                var title = $('#title').val();
                var price = $("[name= 'price']").val();
                var description = $('#editdesc').val();
                var name = $('.name').val();
                var phone = $('.phonenum').val();
                var note = $('.notes').val();
                console.log('my price', price);
                console.log(self.state);
                console.log('my references', self.state.refArray[index]);
                var editRef = _app2.default.database().ref('users/' + _app2.default.auth().currentUser.uid + '/Posts/' + self.state.refKeys[index]);
                //editRef.remove()
                editRef.update({
                    dateUnix: self.state.postArray[index].dateUnix,
                    date: self.state.postArray[index].date,
                    school: self.state.postArray[index].school,
                    category: self.state.postArray[index].category,
                    listing: self.state.postArray[index].listing,
                    title: title,
                    price: price,
                    description: description,
                    name: name,
                    phone: phone,
                    note: note,
                    img: self.state.imgURL != null ? self.state.imgURL : self.state.postArray[index].img

                });

                //toastr.success('Your have successfully edited your post.')
            });
        };

        _this.deletePost = function (index) {

            var currentUser = _app2.default.auth().currentUser;
            var ref = _app2.default.database().ref('users/' + currentUser.uid + '/Posts');
            var self = _this;
            ref.once('value', function (data) {
                var userData = data.val();
                if (typeof Object.keys(userData) !== 'undefined' && Object.keys(userData).length > 0) {
                    var keys = Object.keys(userData);
                }
                _app2.default.database().ref('users/' + currentUser.uid + '/Posts/' + keys[index]).remove();
            });
            //this.state.refArray[index].remove()
            _toastr2.default.success('Your post has been successfully deleted.');
        };

        _this.managePost = function () {

            if (_this.state.postArray !== undefined) {

                if (_this.state.postArray.length === 0) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'noresult' },
                        'You do not have any active posts.'
                    );
                }
                return _this.state.postArray.map(function (item, i) {
                    var newTo = {
                        pathname: '/' + item.school + '/' + item.category + '/' + item.listing + '/' + i,
                        state: { item: item,
                            priceIcon: item.category === 'Sale' || item.category === 'Housing' ? '$' : ''
                        }
                    };

                    return _react2.default.createElement(
                        'section',
                        { className: 'listloop viewPost box', key: i },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { className: 'link', to: newTo },
                            _react2.default.createElement(
                                'div',
                                { className: 'item', onClick: function onClick() {
                                        return _react2.default.createElement(_Item2.default, { globalState: _this.state, item: item });
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'image', style: { backgroundImage: 'url(\'' + item.img + '\')' } },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'price' },
                                        item.category === 'Sale' || item.category === 'Housing' && item.listing !== 'Roommates' ? '$' : '',
                                        item.price
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'item-desc' },
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            item.title
                                        ),
                                        _react2.default.createElement(
                                            'h6',
                                            { className: 'dateposted' },
                                            'Item Posted: ',
                                            item.date
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'editdelete' },
                            _react2.default.createElement(
                                'a',
                                { href: '#popupEdit' },
                                _react2.default.createElement('i', { className: 'far fa-edit', onClick: function onClick() {
                                        $('#imagefile').val('');
                                        _this.editPost(i);
                                    }
                                })
                            ),
                            _react2.default.createElement('i', { className: 'fas fa-trash-alt', onClick: function onClick() {
                                    return _this.deletePost(i);
                                } })
                        )
                    );
                });
            }
        };

        _this.checkValidity = function (event) {
            var name_value = $.trim($(".name").val());
            var phone_value = $.trim($(".phonenum").val());
            var title_value = $.trim($("#title").val());
            var price_value = $.trim($("[name='price']").val());
            var desc_value = $.trim($("#editdesc").val());
            var phoneregex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            if (name_value === '' || phone_value === '' || title_value === '' || desc_value === '') {
                $('.update').attr("disabled", true);
            } else if (phone_value.match(phoneregex) && desc_value.length >= 40) {
                if ($('.pricing').css('display') === 'block') {
                    if (price_value === '') {
                        $('.update').attr("disabled", true);
                    } else if (price_value.match(/^\d+$/)) {
                        $('.update').attr("disabled", false);
                    }
                } else if ($('.pricing').css('display') === 'none') {
                    $('.update').attr("disabled", false);
                }
            } else {
                $('.update').attr("disabled", true);
            }
        };

        _this.state = {};
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (_app2.default.auth().currentUser) {
                var currentUser = _app2.default.auth().currentUser;
                this.getUserData();

                var ref = _app2.default.database().ref('users/' + currentUser.uid + '/Posts');
                var self = this;
                ref.on('value', function (data) {

                    var userData = data.val();
                    if (userData !== null) {
                        var keys = Object.keys(userData);
                    }
                    var refArray = [];
                    for (var key in keys) {

                        refArray.push(_app2.default.database().ref('users/' + currentUser.uid + '/Posts/' + key));
                    }
                    var postArray = [];

                    if (userData !== undefined) {
                        //the user has atleast 1 post
                        for (var prop in userData) {
                            postArray.push(userData[prop]);
                        }
                    } else {}

                    self.setState({
                        postArray: postArray,
                        refArray: refArray,
                        refKeys: keys
                    }, function () {});
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.state.currentUserPhoto);
            return _react2.default.createElement(
                'div',
                { className: 'managePost', id: 'managerUser' },
                _react2.default.createElement(
                    'section',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'manageUser' },
                        _react2.default.createElement(
                            'div',
                            { className: 'userImg' },
                            _react2.default.createElement('img', { src: this.state.currentUserPhoto, alt: 'User Photo' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'username' },
                            this.state.currentUserName
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'changePosts' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            'Your Posts'
                        ),
                        _react2.default.createElement(
                            'section',
                            { className: 'list-view' },
                            this.managePost()
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'popup', id: 'popupEdit' },
                        _react2.default.createElement(
                            'div',
                            { className: 'popup__content', id: 'popupwrapper' },
                            _react2.default.createElement(
                                'a',
                                { href: '#EditCancel', className: 'popup__close' },
                                '\xD7'
                            ),
                            _react2.default.createElement(
                                'h3',
                                null,
                                'Edit'
                            ),
                            _react2.default.createElement(
                                'form',
                                { autoComplete: 'off' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'mainwrapper' },
                                    _react2.default.createElement(
                                        'section',
                                        { className: 'first' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'wrapper' },
                                            _react2.default.createElement('input', { className: 'pt-input', onChange: this.checkValidity, name: 'title', id: 'title', type: 'text', placeholder: 'Title' }),
                                            _react2.default.createElement(
                                                'label',
                                                null,
                                                'Title'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'wrapper' },
                                            _react2.default.createElement('textarea', { className: 'pt-input', onChange: this.checkValidity, id: 'editdesc', rows: '8', cols: '37', name: 'description', type: 'text', placeholder: 'Description' }),
                                            _react2.default.createElement(
                                                'label',
                                                null,
                                                'Description'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'wrapper pricing' },
                                            _react2.default.createElement('input', { className: 'pt-input price', onChange: this.checkValidity, type: 'text', name: 'price', placeholder: 'Price' }),
                                            _react2.default.createElement(
                                                'label',
                                                null,
                                                'Price'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'section',
                                        { className: 'second' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'wrapper' },
                                            _react2.default.createElement('input', { className: 'pt-input name', onChange: this.checkValidity, name: 'name', type: 'text', placeholder: 'Name' }),
                                            _react2.default.createElement(
                                                'label',
                                                null,
                                                'Name'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'wrapper' },
                                            _react2.default.createElement('input', { className: 'pt-input phonenum', onChange: this.checkValidity, name: 'phone', type: 'text', placeholder: 'Phone Number' }),
                                            _react2.default.createElement(
                                                'label',
                                                null,
                                                'Phone Number'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'wrapper' },
                                            _react2.default.createElement('input', { className: 'pt-input notes', name: 'note', type: 'text', placeholder: 'Note' }),
                                            _react2.default.createElement(
                                                'label',
                                                null,
                                                'Note'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'blackbox', id: 'drop-area' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'stylefile' },
                                            ' Change Image',
                                            _react2.default.createElement('input', { type: 'file', id: 'imagefile', className: 'editimage', accept: 'image/*' })
                                        ),
                                        _react2.default.createElement(
                                            'progress',
                                            { id: 'uploader', value: this.state.progress, max: '100' },
                                            '0%'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#managerUser' },
                                _react2.default.createElement('input', { type: 'submit', className: 'submit update', value: 'Update' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

var _queryString = __webpack_require__(92);

var _queryString2 = _interopRequireDefault(_queryString);

var _schools = __webpack_require__(166);

var _schools2 = _interopRequireDefault(_schools);

var _categories = __webpack_require__(165);

var _categories2 = _interopRequireDefault(_categories);

var _app = __webpack_require__(21);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Newpost1 = function (_Component) {
	_inherits(Newpost1, _Component);

	function Newpost1() {
		_classCallCheck(this, Newpost1);

		var _this = _possibleConstructorReturn(this, (Newpost1.__proto__ || Object.getPrototypeOf(Newpost1)).call(this));

		_this.loopSchools = function () {
			return _this.state.schools.map(function (school, i) {
				return _react2.default.createElement(
					'option',
					{ className: 'schoolchoice', key: i },
					school.name
				);
			});
		};

		_this.loopCategories = function () {
			return _this.state.categories.map(function (category, i) {

				return _react2.default.createElement(
					'option',
					{ className: 'categorychoice', key: i },
					category.title
				);
			});
		};

		_this.createPost = function () {
			var schoolChoice = $('.category1').val();
			var categoryChoice = $('.category2').val();
			var _this$props = _this.props,
			    match = _this$props.match,
			    history = _this$props.history,
			    location = _this$props.location;

			history.push('/Newpost1?school=' + schoolChoice + '&category=' + categoryChoice);
			if (categoryChoice === 'Sale' || categoryChoice === 'Housing' && $("input[name='action']:checked").parent().text() !== 'Roommates') {
				$('#price').show();
			} else {
				$('#price').hide();
			}
			$(".radio1").toggle(document.URL.indexOf("category=Sale") !== -1);
			$(".radio2").toggle(document.URL.indexOf("category=Housing") !== -1);
			$(".radio3").toggle(document.URL.indexOf("category=Resources") !== -1);
			$(".radio4").toggle(document.URL.indexOf("category=Events") !== -1);
		};

		_this.checkValidity = function (event) {
			var name_value = $.trim($(".name").val());
			var phone_value = $.trim($(".phonenum").val());
			var title_value = $.trim($("#title").val());
			var price_value = $.trim($(".price").val());
			var desc_value = $.trim($("#desc").val());
			var phoneregex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
			$('.category2').on('change', function () {
				$('input[type="radio"]').prop('checked', false);
			});
			if (name_value === '' || phone_value === '' || title_value === '' || desc_value === '') {
				$('.continuebutton').attr("disabled", true);
			} else if ($('.category2').val() !== 'Select a Category' && $("input[type=radio]:checked").length > 0 && phone_value.match(phoneregex) && desc_value.length >= 30) {
				if ($('.category2').val() === 'Sale' || $('.category2').val() === 'Housing' && $("input[name='action']:checked").parent().text() !== 'Roommates') {
					if (price_value === '') {
						$('.continuebutton').attr("disabled", true);
					} else if (price_value.match(/^\d+$/)) {
						$('.continuebutton').attr("disabled", false);
					}
				} else if ($('.category2').val() === 'Resources' || $('.category2').val() === 'Events' || $("input[name='action']:checked").parent().text() === 'Roommates') {
					$('.continuebutton').attr("disabled", false);
				}
			} else {
				$('.continuebutton').attr("disabled", true);
			}
		};

		_this.state = {
			schools: _schools2.default,
			categories: _categories2.default,
			progress: 0
		};

		_this.initFirebase = _this.initFirebase.bind(_this);
		return _this;
	}

	_createClass(Newpost1, [{
		key: 'initFirebase',
		value: function initFirebase() {
			var self = this;
			toastr.options.positionClass = "toast-top-center";
			// Initialize Firebase
			if (_app2.default.auth().currentUser !== null) {
				var userId = _app2.default.auth().currentUser.uid;
			}
			var messagesRef = _app2.default.database().ref('users/' + userId + '/Posts');
			var imgURL = null;
			var pdfURLs = null;
			$('#imagefile').on('change', function (event) {
				console.log('event.target', event.target);
				var userId = _app2.default.auth().currentUser.uid;
				var imageUpload = document.getElementById('imagefile');
				var file = event.target.files[0];
				var filename = file.name;
				var storageRef = _app2.default.storage().ref('/Appimg/' + filename);
				var uploadTask = storageRef.put(file);
				uploadTask.on('state_changed', function (snapshot) {
					var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
					//                    $('progress').value = progress;
					self.setState({
						progress: progress
					});
					if (progress === 100) {
						setTimeout(function () {
							toastr.success('Your file has been successfully uploaded.');
						}, 1000);
					}
				}, function (error) {
					console.log(error);
				}, function () {
					uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
						imgURL = downloadURL;
					});
				});
			});
			//        if($('#pdffile')){
			//            console.log('yes',self.pdfInput)
			//        }
			//  $('#pdffile').on('change', function (event) {
			//               console.log('ref target',self.pdfInput)
			//                var filePDF = self.pdfInput.files[0];
			//	            var filename = filePDF.name;
			//                console.log('my file', filePDF)
			//                console.log('my filename', filename)
			//                 var storageRef = firebase.storage().ref('/pdf/' + filename);
			//	            var uploadPdfTask = storageRef.put(filePDF);
			//                  uploadPdfTask.on('state_changed', function (snapshot) {
			//	            }, function (error) {
			//	                console.log(error)
			//	            }, function () {
			//                uploadPdfTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
			//                        pdfURLs =  downloadURL;
			//	                })
			//                  })
			//                                   
			//                           console.log('pdfURL', pdfURLs)
			//                
			// })
			$('.continue').on('click', function () {

				var school = $('.category1').val();
				var category = $('.category2').val();
				var listing = $("input[name='action']:checked").parent().text();

				var title = $('#title').val();
				var price = $('.price').val();
				var description = $('#desc').val();

				var name = $('.name').val();
				var phone = $('.phonenum').val();
				var note = $('.notes').val();

				var newMessageRef = messagesRef.push();
				newMessageRef.set({
					date: new Date().toString().split(' ').splice(1, 3).join(' '),
					dateUnix: Date.now(),
					school: school,
					category: category,
					listing: listing,
					title: title,
					price: price,
					description: description,
					name: name,
					phone: phone,
					note: note,
					img: imgURL
				});

				toastr.success('Your have successfully created your post.');
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.initFirebase();
			$('.radio1').hide();
			$('.radio2').hide();
			$('.radio3').hide();
			$('.radio4').hide();
			$('#price').hide();
		}
	}, {
		key: 'render',

		//    checkPdfValidity = () => {
		//        if($("input[name='action']:checked").parent().text() === 'Class Notes'){
		//            return (
		//                <label className='stylefile uploadPDF'> Add PDF 
		//            <input ref={(input) => {this.pdfInput = input }} type="file" id='pdffile' accept="application/pdf" /> 
		//                </label>
		//            )
		//        }
		//        
		//    
		//    }

		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'newpost' },
				_react2.default.createElement(
					'section',
					{ className: 'newpost1' },
					_react2.default.createElement(
						'p',
						null,
						'Choose the community that fits best for your post:'
					),
					_react2.default.createElement(
						'div',
						{ id: 'mainselection' },
						_react2.default.createElement(
							'select',
							{ className: 'category1 custom-select' },
							_react2.default.createElement(
								'option',
								{ className: 'schoolchoice' },
								'San Diego State'
							),
							this.loopSchools()
						),
						_react2.default.createElement(
							'span',
							{ onChange: this.checkValidity },
							_react2.default.createElement(
								'select',
								{ onChange: this.createPost, className: 'category2 custom-select' },
								_react2.default.createElement(
									'option',
									{ className: 'categorychoice' },
									'Select a Category'
								),
								this.loopCategories()
							)
						),
						_react2.default.createElement(
							'form',
							{ onChange: this.createPost, className: 'radio' },
							_react2.default.createElement(
								'div',
								{ className: 'radio1', onChange: this.checkValidity },
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'General'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Books'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Classroom Items'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Household Items'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Clothing'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Bikes'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Electronics'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Tickets'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Cars'
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'radio2', onChange: this.checkValidity },
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'House for rent'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Apt for rent'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Room for rent'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Roommates'
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'radio3', onChange: this.checkValidity },
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Class Notes'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Internships'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Scholarships'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Tutoring'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Lost and Found'
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'radio4', onChange: this.checkValidity },
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'General'
								),
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement('input', { name: 'action', type: 'radio' }),
									'Parties'
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'newpost2' },
					_react2.default.createElement(
						'h3',
						null,
						'Post Details'
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'p',
							{ className: 'required' },
							'Required fields are marked with ',
							_react2.default.createElement(
								'span',
								{ className: 'red' },
								'*'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'formbox' },
							_react2.default.createElement(
								'section',
								null,
								_react2.default.createElement(
									'label',
									{ className: 'required' },
									'Title ',
									_react2.default.createElement(
										'span',
										{ className: 'red' },
										'*'
									)
								),
								_react2.default.createElement('input', { id: 'title', type: 'text', name: 'title', required: true })
							),
							_react2.default.createElement(
								'section',
								{ id: 'price' },
								_react2.default.createElement(
									'label',
									{ className: 'required' },
									'Price ',
									_react2.default.createElement(
										'span',
										{ className: 'red' },
										'*'
									)
								),
								_react2.default.createElement(
									'div',
									{ id: 'dollasign' },
									'$'
								),
								' ',
								_react2.default.createElement('input', { onChange: this.checkValidity, className: 'price', type: 'text', name: 'price' })
							),
							_react2.default.createElement(
								'section',
								null,
								_react2.default.createElement(
									'label',
									{ className: 'required' },
									'Description ',
									_react2.default.createElement(
										'span',
										{ className: 'red' },
										'*'
									)
								),
								_react2.default.createElement('textarea', { onChange: this.checkValidity, id: 'desc', rows: '6', title: 'Enter a short description over 30 characters', cols: '36', required: true, minLength: '30' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'formbox' },
							_react2.default.createElement(
								'section',
								{ className: 'contactbox' },
								_react2.default.createElement(
									'label',
									{ className: 'required' },
									'Name ',
									_react2.default.createElement(
										'span',
										{ className: 'red' },
										'*'
									)
								),
								_react2.default.createElement('input', { onChange: this.checkValidity, className: 'name', type: 'text', placeholder: 'John Doe', required: true }),
								' ',
								_react2.default.createElement('br', null),
								_react2.default.createElement(
									'label',
									{ className: 'required' },
									'Phone Number ',
									_react2.default.createElement(
										'span',
										{ className: 'red' },
										'*'
									)
								),
								_react2.default.createElement('input', { onChange: this.checkValidity, className: 'phonenum', title: 'Enter a 10 digit number', type: 'text', placeholder: '1234567890', required: true }),
								'  ',
								_react2.default.createElement('br', null),
								_react2.default.createElement(
									'label',
									null,
									'Note (optional)'
								),
								_react2.default.createElement('input', { className: 'notes' }),
								'    ',
								_react2.default.createElement('br', null)
							)
						)
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'newpost3' },
					_react2.default.createElement(
						'h3',
						null,
						'Upload a File'
					),
					_react2.default.createElement(
						'form',
						{ className: 'blackbox', id: 'drop-area' },
						_react2.default.createElement(
							'label',
							{ className: 'stylefile' },
							' Add File',
							_react2.default.createElement('input', { onChange: function onChange(e) {
									_this2.checkValidity(e);
								}, type: 'file', id: 'imagefile', accept: 'image/*, application/pdf' })
						),
						_react2.default.createElement(
							'progress',
							{ id: 'uploader', value: this.state.progress, max: '100' },
							'0%'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'button' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/' + $('.category1').val(), className: 'continue' },
							_react2.default.createElement('input', { className: 'continuebutton', type: 'submit', value: 'Post this Ad', disabled: true })
						)
					)
				)
			);
		}
	}]);

	return Newpost1;
}(_react.Component);

exports.default = Newpost1;

/***/ })

},[163]);