import {Component} from "react"

// import moment from "moment"

import Chart from "./components/Chart/index"

import { weeklyJsonData ,monthlyJsonData,dailyJsonData} from "./components/JSON";


import './App.css';

class App extends Component {

  state={dailyData:dailyJsonData,weeklyData:weeklyJsonData,monthlyData:monthlyJsonData,dailyBtn:true,weeklyBtn:false,monthlyBtn:false}

  onClickDailyBtn=()=>{
    this.setState({dailyBtn:true,monthlyBtn:false,weeklyBtn:false})
  }
  onClickWeeklyBtn=()=>{
    this.setState({dailyBtn:false,monthlyBtn:false,weeklyBtn:true})
  }
  onClickMonthlyBtn=()=>{
    this.setState({dailyBtn:false,monthlyBtn:true,weeklyBtn:false})
  }

  render(){
    const {dailyData,dailyBtn,monthlyBtn,monthlyData,weeklyBtn,weeklyData}=this.state
 
    return (
      <div className="main-container">
        <div>
          <h1>Charting Library</h1>
        </div>
        
        <div className="cont-2">
          <div className="chart-container">
            {dailyBtn && <Chart data={dailyData} heading="Daily Data"/>}
            {monthlyBtn && <Chart data={monthlyData} heading="Monthly Data"/>}
            {weeklyBtn && <Chart data={weeklyData} heading="Weekly Data"/>}
          </div>
          <div className="btns-cont">
            
            <div >
              <button className="btn-cont" onClick={this.onClickDailyBtn}>Daily</button>
            </div>
              <div className="btn-cont">
              <button onClick={this.onClickWeeklyBtn} className="btn-cont">Weekly</button>
            </div>
              <div >
              <button className="btn-cont" onClick={this.onClickMonthlyBtn}>Monthly</button>
            </div>
          </div>
        </div>
      </div>
    );
}
}

export default App;
