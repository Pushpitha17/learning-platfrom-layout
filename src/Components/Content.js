import React, { useState } from "react";
import {
	Card,
	Icon,
	Elevation,
	Button,
	Overlay,
	Classes,
	H2,
	Divider,
	Collapse,
} from "@blueprintjs/core";
import OverlayItem from "./OverlayItem";
import MainContent from "./MainContent";
const Items = [
	{
		subtopic: "Topic one",
		lessons: ["lesson one", "lesson two"],
	},
	{
		subtopic: "Topic Two",
		lessons: ["lesson one", "lesson two"],
	},
	{
		subtopic: "Topic Three",
		lessons: ["lesson one", "lesson two", "lesson Three"],
	},
	{
		subtopic: "Topic four",
		lessons: ["lesson one", "lesson two"],
	},
	{
		subtopic: "Topic five",
		lessons: ["lesson one", "lesson two"],
	},
];

function Content() {
	const [overlay, setOverlay] = useState(false);
	const overlayItems = Items.map((Item) => (
		<OverlayItem data={Item}></OverlayItem>
	));

	return (
		<>
			<Card className="side-bar">
				<div>
					<Card
						interactive={true}
						className="navigation-card-content"
						onClick={() => setOverlay(!overlay)}>
						<Icon
							icon="book"
							iconSize={15}
							className="navigation-card-icon-content"
						/>
						<h5 className="navigation-heading" style={{ marginBottom: "0" }}>
							Table of Content
						</h5>
					</Card>
					<Overlay
						isOpen={overlay}
						canOutsideClickClose="true"
						onClose={() => setOverlay(!overlay)}
						className={Classes.OVERLAY_SCROLL_CONTAINER}>
						<Card className="overlay">
							<Icon
								icon="small-cross"
								className="close-overlay"
								onClick={() => setOverlay(!overlay)}></Icon>
							<H2 style={{ textAlign: "center" }}>Module title</H2>
							<Divider></Divider>
							{overlayItems}
						</Card>
					</Overlay>
					<div style={{ marginTop: "20px" }}>
						<Button fill="ture" large="true" minimal="true">
							Content block 1
						</Button>
						<Button fill="ture" large="true" minimal="true">
							Content block 2
						</Button>
						<Button fill="ture" large="true" minimal="true">
							Content block 3
						</Button>
					</div>
				</div>
				<div>
					<Card
						interactive={true}
						elevation={Elevation.TWO}
						className="navigation-card-previous">
						<Icon
							icon="chevron-left"
							iconSize={25}
							className="navigation-card-icon-left"
						/>
						<div>
							<h5 className="navigation-heading">Previous lesson</h5>
							<p style={{ marginBottom: "0" }}>Lesson title</p>
						</div>
					</Card>
					<Card
						interactive={true}
						elevation={Elevation.TWO}
						className="navigation-card-next">
						<div>
							<h5 className="navigation-heading">Next lesson</h5>
							<p style={{ marginBottom: "0" }}>Lesson title</p>
						</div>
						<Icon
							icon="chevron-right"
							iconSize={25}
							className="navigation-card-icon-right"
						/>
					</Card>
				</div>
			</Card>
			<div className="main-grid">
				<div></div>
				<div
					style={{
						backgroundColor: "whitesmoke",
						padding: "50px 50px 0",
						overflow: "scroll",
						height: "auto",
					}}>
					<MainContent></MainContent>
				</div>
			</div>
		</>
	);
}

export default Content;
