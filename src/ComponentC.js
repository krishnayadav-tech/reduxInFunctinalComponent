import { useDispatch } from "react-redux";

const ComponentA = (props)=>{
    let dispatch = useDispatch();
    let handlerclick = ()=>{
        dispatch({
            type:"sub5"
        })
    }
    return (
        <button onClick={handlerclick}>-5</button>
    )
}

export default ComponentA;