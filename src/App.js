
import './App.css';
import IncrementDecrement from './Component/IncrementDecrement'
import Heading from './Component/Heading';
import CheckListDemo from './Component/CheckListDemo';

import  "./Component/heading.css";
import Shop from "./Component/Shop";
import Home from "./Component/Home";
import About from "./Component/AboutUs";
import Service from "./Component/Service";
import Navbar from "./Component/Navbar";
import {  Route, Switch } from 'react-router-dom';
import Error from './Component/Error';
import Search from './Component/Search';
import Users from './Component/Axioms/Users';
import BasicForm from './Component/Form/BasicForm'
import RegistrationForm from './Component/Form/RegistrationForm';
import UseEffectDemo from './Component/UseEffectDemo';
import UserDetailsByAPI from './Component/Axioms/UserDetailsByAPI';
import UseRefHookDemo from './Component/Form/UseRefHookDemo'
import ReadJsonFile from './Component/ReadJsonFile'
import BootStrapDiv from './Component/BootStrapDiv'


function App() {
  return (
    <>
    
    {/* <Heading /> */}
    {/* <IncrementDecrement/> */}
    {/* <CheckListDemo/> */}
    
    <main>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                {/* We want to pass props in Service using <Route component> */}
                <Route path="/service" component={()=><Service name="washing"/>} />
                {/* We want to pass props in Service using <Route render> */}
                <Route path="/shop" render={()=><Shop name="Washing Center"/>} />
                <Route path="/search" component={Search } />
                <Route path="/users" component={Users } />
                <Route path="/login" component={BasicForm } />
                <Route path="/register" component={RegistrationForm } />
                <Route path="/usersapi" component={UseEffectDemo } />
                <Route path="/effect" component={UserDetailsByAPI } />
                <Route path="/refhook" component={UseRefHookDemo} />
                <Route path="/readjsonData" component={ReadJsonFile} />
                <Route path="/bootstrap" component={BootStrapDiv}/>
                
                <Route component={Error}/>
            </Switch>
            <br/>
            
        </main>

      
    </>
  );
}

export default App;
