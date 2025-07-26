const keyboardLayout = [
	// Row 1
	[
		{ key: "Escape", label: "Esc" },
		{ key: "F1", label: "F1" },
		{ key: "F2", label: "F2" },
		{ key: "F3", label: "F3" },
		{ key: "F4", label: "F4" },
		{ key: "F5", label: "F5" },
		{ key: "F6", label: "F6" },
		{ key: "F7", label: "F7" },
		{ key: "F8", label: "F8" },
		{ key: "F9", label: "F9" },
		{ key: "F10", label: "F10" },
		{ key: "F11", label: "F11" },
		{ key: "F12", label: "F12" },
		{ key: "ScrollLock", label: "ScrollLock", colSpan: 2 },
		{ key: "Pause", label: "Pause" },
	],
	// Row 2
	[
		{ key: "`", label: "`" },
		{ key: "1", label: "1" },
		{ key: "2", label: "2" },
		{ key: "3", label: "3" },
		{ key: "4", label: "4" },
		{ key: "5", label: "5" },
		{ key: "6", label: "6" },
		{ key: "7", label: "7" },
		{ key: "8", label: "8" },
		{ key: "9", label: "9" },
		{ key: "0", label: "0" },
		{ key: "-", label: "-" },
		{ key: "=", label: "=" },
		{ key: "Backspace", label: "Backspace", colSpan: 3 },
	],
	// Row 3
	[
		{ key: "Tap", label: "Tap", colSpan: 2 },
		{ key: "q", label: "q" },
		{ key: "w", label: "w" },
		{ key: "e", label: "e" },
		{ key: "r", label: "r" },
		{ key: "t", label: "t" },
		{ key: "y", label: "y" },
		{ key: "u", label: "u" },
		{ key: "i", label: "i" },
		{ key: "o", label: "o" },
		{ key: "p", label: "p" },
		{ key: "[", label: "[" },
		{ key: "]", label: "]" },
		{ key: "\\", label: "\\", colSpan: 2 },
	],
	// Row 4
	[
		{ key: "CapsLock", label: "CapsLock", colSpan: 2 },
		{ key: "a", label: "a" },
		{ key: "s", label: "s" },
		{ key: "d", label: "d" },
		{ key: "f", label: "f" },
		{ key: "g", label: "g" },
		{ key: "h", label: "h" },
		{ key: "j", label: "j" },
		{ key: "k", label: "k" },
		{ key: "l", label: "l" },
		{ key: ";", label: ";" },
		{ key: "'", label: "'" },
		{ key: "Enter", label: "Enter", colSpan: 3 },
	],
	// Row 5
	[
		{ key: "Shift", label: "Shift", colSpan: 2 },
		{ key: "z", label: "z" },
		{ key: "x", label: "x" },
		{ key: "c", label: "c" },
		{ key: "v", label: "v" },
		{ key: "b", label: "b" },
		{ key: "n", label: "n" },
		{ key: "m", label: "m" },
		{ key: ",", label: "," },
		{ key: ".", label: "." },
		{ key: "/", label: "/" },
		{ key: "Shift", label: "Shift", colSpan: 2 },
		{ key: "ArrowUp", label: `<ion-icon name="arrow-up-outline"></ion-icon>` },
		{ key: "ArrowUp", label: `<ion-icon name="arrow-up-outline"></ion-icon>`, hidden: true },
	],
	// Row 6
	[
		{ key: "Control", label: "Ctrl" },
		{ key: "Meta", label: "Meta" },
		{ key: "Alt", label: "Alt" },
		{ key: " ", label: "space", colSpan: 6 },
		{ key: "Alt", label: "Alt" },
		{ key: "Alt", label: "fn" },
		{ key: "ContextMenu", label: "CM" },
		{ key: "Control", label: "Ctrl" },
		{ key: "ArrowLeft", label: `<ion-icon name="arrow-back-outline"></ion-icon>` },
		{ key: "ArrowDown", label: `<ion-icon name="arrow-down-outline"></ion-icon>` },
		{ key: "ArrowRight", label: `<ion-icon name="arrow-forward-outline"></ion-icon>` },
	],
];

function keyBoardLayoutGenerator() {
	const keyboard = document.createElement("div");
	keyboard.id = "keyboard";
	keyboard.className =
		"cr backdrop-blur-3xl fixed w-full right-[50%] border border-white/20 rounded-md p-4 translate-y-full opacity-0 grid grid-rows-6 grid-cols-16 gap-2 font-en font-thin text-white/60 select-none hidden";
	keyboard.innerHTML = `<div class="keyboard-inner grid grid-rows-6 grid-cols-16 gap-2 font-en font-thin text-white/60 select-none"></div>`;

	keyboardLayout.forEach((objects) => {
		objects.forEach((prop) => {
			const button = document.createElement("button");
			button.className = `select-none uppercase cursor-pointer shadow-[2px_5px_10px_#121212] border border-white/20 border-r-transparent border-b-transparent bg-stone-950 p-2 rounded-md duration-100 active:border-t-transparent active:border-l-transparent active:border-r-white/20 active:border-b-white/20 active:shadow-none`;
			button.dataset.key = prop.key;
			button.innerHTML = prop.label;
			button.className += ` ${prop.colSpan ? `col-span-${prop.colSpan}` : ""}`;
			button.className += ` ${prop.hidden ? `opacity-0` : ""}`;

			keyboard.querySelector(".keyboard-inner").append(button);
		});
	});

	document.getElementById("app").append(keyboard);
}

keyBoardLayoutGenerator();
