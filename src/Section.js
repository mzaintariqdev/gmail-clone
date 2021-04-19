import React from 'react'
import "./Section.css"
const Section = (props) => {
	return (
		<div className={`Section ${props.selected && "Section--selected"}`}
			style={{
				borderBottom: `3px solid ${props.color}`,
				color:`${props.selected && props.color }`
			}}
			>
			<props.Icon/>
			<h4>{props.title}</h4>
		</div>
	)
}

export default Section