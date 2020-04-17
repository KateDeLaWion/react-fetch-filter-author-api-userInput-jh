
import React, {Component} from 'react';
import NameForm from './NameForm'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: [],
  
    };

  }

  componentDidMount() {
    fetch('https://picsum.photos/v2/list?page=2&limit=20')
      .then((response) => {
        return response.json();
      })
      .then((theirData) => {
        //  console.log(theirData);
         this.setState({
          myData: theirData
        })

        // console.log(this.state.theirData)
        
      })

  }

  render() {
    return ( 
      
      <div> 
        {/* <NameForm data = {this.state["myData"]} />
           or */}
        <NameForm data = {this.state.myData} />
      </div>
      
    )
  }


}







// // React original
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
