export const themeChanger = document.querySelector("#changeTheme");
export const themeIcon = themeChanger.querySelector("ion-icon");
export const userTheme = localStorage.getItem("theme");
export const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// initial theme check
export const themeCheck = () => {
	if (userTheme === "dark" || (!userTheme && systemTheme)) {
		document.documentElement.classList.add("dark");
		themeIcon.name = "sunny-outline";
		return;
	}
	themeIcon.name = "moon-outline";
};
// manual theme switch
export const themeSwitch = () => {
	if (document.documentElement.classList.contains("dark")) {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
		themeIcon.name = "moon-outline";
		return;
	}
	document.documentElement.classList.add("dark");
	localStorage.setItem("theme", "dark");
	themeIcon.name = "sunny-outline";
};
// call theme switch on clicking buttons
themeChanger.addEventListener("click", () => {
	themeSwitch();
});
// invoke theme checker
themeCheck();
//
