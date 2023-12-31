import neofetch from "@utils/neofetch";
import cv from "@static/CV_Kirill_Makienko.pdf"
//eslint-disable-next-line

const compileResponseHTML = styleMap => {
	return styleMap
		.map(item => {
			return `<span class="${
				item.folder
					? `style3`
					: `${item.executable ? `style2` : `style1`}`
			}">${
				item.link
					? `<a target="_blank" href="${item.link}">${item.name}</a>`
					: `${item.name}`
			}</span>`;
		})
		.join("  ");
};

const getSpaces = commandList => {
	let defaultSpaces = "\t";
	let lengthList = commandList.map(item => {
		return item.name.length;
	});
	// console.log(commandList)
	let max = Math.max(...lengthList);
	let what = commandList.map(item => {
		return Array(max - item.name.length + 1).join(" ") + defaultSpaces;
	});
	return what;
};

const compileCommandHTML = commandList => {
	let defArgs = [
		{
			name: "ls",
			description: "lists directory content",
		},
		{
			name: "cd",
			description: "changes the current working directory",
		},
		{
			name: "clear",
			description: "clears the terminal screen",
		},
	];
	let argList = [
		...defArgs,
		...commandList.map(item => {
			let extra = " ";
			if (item.subPathStrict[0]) {
				extra += item.subPathStrict[1].name;
			}
			return {
				name: item.name[0] + extra,
				description: item.description,
			};
		}),
	];
	let spaceList = getSpaces(argList);
	let response = `These shell commands are defined internally.
Type <span class="style2">'help'</span> to see this list.\n\n`;
	argList.forEach((item, idx) => {
		let temp = `<span class="style2">${item.name}</span>${spaceList[idx]}${item.description}\n`;
		response += temp;
	});
	return `${response}\nAnd more "hidden" commands...`;
};

let commandList = [
	{
		name: ["resume", "./resume", "resume.sh", "./resume.sh"],
		action:  "<a href",
		response: "",
		subPathStrict: [false],
		description: "view my resume",
	},
	{
		name: ["github", "git", ".github"],
		action: true,
		response:
			'Visit: <a href="https://github.com/Kirill-Makienko-Tkachenko">my github @Kirill-Makienko-Tkachenko </a> (Click my name, its a link)',
		subPathStrict: [false],
		description: "checkout my github profile",
	},
	{
		name: ["linkedin"],
			action: true,
		response:
			'Visit: <a href="https://www.linkedin.com/in/kirill-m-t/">LinkedIn</a> (Click on the text, its a link)',
		subPathStrict: [false],
		description: "checkout my linkedIn profile",
	},
	{
		name: ["projects", "./projects", "projects.app", "./projects.app"],
		// action: { PROJECTS: "" },
		action: false,
		response:
			'Page Under Development 🚧🔨 | For the moment I´ll list the main projects I worked on \n <h1>NASA HUMAN EXPLORATION ROVER CHALLENGE</h1> \n - I worked on the telemetry team in front and back teams of the main page, but mainly I worked on deploying everything on self hosted servers and trying the connection between the sensors and the Database \n <h1>SERVIDORES EL RUSO</h1> \n - This is my very own startup and the project ive sunken the most of my time for the last copule of years. Its main objective is to provide game servers for players in México and central america for them to not rely on server located  ',
		subPathStrict: [false],
		description: "checkout my projects",
	},
	{
		name: ["whoami"],
		action: true,
		response: "I'm Kirill Makienko, a 19-year-old Computer Science student in my third semester @ Tec de Monterrey. I have a passion for learning, accompanied by proven leadership and communication skills. I'm multilingual, fluent in Spanish, English and Russian, I know basic German and French. I've achieved international recognition for various audio-visual productions and have contributed to this domain professionally for over five years. And it goes without saying that I love animals",
		subPathStrict: [false],
		description: "displays my information",
	},
	{
		name: ["fetchme"],
		action: false,
		response: `<pre>${neofetch}</pre>`,
		subPathStrict: [false],
		description: "fetches my information in a cool way",
	},
	{
		name: ["code"],
		action: true,
		response: "",
		subPathStrict: [true, { name: ".", response: "" }],
		description: "opens a VS code window for this website's source code",
	},
	{
		name: ["happiness"],
		action: true,
		response: "",
		subPathStrict: [false],
		description: '<span class="">close your Eyes</span>',
	},
	{
		name: ["git"],
		action: true,
		response: "",
		subPathStrict: [true, { name: "log", response: "" }],
		description: "lists my github projects",
	},

	{
		name: ["help"],
		action: true,
		response: "",
		subPathStrict: [false],
		description: "displays detailed information about the commands",
	},

	{
		name: ["credits"],
		action: true,
		response:
			"Just a heads up, I didn't create site, I took this site as a template from this guy here <a href='https://github.com/adityassharma-ss'> Aditya Sharma</a>, and particularly from this <a href='https://github.com/adityassharma-ss/aditya?ref=reactjsexample.com'> project (I'm clickable) </a>",
		subPathStrict: [false],
		description: "Credits for the creation of the page",
	},

	
];


commandList = commandList.map(item => {
	if (item.name[0] === "help") {
		item.response = `<pre>${compileCommandHTML(commandList)}</pre>`;
	}
	return item;
});


const customCommands = [

		{
		name: ["fox"],
		action: "<a href",
		response:
			"Im a Fox 🦊",
		subPathStrict: [false],
		description: "fox",
	},

];

const fileList = [
	{
		name: ".github",
		link: "https://github.com/Kirill-Makienko-Tkachenko",
		folder: true,
		executable: false,
	},
	{
		name: "src",
		link: "https://github.com/Kirill-Makienko-Tkachenko",
		folder: true,
		executable: false,
	},
	{
		name: "resume.sh",
		link: "",
		folder: false,
		executable: true,
	},
	{
		name: "projects.app",
		link: "",
		folder: false,
		executable: true,
	},
];

const getCommandList = commandList => {
	let finalCommandList = {};
	commandList.forEach(item => {
		//eslint-disable-next-line
		let commandBuilder = {};
		item.name.forEach(elem => {
			let action = item.action ? { [item.name[0].toUpperCase()]: "" } : null;
			let resp = item.response;
			commandBuilder = {
				[elem]: {
					validArgs: {
						_dir: {
							action: action,
							response: resp,
						},
						default: {
							action: action,
							response: resp,
						},
					},
				},
			};
			if (item.subPathStrict[0]) {
				commandBuilder[elem].validArgs[item.subPathStrict[1].name] = {
					action: action,
					response: item.subPathStrict[1].response,
				};
			}
			finalCommandList = { ...commandBuilder, ...finalCommandList };
		});
	});
	//console.log(finalCommandList)
	return finalCommandList;
};

const getArgListCd = fileList => {
	let defArgs = {
		_dir: {
			action: null,
			response: "",
		},
		default: {
			action: null,
			response: "cd: cannot access %arg%: Permission Denied",
		},
		"~": {
			action: null,
			response: "",
		},
	};
	let argList = {};
	fileList.forEach(item => {
		argList[item.name] = {
			action: item.folder ? { PATH: item.link } : null,
			response: item.folder ? "" : "zsh: cd: %arg%: Not a directory",
		};
	});
	Object.keys(defArgs).forEach(item => {
		argList[item] = defArgs[item];
	});
	return argList;
};

const getConstCommands = customCommands => {
	let finalCommandList = {};
	customCommands.forEach(item => {
		//eslint-disable-next-line
		let commandBuilder = {};
		item.name.forEach(elem => {
			let action = item.action ? { [item.name[0].toUpperCase()]: "" } : null;
			let resp = item.response;
			commandBuilder = {
				[elem]: {
					validArgs: {
						_dir: {
							action: action,
							response: resp,
						},
						default: {
							action: action,
							response: resp,
						},
					},
				},
			};
			if (item.subPathStrict[0]) {
				commandBuilder[elem].validArgs[item.subPathStrict[1].name] = {
					action: action,
					response: item.subPathStrict[1].response,
				};
			}
			finalCommandList = { ...commandBuilder, ...finalCommandList };
		});
	});
	//console.log(finalCommandList)
	
	return finalCommandList;
	
};


const commands = {
	ls: {
		validArgs: {
			"/": {
				action: null,
				response:
					"ls: cannot access System Volume Information: Permission Denied",
			},
			_dir: {
				action: null,
				response: compileResponseHTML(fileList),
			},
			default: {
				action: null,
				response: "ls: cannot access %arg%: Permission Denied",
			},
		},
	},
	cd: {
		validArgs: getArgListCd(fileList),
	},
	...getCommandList(commandList),
	...getConstCommands(customCommands),
};

export default commands;
