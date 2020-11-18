import { Display } from 'react-bootstrap-icons'
import firebase from '../../config/firebase'



const post=(data)=>{
    return (dispatch)=>{
        dispatch({type:"setdata",payload:data})
    }
}

const facebook_login = (history) =>{
    return (dispatch)=>{
        
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user)
            let userdata = {
                uid : user.uid,
                name : user.displayName,
                profile : user.photoURL,

            }
            firebase.database().ref('/').child(`users/${user.uid}`).set(userdata)
            .then(()=>{
                dispatch({type : "SETUSER" , payload : user});
                alert("login successful")
                history.push('/Ads')
            })
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
           console.log(errorMessage)
          });

        
       

    }
}





export{
    post,
    facebook_login
}