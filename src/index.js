import ReactDOM from 'react-dom';
import NavBar from '../src/NavBar';
import Stories from '../src/Stories';
import Corpo from '../src/Corpo'
import FundoMobile from '../src/fundoMobile';

function App() {
  return (
    <div>
      <NavBar />
      <Stories />
      <Corpo />
      <FundoMobile />
    </div>
  );
}

const app = App();
ReactDOM.render(app, document.querySelector(".root"));