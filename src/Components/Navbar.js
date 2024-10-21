// import React, { Component } from 'react';

// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchTerm: ''
//     };
//   }

//   handleSearch = (e) => {
//     this.setState({ searchTerm: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSearch(this.state.searchTerm);
//   };

//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg navbar bg-danger ">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               DailyUpdats
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/about">
//                     About
//                   </a>
//                 </li>
//               </ul>
//               <form className="d-flex" role="search" onSubmit={this.handleSubmit}>
//                 <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                   value={this.state.searchTerm} 
//                   onChange={this.handleSearch} 
//                 />
//                 <button className="btn btn-outline-dark" type="submit">
//                   Search
//                 </button>
//               </form>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navbar;

import React, { useState } from 'react';

const Navbar = ({ onSearch }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            DailyUpdats
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn btn-danger dropdown-toggle "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Sports</a></li>
                  <li><a className="dropdown-item" href="#">Science</a></li>
                  <li><a className="dropdown-item" href="#">General</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;