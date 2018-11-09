import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'
import firebase from 'firebase/app';

export default class  Homepage2 extends Component {
  constructor () {
    super()
    this.state = {
      categoriesData: '',
        search: ''
    }
      this.handleSearchInput = this.handleSearchInput.bind(this)
  }
 loopCategories = () => {
     const {match, history} = this.props;
     //if promise gave back our data...
     if(this.state.categoriesData != ''){
         
    //index every category title 
    return this.state.categoriesData.map((category, i) => 
        { 
        //method to index every category listing
         const loopListings = () => {
                return category.listings.map((listing, index) => {
                    return(
                 //link to listings page on click
                    <a href={`/${this.props.match.params.uc}/${category.title}/${listing.slug}`} className="link" key={index}>{listing.name} </a>
                 )
                    
                })
         }
         return(
                <div className="categories" key={i}>
                    <a href={`/${match.params.uc}/${category.title}`} className='title'>{category.title}</a>
                    <div className={`group-links`}>
                    {loopListings()}
                    </div>
                </div>
            )
     })
     } 
 }
 handleSearchInput =  (event) =>{
      const name = event.target.name
    const value =  event.target.value
     var myNode = document.getElementById("displaySearchResults");
     while (myNode.firstChild ) {
   myNode.removeChild(myNode.firstChild);
}
     if (value == "" ){
         $('#displaySearchResults').css('display', 'none')
     } else{
         $('#displaySearchResults').css('display', 'block')
     }
     
    this.setState({
        [name]: value
    }, () => {
        this.filterSearchResults()
        
    })
 }
 filterSearchResults = () => {
      if(this.state.filteredData !== undefined){
          
          var listingObj = {};
          var itemProp = {};
          var results = document.getElementById("displaySearchResults");
          var counter = 0;
       var newData  = this.state.filteredData.filter((item, i) => {
           if(this.props.match.params.uc === item.school){
            var items = item.title.toLowerCase()
            var listings = item.listing.toLowerCase()
            var searchText = this.state.search.toLowerCase()
            var itemMatch = items.includes(searchText)
            var listingMatch = listings.includes(searchText)
            if (itemMatch) { //|| listingMatch
                
           if(listingObj.hasOwnProperty(item.listing)){
                    listingObj[item.listing].count += 1;
                } else{
                     listingObj[item.listing] = {
                        count: 1,
                        searchCategory: item.category,
                        searchListing: item.listing
                        
                    }
                }
           
                console.log('my obj', listingObj)
               return true;
            } else {
        
       }
       }
            }
          
          
        )
       if(jQuery.isEmptyObject(listingObj)){
            var para = document.createElement("p");
         
        para.innerHTML = `No results found for your search.`;
            document.getElementById("displaySearchResults").appendChild(para);
       }
    for(var prop in listingObj){
        if(listingObj[prop].count != 0){
         var div = document.createElement("a");
        div.class = 'searchResult'
          let newTo = {
               pathname: `/${this.props.match.params.uc}/${listingObj[prop].searchCategory }/${listingObj[prop].searchListing}`,
              state: {
                  searchText: this.state.search
              }
           }
           
           console.log('properties', listingObj[prop])
           let m =  `${listingObj[prop].count} found in the ${prop} listing Wall` 
       div.href = `/${this.props.match.params.uc}/${listingObj[prop].searchCategory }/${listingObj[prop].searchListing}`
    // let l = `<Link to={${newTo}}>${m}</Link>`
       div.innerHTML =`<a>${m}</a>`
        
            
        
            document.getElementById("displaySearchResults").appendChild(div);
       }
          $('#displaySearchResults').css('border-radius', '5px');
          $('#displaySearchResults').css('background-color', '$color-offwhite');
        
          this.setState({
            searchData: newData
        }, () => {
        })
    }
      }
     
     
     
 }
 componentWillMount(){
     
var ref = firebase.database().ref('users')
var self = this;
ref.on('value', function(data){
    var userData = data.val()
    var keys = Object.keys(userData)
    var postArray = [];
    for(var i = 0; i < keys.length; i++){
        
        var k = keys[i];
        var userPosts = userData[k].Posts
        if (userPosts !== undefined){ //the user has atleast 1 post
        for(var prop in userPosts){
            postArray.push(userPosts[prop])
        }
              var postKeys = Object.keys(userPosts) //keys of individual posts
              
            
        } else{
            continue;
        }
      
    }
    
    self.setState({
     postArray,
     filteredData: postArray
    }, () => {
    })
})
    var self = this;
	axios.get('/api/categories')
  .then(function (response) {
    self.setState({
        categoriesData: response.data
    } )
  })
  .catch(function (error) {
    console.log(error);
  });
}
     
  render () {
    return (<div className='home'>
            
            <section className='searchsection'> 
                <div className='search'>
                    <input onChange={this.handleSearchInput} type='text' name='search' placeholder='You search, we fetch...' />
                    <i className="fas fa-search" ></i>
                    
                </div>
                <div id='displaySearchResults'>
                       
                    
                    </div>
            </section>
            
            <section className='category'> 
                 <div>{this.loopCategories()}</div>
            </section>
            </div>)
  }
}

