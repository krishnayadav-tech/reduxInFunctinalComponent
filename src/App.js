import { useSelector } from "react-redux";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import ComponentD from "./ComponentD";
import appCss from './Style/App.module.css';
const App = ()=>{
    let counter = useSelector(store=>store.counter);
    return (
        <>
            
            <div className={appCss.buttonwrapper}>
                <ComponentA/>
                <ComponentB/>
                <ComponentC/>
                <ComponentD/>
            </div>

            <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1>Counter : {counter}</h1>
            </div>
        </>
    )
}

export default App;