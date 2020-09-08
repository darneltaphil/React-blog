import React from 'react';
import ReactDOM from 'react-dom'

function Navigation()  {
	function handleLogout(e){
		localStorage.removeItem('user');
}	

return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
   <div class="container">
      <a class="navbar-brand" href="#">Arnold A.K.A <em>(Nitro)</em>'s Blog </a> <div className="text-white">Pre-MEST Project</div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
         <ul class="navbar-nav ml-auto">
            <li class="nav-item">
	                  <a className="btn btn-primary mr-2" href="/list" >Posts Listing</a >
            </li>

            <li class="nav-item">
	                  <a className="btn btn-primary mr-2" href="/create" >Add New Post</a >
            </li>
            <li class="nav-item">
	                  <div className="btn btn-danger mr-2" onClick={handleLogout} href="#" >Logout</div >
            </li>
         </ul>
      </div>
   </div>
</nav>
);
}
export default Navigation;

