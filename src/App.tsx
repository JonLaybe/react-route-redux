import { BrowserRouter } from 'react-router';
import './App.scss';
import RoutingComponent from './components/routing/RoutingComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='wrapper'>
          <RoutingComponent />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
