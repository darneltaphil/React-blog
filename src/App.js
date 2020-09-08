import React from 'react';
import ReactDOM from 'react-dom'
import Router from './components/Router'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.css';

function MyApp() {
	//TRYING TO USE LOCAL STORAGE TO CONTROL THE LOGIN
	
	//THE FOLLOWING CODE SAYS : SHOW LOGIN PAGE IF LOCALSTORAGE ITEM IS NOT SET
	if(!localStorage.getItem('user')==true){
		return (
	  <div >
	  <Login />  
	  </div>
  );
	}else{
		return (
	  <div >
	  <Router />  
	  </div>
  );
	}

}
export default MyApp; 
