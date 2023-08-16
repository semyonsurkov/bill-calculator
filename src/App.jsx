import Bill from '../src/components/Bill';
import Like from '../src/components/Like';
import './App.css';
import LikeFriend from './components/LikeFriend';
import BillInfo from './components/BillInfo';

function App() {
  return (
    <div>
      <Bill>How much was the bill? </Bill>
      <Like>How did you like the service? </Like>
      <LikeFriend>How did your friend like the service? </LikeFriend>
      <BillInfo></BillInfo>
    </div>
  );
}

export default App;
