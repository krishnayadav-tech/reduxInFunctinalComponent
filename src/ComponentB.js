import { useDispatch } from "react-redux";

const ComponentA = (props)=>{

    let dispatch = useDispatch();
    let handlerclick = ()=>{
        dispatch({
            type:"add1"
        })
    }

    return (
        <button onClick={handlerclick}>+1</button>
    )
}

export default ComponentA;