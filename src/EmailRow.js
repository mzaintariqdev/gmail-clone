import React from 'react'
import "./EmailRow.css"
import {Checkbox,IconButton} from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectMail} from './features/mailSlice';
const EmailRow = ({id,title,subject,description,time}) => {
	const history = useHistory();
	const dispatch =useDispatch();
	const openMail = () =>{
		dispatch(selectMail(
			{id,
			title,
			subject,
			description,
			time,}
		))
		history.push("/mail")
	};
	return (
		<div onClick={openMail} className="EmailRow">
			<div className="EmailRow_Options">
				<Checkbox/>
				<IconButton>
					<StarBorderOutlinedIcon/>
				</IconButton>
				<IconButton>
					<LabelImportantOutlinedIcon/>
				</IconButton>
			</div>
			<h3 className="EmailRow_title">
			{title}
			</h3>
			<div className="EmailRow_message">
			<h4>{subject}{" "}
			<span className="EmailRow_description">
				{description}
			</span></h4>
			</div>
			
			<p className="EmailRow_time">
				{time}
			</p>
		</div>
	)
}

export default EmailRow