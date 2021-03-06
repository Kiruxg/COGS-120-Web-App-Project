import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Item extends Component {
  constructor () {
    super()
    this.state = {
        
    }
  }
    
  render () {
      
      const {match, location, history} = this.props
      const {category, description, date, img, listing, name, note, phone, price, school, title} = location.state.item
    return (<div className='itempage'>
            <div className='container'>
                <section className='submenu'>
                   <Link to={location.state.location ? location.state.location :`/${match.params.uc}/${match.params.category}/${match.params.listings}` }><i className="fas fa-arrow-left"></i> Back </Link>
                    <nav className='sub-link'>
                    
                    <span id="socialShare"></span>
                    </nav>
                </section>
           <div className='wrapper'>
                <section className='media-column'>
                
                <div className='gallery'>
                    <div className='slider'>
                        <div className='main-image' style={{
                                "backgroundImage": `url('${img}')`
                            }}>
                           
                        </div>
                    </div>
                    <div className='thumbnails'>
                        
                    </div>
                </div>    
            </section>
            <section className='details-column'>
                <div className='title'>
                    <p>Posted {date}</p>
                    <h2>{title}</h2>
                    <h3 className='pricelist'>{location.state.priceIcon}{price}</h3>
                </div>    
                <div className='moredetails'>
                    <div className='contactbtn'><a href='#contactme'>Contact Poster</a></div>
                    
                             <div className='description'>
                    <label>Description</label>
                    <p id='desc' >{description}</p>
                </div> 
                </div>    
                
            </section>
       
            
                </div>
                  
            </div>
             <div className="popup" id="contactme">
              <div className="popup__content" id='popupwrapper'>
         <a href="#EditCancel" className="popup__close">&times;</a>
          <h3>Contact</h3>
                  <div className="wrapper">
                    <section className='contactdetails' >
                        <div>
                            <label>Name</label>
                            <p>{name}</p>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <p>{phone}</p>
                        </div>
                        <div>
                            <label>Note</label>
                            <p>{note}</p>
                            
                        </div>
                    </section>  
                 
                   
        </div>
            </div>
            </div>
        </div>)
  }
}