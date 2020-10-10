import React from "react";
import { Card } from "@blueprintjs/core";

function CollapseItem({ title }) {
	const Items = title.map((item) => (
		<Card className="collapse-item">{item}</Card>
	));

	return (
		<div>
			<div className="collapse-container">{Items}</div>
		</div>
	);
}

export default CollapseItem;
