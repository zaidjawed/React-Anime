import Spinny from './components/spinny';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
      <Provider store={store} >
         <Spinny />
      </Provider>
   );
}

export default App;
