import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import './Post.css';
import moment from 'moment';
 
class Post extends Component {
    confirmDeletion = () => {
        const {id} = this.props.info;
 
        Swal.fire({
                title: 'Delete this one?',
                text: "This action can not be canceled!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete',
                cancelButtonText: 'No, Cancel'
          }).then((result) => {
            if (result.value) {
                this.props.deletePost(id)
                Swal.fire(
                    'Press OK to back',
                    'The post has been deleted',
                    'success'
                )
            }
          })
    };
//TRYING TO RENDER NUMBER OF VIEWS WITH RANDOM NUMBERS

//   RandomNumbers = () =>{
//	  var random_number = Math.floor(Math.random() * 350);
//	  
//  }
 
     render() {
        const {id, title, body, category, datestamp} = this.props.info;
 
        return ( 
			<div className="container">
			<div className="row ">
			<div className="col-lg-12 ">
			<div className="card col-lg-10 mb-3 shadow p-0  ">

  			<h5 className="card-header bg-info">{title.length > 25 ? `${title.substr(0, 25)}...` : title} </h5>
			
              <div class="card-body">
				<p class="card-text">
				<span className='post-preview'>
                        {body.length > 300 ? `${body.substr(0, 300)}...` : body}
                </span>
				<Link to={`/post/${id}`} className="btn btn-primary ml-4"> Read More </Link>
				</p>
			  </div>

              <div class="card-footer">

                        <div className="btn btn-warning ml-4"><Link to={`/edit/${id}`}> Edit </Link></div>
                        <div className="btn btn-danger ml-4"> <Link onClick={this.confirmDeletion} >Delete</Link></div> 
                        <div className="btn btn-light ml-4">{} Views</div> 
               </div>  


                                     
            </div>
			
			</div>
			
			
			</div>

			
			</div>
            
         );
    }
}
export default Post;
