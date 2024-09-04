import React, { useState } from "react";
import { BiGridVertical } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight, FaRegQuestionCircle } from "react-icons/fa";
import img from "./assets/360_F_392250914_2Od8jNRBPgpMu8W29vCh4hiu5EUXbgGU.jpg";

const App = () => {
	const [type, setType] = useState("about");
	const [images, setImages] = useState<string[]>([img, img, img]);

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event?.target?.files?.[0];
		if (file) {
			const newImage = URL.createObjectURL(file);
			setImages((prevImages) => [...prevImages, newImage]);
		} else {
			alert("Please select a file");
		}
	};

	return (
		<div className="h-screen w-screen bg-gray-900 p-16 flex flex-row box-border ">
			<div className="h-full xs:w-7/12 md:w-3/12 lg:w-6/12 xl:w-7/12 sm:hidden md:block"></div>
			<div className="h-full sm:w-full md:w-9/12 lg:w-6/12 xl:w-5/12 flex flex-col gap-4">
				<div className="h-1/2 w-full rounded-xl bg-gray-800 py-4 pl-12 relative shadow-[5px_5px_5px_rgba(0,0,0,0.8)]">
					<div className="absolute top-0 left-0 mt-4 ml-2">
						<FaRegQuestionCircle className="text-gray-500 size-5" />
					</div>

					<div className="absolute bottom-1/2 left-0">
						<BiGridVertical className="text-gray-700 size-10" />
					</div>

					<div className="w-[92%] p-1.5 bg-black flex rounded-2xl">
						<button
							className={`w-1/3 rounded-xl p-2 transition-all transition-duration: 3s ${
								type === "about"
									? "bg-gray-900 text-white"
									: "bg-inherit text-gray-400"
							}`}
							onClick={() => setType("about")}
						>
							About Me
						</button>
						<button
							className={`w-1/3 rounded-xl p-2 transition-all transition-duration: 3s ${
								type === "experiences"
									? "bg-gray-900 text-white"
									: "bg-inherit text-gray-400"
							}`}
							onClick={() => setType("experiences")}
						>
							Experiences
						</button>
						<button
							className={`w-1/3 rounded-xl p-2 transition-all transition-duration: 3s ${
								type === "recommended"
									? "bg-gray-900 text-white"
									: "bg-inherit text-gray-400"
							}`}
							onClick={() => setType("recommended")}
						>
							Recommended
						</button>
					</div>
					<div className="w-[98%] h-[70%] rounded-xl mt-6">
						{type === "about" && (
							<div className="h-full w-full overflow-y-scroll custom-scrollbar">
								<p className="text-gray-400 mr-7">
									I'm a software engineer with a passion for building innovative
									solutions. I'm currently working at a startup in the
									healthcare industry, where I work on developing medical
									applications.
									<br />
									<br /> I'm a software engineer with a passion for building
									innovative solutions. I'm currently working at a startup in
									the healthcare industry, where I work on developing medical
									applications. <br />
									<br />
									I'm a software engineer with a passion for building innovative
									solutions. I'm currently working at a startup in the
									healthcare industry, where I work on developing medical
									applications.
								</p>
							</div>
						)}
						{type === "experiences" && (
							<div className="h-full w-full overflow-y-scroll custom-scrollbar">
								<p className="text-gray-400">
									I've worked at ABC Company, Software Engineer, Software
									Engineer, and Software Engineer Intern.
									<br />
									<br />
									I've worked at ABC Company, Software Engineer, Software
									Engineer, and Software Engineer Intern.
									<br />
									<br />
									I've worked at ABC Company, Software Engineer, Software
									Engineer, and Software Engineer Intern.
									<br />
									<br />
									I've worked at ABC Company, Software Engineer, Software
									Engineer, and Software Engineer Intern.
								</p>
							</div>
						)}
						{type === "recommended" && (
							<div className="h-full w-full overflow-y-scroll custom-scrollbar">
								<p className="text-gray-400">
									Hey, I'm a software engineer with a passion for building
									innovative solutions. I'm currently working at a startup in
									the healthcare industry, where I work on developing medical
									applications.
									<br />
									<br />
									Hey, I'm a software engineer with a passion for building
									innovative solutions. I'm currently working at a startup in
									the healthcare industry, where I work on developing medical
									applications.
									<br />
									<br />
									Hey, I'm a software engineer with a passion for building
									innovative solutions. I'm currently working at a startup in
									the healthcare industry, where I work on developing medical
									applications.
								</p>
							</div>
						)}
					</div>
				</div>

				<div className="w-4/5 border-solid border-gray-800 border-2 mx-auto" />

				<div className="h-1/2 w-full rounded-xl bg-gray-800 py-4 px-12 relative shadow-[5px_5px_5px_rgba(0,0,0,0.8)]">
					<div className="absolute top-0 left-0 mt-4 ml-2">
						<FaRegQuestionCircle className="text-gray-500 size-5" />
					</div>

					<div className="absolute bottom-1/2 left-0">
						<BiGridVertical className="text-gray-700 size-10" />
					</div>
					<div className="w-full flex justify-between">
						<button className="rounded-2xl bg-black text-white p-4 w-1/4 cursor-default">
							Gallery
						</button>
						<div className="flex items-center space-x-8">
							<div className="relative cursor-pointer">
								<button className="px-4 py-2 bg-gray-700 text-white rounded-full focus:outline-none transition-shadow shadow-custom text-xs cursor-pointer flex justify-center items-center">
									<b>+ ADD IMAGE</b>
								</button>
								<input
									type="file"
									accept="image/*"
									className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
									onChange={handleImageChange}
								/>
							</div>
							<div className="flex space-x-4">
								<button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-gray-400 shadow-black-white focus:outline-none transition-shadow opacity-60">
									<FaArrowLeft />
								</button>
								<button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-gray-400 shadow-black-white focus:outline-none transition-shadow opacity-60">
									<FaArrowRight />
								</button>
							</div>
						</div>
					</div>
					<div className="w-full h-5/6 mt-6 flex gap-4 overflow-x-auto xl:mt-10 scrollbar-image">
						{images.map((image, index) => (
							<img
								key={index}
								src={image}
								alt="image"
								className="w-[30%] h-3/4 bg-gray-700 rounded-2xl"
							/>
						))}
					</div>
				</div>

				<div className="w-4/5 border-solid border-gray-800 border-2 mx-auto" />
			</div>
		</div>
	);
};

export default App;
