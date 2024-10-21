// import React, { Component } from 'react';
// import Navbar from './Components/Navbar';
// import News from './Components/News';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchTerm: ''
//     };
//   }

//   handleSearch = (term) => {
//     this.setState({ searchTerm: term });
//   };

//   render() {
//     return (
//       <div>
//         <Navbar onSearch={this.handleSearch} />
//         <News searchTerm={this.state.searchTerm} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <News searchTerm="cricket"/>
    </div>
  );
};

export default App;