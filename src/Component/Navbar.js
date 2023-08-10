import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
  //   <nav classNameNameName={`navbar navbar-expand-lg bg-body-tertiary`}>
  //   <div classNameNameName="container-fluid">
      
  //     <a classNameNameName="navbar-brand" href="1">{props.title}</a>
  //     <button classNameNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //       <span classNameNameName="navbar-toggler-icon"></span>
  //     </button>
  //     <div classNameNameName="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul classNameNameName="navbar-nav me-auto mb-2 mb-lg-0">
  //         <li classNameNameName="nav-item">
  //           <a classNameNameName="nav-link active" aria-current="page" href="1">Home</a>
  //         </li>
  //         <li classNameNameName="nav-item">
  //           <a classNameNameName="nav-link" href="1">About</a>
  //         </li>
  //       </ul>
  //       <form classNameNameName="d-flex" role="search">
  //         <input classNameNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  //         <button classNameNameName="btn btn-outline-success" type="submit">Search</button>
  //       </form>
  //     </div>
  //   </div>
  // </nav>



  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
     
     
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkmode</label>
</div>
  </div>
</nav>
  
  );
}


Navbar.prototype={
  title: PropTypes.string.isRequired
}


Navbar.defaulProps={
  title:"set title here"
}