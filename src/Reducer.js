const initialState = {
    counter : 0
}

const reducer = (laststate = initialState, action)=>{
    if(action.type == "add5"){
        laststate.counter = laststate.counter + 5;
    }else if(action.type == "sub5"){
        laststate.counter = laststate.counter - 5;
    }else if(action.type == "add1"){
        laststate.counter = laststate.counter + 1;
    }else if(action.type == "sub1"){
        laststate.counter = laststate.counter - 1;
    }
    return laststate;
} 
export default reducer;