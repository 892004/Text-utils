
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';


function App() {
  return (
   <>
  
<Navbar title = "TextUtils " About="About Us"/>
<div className="container my-3">
<Textform heading = "Enter Your Text To Analyze"></Textform>
</div>
   </>
  );
}

export default App;
