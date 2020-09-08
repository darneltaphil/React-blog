import React, { Component } from 'react';
import Listing from './Listing';
import './Post.css';
 
class Posts extends Component {
    state = {  }
    render() { 
        return ( 
            <form className="col-md-10 mt-5">
                <legend className="text-center display-4">View All Posts</legend>
                <Listing 
                    posts={this.props.posts} 
                    deletePost={this.props.deletePost} 
                />
            </form>
         );
    }
}
 
export default Posts;