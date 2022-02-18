import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <div>
     <BarChart />
     </div>
     <div className= 'footer'>
      <div>
      Sorting Visualizer
       </div>
     </div>
    </div>
  );
}

export default App;
