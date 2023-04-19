import './App.css';
import img from './img/Frame 77.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav className='navbar'>
        <div className="navbar_logo">
       <img src={img} alt="" />
        </div>
        <div className="navbar_link">
       <a href="" className="navbar__click">Home</a>
       <a href="" className="navbar__click">About Us</a>
       <a href="" className="navbar__click">News</a>
       <a href="" className="navbar__click">Impact</a>
       <button className="navbar_Programs">Programs</button>
       <button className="navbar_Kolibri">Kolibri</button>
     <select name="" id="" className='douw'>
      <option value="">En</option>
      <option value="">Ru</option>
     </select>
        </div>
        
       </nav>
      </header>
    </div>
  );
}

export default App;
