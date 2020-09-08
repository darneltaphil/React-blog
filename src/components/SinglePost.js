import React, { Component } from 'react';
 
import Divider from '@material-ui/core/Divider';
import renderHTML from 'react-render-html';
 
class SinglePost extends Component {
 
    showPost = (props) => {
        if (!props.post) return null;
 
        const {title, author, body, datestamp} = this.props.post;
 
        return (
            <React.Fragment>
 
                <div className="single_post"> 
                    <h4>Title: {title}</h4>
                    <Divider light />
                    <p><b>Autor:</b> {author}</p>
                    <Divider light />
                    <p><b>Content:</b> {body}</p>
                    <Divider light />
                    <div style={{ width: '60%' }}>{renderHTML(body)}</div>
                </div>
            </React.Fragment>
        )
 
    }
    render() {
        return (
            <div className=" col-md-6">
                {this.showPost(this.props)} 
            </div>
        );
    }
}
 
 
export default SinglePost;