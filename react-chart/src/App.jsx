import './App'
import Rechart from './Rechart/Rechart';


function App() {

  return (
    <div className="App">
      <div className="main-div">
        <div className="upper-content">
          <div className="upper-text">
            <p>My Balance</p>
            <h3>$921.48</h3>
          </div>
          <div className="upper-div">
            <div className="div1"></div>
            <div className="div2"></div>
          </div>
        </div>
        <div className="lower-content">
          <div className="lower-upper-text">
            <h1>Spending - Last 7 days</h1>
          </div>
          <div className="lower-chart">
          <Rechart></Rechart>
          </div>
          <hr />
          <div className="lower-text">
            <div className="lw1">
              <span>Total this month</span>
              <h1>$478.33</h1>
            </div>
            <div className="lw2">
              <span>+2.4%</span>
              <p>From last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
