// import Test from "./component/test";
import User_Info from "./component/user_info";

import { Provider } from 'react-redux'
import store from "./store";

function App() {
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <Test/>
    //   </div>
    // </Provider>

    <div className="App">
      {/* <Test/> */}
      <User_Info/>
    </div>
  );
}

export default App;
