import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,
       Route,
       Link} from 'react-router-dom'
import qs from 'query-string'
import schools from '../../../data/schools.js'
import categories from '../../../data/categories.js'
import firebase from 'firebase/app';

export default class Newpost1 extends Component {
  constructor () {
    super()
    this.state = {
      schools,
	  categories,
        progress: 0
    }
	 
	 this.initFirebase = this.initFirebase.bind(this);
  }
	initFirebase() {
        var self = this;
        toastr.options.positionClass = "toast-top-center";
	        // Initialize Firebase
        if(firebase.auth().currentUser !== null){
	        var userId = firebase.auth().currentUser.uid;
        }
	        var messagesRef = firebase.database().ref('users/' + userId + '/Posts')
             var imgURL = null;   
             var pdfURLs = null;
	        $('#imagefile').on('change', function (event) {
                console.log('event.target', event.target)
	            var userId = firebase.auth().currentUser.uid;
	            let imageUpload = document.getElementById('imagefile');
	            var file = event.target.files[0];
	            var filename = file.name;
	            var storageRef = firebase.storage().ref('/Appimg/' + filename);
	            var uploadTask = storageRef.put(file);
	            uploadTask.on('state_changed', function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                    $('progress').value = progress;
                    self.setState({
                        progress: progress
                    })
                    if (progress === 100){
                        setTimeout(function(){
                    toastr.success('Your file has been successfully uploaded.')
                        }, 1000);
                    }
                    
	            }, function (error) {
	                console.log(error)
	            }, function () {
	                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        imgURL =  downloadURL;
                        
	                })

	            })
	        })
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
	                date: (new Date()).toString().split(' ').splice(1,3).join(' '),
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
	            })
                
                toastr.success('Your have successfully created your post.')
	        })
	        }
	        componentDidMount() {
	            this.initFirebase();
	            $('.radio1').hide()
	            $('.radio2').hide()
	            $('.radio3').hide()
	            $('.radio4').hide()
	            $('#price').hide();

	        }

	loopSchools = () => {
		return this.state.schools.map((school, i) => {
			return (
			
				<option className='schoolchoice' key={i}>{school.name}</option>
			)
		})
	}
	loopCategories = () => {
		return this.state.categories.map((category, i) => {
			
			return (
			
				<option className='categorychoice'  key={i}>{category.title}</option>
			)
		})
		}

	
	createPost = () => {
	    let schoolChoice = $('.category1').val()
	    let categoryChoice = $('.category2').val()
	    const {
	        match,
	        history,
	        location
	    } = this.props
	    history.push(`/Newpost1?school=${schoolChoice}&category=${categoryChoice}`)
	    if (categoryChoice === 'Sale' || categoryChoice === 'Housing' && $("input[name='action']:checked").parent().text() !== 'Roommates') {
	        $('#price').show();
	    } else {
	        $('#price').hide();
	    }
	    $(".radio1").toggle(document.URL.indexOf("category=Sale") !== -1);
	    $(".radio2").toggle(document.URL.indexOf("category=Housing") !== -1);
	    $(".radio3").toggle(document.URL.indexOf("category=Resources") !== -1);
	    $(".radio4").toggle(document.URL.indexOf("category=Events") !== -1);
	}
	checkValidity = (event) => {
	    var name_value = $.trim($(".name").val());
	    var phone_value = $.trim($(".phonenum").val());
	    var title_value = $.trim($("#title").val());
	    var price_value = $.trim($(".price").val());
	    var desc_value = $.trim($("#desc").val());
	    var phoneregex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	    $('.category2').on('change', function () {
	        $('input[type="radio"]').prop('checked', false);
	    })
	    if (name_value === '' || phone_value === '' || title_value === '' || desc_value === '') {
	        $('.continuebutton').attr("disabled", true);
	    } else if ($('.category2').val() !== 'Select a Category' && $("input[type=radio]:checked").length > 0 && phone_value.match(phoneregex) && desc_value.length >= 10) {
	        if ($('.category2').val() === 'Sale' || ($('.category2').val() === 'Housing'
                                                    && $("input[name='action']:checked").parent().text() !== 'Roommates')) {
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
	}
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
	
  render () {
	   
    return (<div className='newpost'>
			<section className='newpost1'>
            <p>Choose the community that fits best for your post:</p>
            <div id='mainselection'>
			 
				<span onChange= {this.checkValidity}>
                <select onChange={this.createPost} className='category2 custom-select'>
				<option className='categorychoice'>Select a Category</option>
				<option className='categorychoice'>CSE 12</option>
				<option className='categorychoice'>CSE 15L</option>
              
                </select>
				</span>
				
            </div>
            </section>
             <section className='newpost2'>
            <h3>Post Details</h3>
            <div>
				<p className='required'>Required fields are marked with <span className='red'>*</span></p>
            <div className='formbox'>
            <section>
                <label className='required'>Title <span className='red'>*</span></label>
                <input id='title' type='text' name='title' required></input>
            </section>    
		
            <section>
                <label className='required' >Description <span className='red'>*</span></label>
            <textarea onChange= {this.checkValidity} id='desc' rows="6" title='Enter a short description over 30 characters' cols="36" required minLength="10">
                </textarea>    
            </section>    
            </div>
            <div className='formbox'>
            <section className='contactbox'>
				<label className='required'>Name <span className='red'>*</span></label> 
                <input onChange= {this.checkValidity} className='name' type='text' placeholder='John Doe' required></input> <br />
                <label className='required'>Phone Number <span className='red'>*</span></label> 
                <input  onChange= {this.checkValidity} className='phonenum' title='Enter a 10 digit number' type='text' placeholder='1234567890' required></input>  <br />
                <label>Note (optional)</label>
                <input className='notes'></input>    <br />
            </section>
            </div>
                </div>
                 
            </section>
			
            </div>)
  }
}