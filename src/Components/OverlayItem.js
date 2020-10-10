import React, { useState } from "react";
import { Button, Collapse, Classes } from "@blueprintjs/core";
import CollapseItem from "./CollapseItem";

function OverlayItem({ data }) {
	const [showCollapse, setShowCollapse] = useState(false);
	const [activeClass, setactiveClass] = useState("");

	return (
		<div style={{ marginTop: "20px" }}>
			<Button
				fill="ture"
				large="true"
				intent="primary"
				onClick={() => {
					setShowCollapse(!showCollapse);
					!showCollapse ? setactiveClass(Classes.ACTIVE) : setactiveClass("");
				}}
				outlined="true"
				minimal="true"
				className={activeClass}
				style={{ display: "inline" }}>
				{data.subtopic}
			</Button>
			<Collapse isOpen={showCollapse}>
				<CollapseItem title={data.lessons}></CollapseItem>
			</Collapse>
		</div>
	);
}

export default OverlayItem;
