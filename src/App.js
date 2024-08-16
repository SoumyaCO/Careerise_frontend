
import Home1 from "./compotent1/home/Home1";
import Home2 from "./compotent1/home/Home2";
// import Register from "../compotent1/register/Register";
// import Login from "../compotent1/login/Login";
// import Component1 from "./compotent1/Component1";

function App() {
  

  return (    
    <div className="App">
      <>
        <Home1 title='CareeRise' />
        <Home2 topic='@Consultant List'/>
        {/* <Login title='LOGIN'/>
        <Register title='REGISTER' /> */}
        
      </>
    </div>
  );
}

export default App;
