import React from "react";

function Background() {
	return (
		<>
			<div className="absolute w-full h-screen ">
				<div className="absolute top-[4%] w-full py-6 flex justify-center font-bold text-slate-300">
					Documents.
				</div>
				<h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl font-semibold text-zinc-900">
					Docs.
				</h1>
			</div>
		</>
	);
}

export default Background;
