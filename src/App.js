import './App.css';
import Signup from './Signup';

function App() {
  
  return (
   <div className='App'>
   {/*   {users.map((user)=> { 
       return (
       <div>
         {""}
         <h1>Name : {user.name}</h1>
         <h1>Age : {user.age}</h1> 
         
       </div>
     );
       })} */}

       <Signup/>
     
   </div>
  
  );
}

export default App;
