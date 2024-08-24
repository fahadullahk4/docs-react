import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
	const ref = useRef(null);
	const data = [
		{
			description: "This is the first doc.",
			size: "1mb",
			close: true,
			tag: { isOpen: true, tagTitle: "Download Now...", tagColor: "green" },
		},
		{
			description: "This is the second doc.",
			size: "1mb",
			close: true,
			tag: { isOpen: true, tagTitle: "Download Now...", tagColor: "green" },
		},
		{
			description: "This is the third doc.",
			size: "1mb",
			close: true,
			tag: { isOpen: true, tagTitle: "Download Now...", tagColor: "green" },
		},
		{
			description: "This is the fourth doc.",
			size: "1mb",
			close: true,
			tag: { isOpen: true, tagTitle: "Upload Now...", tagColor: "blue" },
		},
	];
	return (
		<div
			ref={ref}
			className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5">
			{data.map((item, index) => (
				<Card data={item} key={index} reference={ref} />
			))}
		</div>
	);
}

export default Foreground;
