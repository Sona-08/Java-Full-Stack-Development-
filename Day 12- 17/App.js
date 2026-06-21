import logo from './logo.svg';
import './App.css';
// import App1 from './App1';
import ngpLogo from './ngpLogo.png';
import { App } from './App'

export const App = () => {
  return (
    <div>
      <h1>Sona</h1>
      <h1 style={{ color: "blue", fontStyle: "italic" }}>This is my App....</h1>
      
      {/* <img src="data:image/png;base64,..."></img> */}
      <img src={ngpLogo} alt="NGP Logo" style={{ width: "200px" }} />
      <App />
    </div>
  );
}

