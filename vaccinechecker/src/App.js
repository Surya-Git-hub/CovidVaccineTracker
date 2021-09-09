import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import {Cardlist} from './components/card-list/card-list.component'
class App extends Component {
  constructor(){
    super();
    this.state={
      Pincode : '',
      DateField : '',
      VaccineCenters:[]
    };
    
  }

  
  
  
  render(){
    const fetchdata = () => {
      const cowinapi= `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${this.state.Pincode}&date=${this.state.DateField}`;
      if ((  this.state.Pincode <= 999999) & (  this.state.Pincode >= 10000) & (this.state.DateField !=='')) {
        fetch(cowinapi)
        .then(res=>res.json())
        .then(data=>this.setState({VaccineCenters:data.sessions},()=>console.log(this.state.VaccineCenters)));
        console.log(cowinapi);
        }  
      }
      
      const handlePinChange=(e)=>{
        this.setState({Pincode : e.target.value})
      }
      const handleDateChange=(e)=>{
        this.setState({DateField : e.target.value})
      }

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Covid Vaccine Tracker</h1>
  <div>
    <label >Enter 6 Digit Area PIN Code : </label>
    <input id="Pincode" type="number" name="pincode" step="1" min="100000" max="999999" onChange={handlePinChange} placeholder='110053' />
    <label >Enter Today's or Tomorrow date : </label>
    <input id="dateIN" type="search" name="Date" onChange={handleDateChange} placeholder='DD-MM-YYYY'/>
    <input type="button"onClick={fetchdata} value='Search'/>
    
  </div>

        <Cardlist centers={this.state.VaccineCenters}/>
      </header>
    </div>
  );}
  
}

export default App;
