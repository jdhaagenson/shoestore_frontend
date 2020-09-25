import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    'shoes': []
  }
  componentDidMount = () => {
    fetch("http://localhost:8000/api/shoes/")
        .then((response) => response.json())
        .then((data) => this.setState({shoes: data.results}))
    this.handleForeignKeys()
  }
  getManufacturer = () => {
      fetch(this.state.shoes['manufacturer'])
          .then((res) => res.json())
          .then((data) => this.setState({shoes: {manufacturer:data.results[0]}}))
  }
  getColor = () => {
    fetch(this.state.shoes['color'])
        .then((res) => res.json())
        .then((data) => this.setState({shoes: {color:data.results[0]}}))
  }
  getShoeType = () => {
    fetch(this.state.shoes['shoe_type'])
        .then((res) => res.json())
        .then((data) => this.setState({shoes: {shoe_type:data.results[0]}}))
  }
  handleForeignKeys = () => {
    this.getManufacturer()
    this.getShoeType()
    this.getColor()
  }


  render () {
    return (
      <React.Fragment>
        <div>
          <h1>Shoes</h1>
          <ul>
            {this.state.shoes.map((s)=>(
                <div key={s.index}>
                  <li className='bullet'>size: {s.size}</li>
                  <li className='bullet'>brand name: {s.brand_name}</li>
                  <li className='bullet'>manufacturer: {s.manufacturer}</li>
                  <li className='bullet'>color: {s.color}</li>
                  <li className='bullet'>material: {s.material}</li>
                  <li className='bullet'>shoe type: {s.shoe_type}</li>
                  <li className='bullet'>fasten type: {s.fasten_type}</li>
                  <br/>
                </div>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
