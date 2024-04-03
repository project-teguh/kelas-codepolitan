import './App.css'
import  {GlobalContext}  from "./context";
import { RouterProvider } from 'react-router-dom';
import { router } from "./routes";
function App() {
  const user = {
    name: "Teguh",
    age: 25
  }
  return (
    <div className='App'>
       <GlobalContext.Provider value ={user}>
        <RouterProvider router={router} />
       </GlobalContext.Provider>

    </div>
  );
}

export default App
