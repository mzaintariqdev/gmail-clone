import React from 'react'
import "./SidebarOption.css"
const SidebarOption = (props) => {
	return (
		<div className={`SidebarOption ${props.selected && "SidebarOption--active"}`}>
			<props.Icon/>
			<h3>{props.title}</h3>
			<p>{props.number}</p >
		</div>
	)
}

export default SidebarOption