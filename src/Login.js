import React from 'react'
import {Button} from "@material-ui/core";
import "./Login.css"
import {useDispatch} from "react-redux";
import {auth,provider} from "./firebase";
import {login} from "./features/userSlice";
const Login = () => {
	const dispatch =useDispatch();
	const signin=()=>{
		auth
		.signInWithPopup(provider)
		.then(({user})=>{
			dispatch(login({
				displayName:user.displayName,
				email:user.email,
				photoUrl:user.photoUrl
			}));
		})
		.catch((error) => alert(error.message))
	}
	return (
		<div className="Login">
			<div className="Login_container">
				<img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt=""/>
				<Button variant="contained" color="primary" onClick={signin}>Login</Button>
			</div>
		</div>
	)
}

export default Login