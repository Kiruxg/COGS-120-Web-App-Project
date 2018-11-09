import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Homepage1 extends Component {
  constructor () {
    super()
    this.state = {
      schoolData: ''
    }
  }
 componentWillMount(){
    var self = this;
	axios.get('/api/schools')
  .then(function (response) {
    self.setState({
        schoolData: response.data
    })
  })
  .catch(function (error) {
    console.log(error);
  });
}
 loopSchools = () => {
     if(this.state.schoolData != ''){
     return this.state.schoolData.map((school, index) => {
         return(
                <a href={`${school.name}`} key={index} className='button'>
                    <p>{school.name}</p>
                </a>
         
         
            )
     })
     } 
 }
  render () {
    return (<div className='home'>
                 <h3>The Classified Ad Platform for University Students</h3>
            <section className='mainpage'> 
               <div className="gridwrapper">
                <h5>University of California</h5>
                <section className='schoollist'>
                    {this.loopSchools()}
   
                </section>
                </div>
                <span className="gridwrapper">
                <h5>California State University</h5>
                <section className='schoollist'>
                <a href='San Diego State' className='button'>
                    <p>San Diego State</p>
                </a>
                 </section>
                </span>
            </section>
            
            </div>)
  }
}

