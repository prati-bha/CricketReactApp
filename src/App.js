import React, { Component } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Display from './Display.js';
import "./index.css";
class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state={
      valone:0,
      valtwo:0,
      type:"all",
      status:"upcoming",
      data:[]
    };
  }
 
    statusChange=(event,val)=>{
      event.preventDefault();
      this.setState({
        valone:val,
      });
      
      switch(val)
      {
        case 1:
        this.setState({
          status:"running",
        },()=>{
          this.api();
          console.log(this.state.status)
        });
        break;
        case 2:
        this.setState({
          status:"completed",
        },()=>{
          this.api();
          console.log(this.state.status)
        });
        break;
        default:
        this.setState({
          status:"upcoming",
        },()=>{
          this.api();
          console.log(this.state.status)
        });

      }
      
    }
    typeChange=(event,val)=>{
      event.preventDefault();
      this.setState({
        valtwo:val,
      })
      
      switch(val)
      {
        case 1:
        this.setState({
          type:"International",
        },()=>{
          this.api();
        });
        break;
        case 2:
         this.setState({
          type:"Domestic",
        },()=>{
          this.api();
        });
        break;
        default:
        this.setState({
          type:"All",
        },()=>{
          this.api();
        });
        
      }
         
    }
    componentDidMount() {
      this.api();
    }
    api=()=>{ 
      fetch("https://api.devcdc.com/cricket", {
      method: "POST",
      body: JSON.stringify({
        query:
          `{
          schedule(type:"` +this.state.type + `",status:"`+this.state.status +`")
          {
            matchID
            matchNumber	
            
            seriesName
            venue
            matchStatus
          matchScore{
              teamScore{
                battingSide
                inning
                runsScored
                wickets
                battingTeamShortName
                battingTeam
              }
            }
            
            homeTeamName
            awayTeamName
            matchResult
            startDate
          }	
        }`
      })
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ data: json.data.schedule });
        console.log(this.state.data);
      });     
    };
render()
{
    return (

    <div className="head">
     <center> <h1><span>⚾</span> Schedule <span>🏏</span></h1></center>
      <br/>
      <AppBar position="static" color="white">
      <center><div className="color1">
      <Tabs  
      value={this.state.valone}
       onChange={this.statusChange} 
       aria-label="simple tabs example" 
       centered>
          <Tab label="Upcoming" />
          <Tab label="Running" />
          <Tab label="Completed" />
      </Tabs>
      </div>
      </center>
      <br/>
      <center>
      <div className="color2">
        <Tabs value={this.state.valtwo} 
        onChange={this.typeChange} 
        aria-label="simple tabs example" 
        centered>
          <Tab label="All" />
          <Tab label="International" />
          <Tab label="Domestic" />
        </Tabs>
      </div>
      </center>
      </AppBar>

      {this.state.data.map(item=>(
        
        <Display key={item.matchID} {...item}/>
      ))}
    </div>
    );
}
}

 
export default App;