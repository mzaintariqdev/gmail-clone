import React from 'react'
import {Button,IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css"
import {useDispatch} from "react-redux";
import {openSendMessage} from "./features/mailSlice";
const Sidebar = () => {
	const dispatch = useDispatch();
	return (
		<div className="Sidebar">
			<Button startIcon={<AddIcon fontSize="large"
			/>}className="Sidebar_compose"
			onClick={()=>dispatch(openSendMessage())}>
				Compose
			</Button>
			<SidebarOption Icon={InboxIcon} 
			title="Inbox" number={5} 
			selected={true}/>
			<SidebarOption Icon={StarIcon} title="Starred" number={5}/>
			<SidebarOption Icon={LabelImportantIcon} title="Important" number={5}/>
			<SidebarOption Icon={NearMeIcon} title="Sent" number={5}/>
			<SidebarOption Icon={NoteIcon} title="Drafts" number={5}/>
			<SidebarOption Icon={ExpandMoreIcon} title="More" number={5}/>
			<div className="Sidebar_footer">
				<div className="footer_icons">
					<IconButton>
						<PersonIcon/>
					</IconButton>
					<IconButton>
						<DuoIcon/>
					</IconButton>
					<IconButton>
						<PhoneIcon/>
					</IconButton>	

				</div>
			</div>
		</div>
	)
}

export default Sidebar