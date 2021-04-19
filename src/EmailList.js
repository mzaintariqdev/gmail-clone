import React,{useState,useEffect} from 'react'
import "./EmailList.css"
import Section from "./Section";
import { db } from './firebase';
import EmailRow from "./EmailRow";
import {Checkbox,IconButton} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
const EmailList = () => {
	const [email, setEmail] = useState([])
	useEffect(() => {
		db.collection('emails').orderBy('timestamp','desc').onSnapshot
		(snapshot=>setEmail(snapshot.docs.map(doc=>({
			id:doc.id,
			data:doc.data(),
		}))))		
	},[])
	return (
		<div className="EmailList">
			<div className="EmailList_Settings">
				<div className="EmailList_SettingsLeft">
					<Checkbox/>
					<IconButton>
						<ArrowDropDownIcon/>
					</IconButton>
					<IconButton>
						<RedoIcon/>
					</IconButton>
					<IconButton>
						<MoreVertIcon/>
					</IconButton>		
				</div>	
				<div className="EmailList_SettingsRight">
					<IconButton>
						<ChevronLeftIcon/>
					</IconButton>
					<IconButton>
						<ChevronRightIcon/>
					</IconButton>
					<IconButton>
						<KeyboardHideIcon/>
					</IconButton>
					<IconButton>
						<SettingsIcon/>
					</IconButton>	
				</div>	
			</div>	
			<div className="EmailList_Sections">
				<Section Icon={InboxIcon} title="Primary" color="red" selected/> 
				<Section Icon={PeopleIcon} title="Social" color="#1A73E8"/> 
				<Section Icon={LocalOfferIcon} title="Promotions" color="green"/> 
			</div>
			<div className="EmailList_List">
			{email.map(({id,data:{to,message,subject,timestamp}})=>(
				<EmailRow
				id={id}
				title={to}
				subject={subject}
				description={message}
				time={new Date(timestamp?.seconds*1000).toUTCString()}/>
			))}
			</div>
		</div>
	)
}

export default EmailList