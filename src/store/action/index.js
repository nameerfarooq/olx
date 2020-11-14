const post=(data)=>{
    return (dispatch)=>{
        dispatch({type:"setdata",payload:data})
    }
}

export{
    post,
}