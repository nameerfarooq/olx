const INITIAL_STATE = {
    users : [{
        name : "muhammad nameer"
    }],
    Ads : []
}

export default (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case "setdata":
            return({
                ...state,
                users:[...state.users,action.payload]
            })
            
                
            

    }
    return state
    
}