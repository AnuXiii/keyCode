import Toastify from "toastify-js";

import "./keyBoard";
const keyboard = document.getElementById("keyboard");

import "./darkMode";
const numbers = document.querySelectorAll(".number");
const keyboardButton = document.querySelector("#keyboard-btn");
const header = document.querySelector("#header");
const hero = document.querySelector("#hero");
const eventInfo = document.querySelector("#eventInfo");
const eventCode = document.querySelector("#eventCode");
const eventKeyCode = document.querySelector("#eventKeyCode");
const eventLocation = document.querySelector("#eventLocation");
const eventKey = document.querySelector("#eventKey");
const codeBoxes = document.querySelectorAll(".code-box");

function callTostify(msg, bgColor) {
	Toastify({
		text: msg,
		duration: 3000,
		gravity: "top",
		position: "center",
		style: {
			background: bgColor,
			borderRadius: "6px",
			boxShadow: "none",
		},
	}).showToast();
}

window.addEventListener("load", () => {
	detectDevice();
});

function detectDevice() {
	if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		document.body.innerHTML = `
        <h1 class="text-center flex items-center justify-center h-screen text-3xl font-en font-bold p-4">Please exit and rerun this application on your pc devices</h1>`;
	} else if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
		document.body.innerHTML = `
        <h1 class="text-center flex items-center justify-center h-screen text-3xl font-en font-bold p-4">Please exit and rerun this application on your pc devices</h1>`;
	} else {
		keyboardButton.addEventListener("click", () => {
			keyboard.classList.add("key-on");
			header.classList.add("-translate-y-full");
			hero.classList.replace("pt-48", "pt-8");
			callTostify("Press ESC to exit", "#ffffff3d");
		});

		document.addEventListener("keydown", (e) => {
			eventInfo.textContent = e.which;
			eventCode.textContent = e.code;
			eventKeyCode.textContent = e.keyCode;
			eventLocation.textContent = e.location;
			eventKey.textContent = e.key;

			e.key === " " ? (eventKey.textContent = "Space Character") : false;
			e.preventDefault();

			if (e.key === "Escape") {
				keyboard.classList.remove("key-on");
				header.classList.remove("-translate-y-full");
				hero.classList.add("pt-48");
			}

			codeBoxes.forEach((item, index) => {
				item.style.transitionDelay = `${index}00ms`;
				item.classList.toggle("opacity-50");
				setTimeout(() => {
					item.classList.toggle("opacity-50");
				}, 450);
			});

			let att = document.querySelector(`[data-key="${e.key}"]`);
			if (att) {
				att.classList.add("bg-violet-500");

				setTimeout(() => {
					att.classList.remove("bg-violet-500");
				}, 100);
			}
		});

		codeBoxes.forEach((item) => {
			item.addEventListener("click", () => {
				let text = item.lastElementChild.textContent.trim();
				navigator.clipboard.writeText(text);
				callTostify("!کپی شد", "#7D66D9");
			});
		});

		function generateRandomNumber() {
			return Math.floor(Math.random() * 1234567890125);
		}

		function getRandomIndexes(arrayLength, count) {
			const indexes = new Set();
			while (indexes.size < count) {
				indexes.add(Math.floor(Math.random() * arrayLength));
			}
			return [...indexes];
		}

		function updateNumbers() {
			const randomNumber = String(generateRandomNumber()).split("");

			numbers.forEach((item, index) => {
				item.innerHTML = "";
				const span = document.createElement("span");
				span.textContent = randomNumber[index] ? randomNumber[index] : "0";
				item.appendChild(span);
				item.classList.remove("scale");
			});

			const randomIndexes = getRandomIndexes(numbers.length, 3);
			randomIndexes.forEach((i) => numbers[i].classList.add("scale"));
		}

		updateNumbers();
		setInterval(updateNumbers, 1000);
	}
}
