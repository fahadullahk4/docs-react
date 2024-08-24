import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
function Card({ data, reference }) {
	return (
		<motion.div
			drag
			dragConstraints={reference}
			whileDrag={{ scale: 1.2 }}
			dragElastic={0.2}
			className="relative w-52 h-64 rounded-[40px] py-10 px-7 bg-slate-900 text-white overflow-hidden flex-shrink-0">
			<FaFileAlt />
			<p className="text-sm font-semibold leading-tight mt-5 ">
				{data.description}
			</p>
			<footer className="absolute w-full bottom-0 left-0">
				<div className="flex items-center justify-between mb-5 py-5 px-6">
					<h5 className="text-xs">{data.size}</h5>
					{data.close ? (
						<IoIosClose />
					) : (
						<span className="h-5 w-5 bg-zinc-600 rounded-full flex justify-center items-center">
							<MdDownload size={"0.8em"} />
						</span>
					)}
				</div>
				{data.tag.isOpen && (
					<div
						className={`tag ${
							data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
						} w-full py-2 flex justify-center items-center`}>
						<h5 className="text-sm font-semibold">{data.tag.tagTitle}</h5>
					</div>
				)}
			</footer>
		</motion.div>
	);
}

export default Card;
