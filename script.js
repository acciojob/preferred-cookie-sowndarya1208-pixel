const fontsizeInput = document.getElementById("fontsize");
const fontcolorInput = document.getElementById("fontcolor");
const form = document.querySelector("form");

/* Helper function to set cookie */
function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

/* Helper function to get cookie */
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

/* Apply saved preferences on page load */
const savedFontSize = getCookie("fontsize");
const savedFontColor = getCookie("fontcolor");

if (savedFontSize) {
  document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
  fontsizeInput.value = savedFontSize;
}

if (savedFontColor) {
  document.documentElement.style.setProperty("--fontcolor", savedFontColor);
  fontcolorInput.value = savedFontColor;
}

/* Save preferences on form submit */
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const fontSize = fontsizeInput.value;
  const fontColor = fontcolorInput.value;

  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);
});
