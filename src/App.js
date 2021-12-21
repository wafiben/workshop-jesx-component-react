import Profile from "./Profile.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar"
function App() {
  const name ='salem';
  const lastName='boaziz'

  return (
    <div>
      <Navbar/>
      <Profile style={{margin:'auto'}}/>
    </div>
  );
}

export default App;
