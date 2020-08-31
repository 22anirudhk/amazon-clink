const notif = document.querySelector("div.notif");
const input = document.querySelector(".inp");
input.addEventListener("change", cleanLink);

const err = document.createElement("p");
err.innerHTML = "Error! Unable to clean link.";

const amznclean = document.createElement("a");

function cleanLink() {
  const amznurl = /https:\/\/[a-zA-Z0-9._%+-=&?/]*amazon.com[a-zA-Z0-9._%+-=&?/]*dp\/[a-zA-Z0-9._%+-=&?/]+/gm;
  const product = /(dp[/])(.{0,10})/gm;
  const inpstr = document.getElementById("inp").value;
  notif.innerHTML = "";

  if (!inpstr) return;

  if (!amznurl.test(inpstr)) notif.appendChild(err);
  else {
    const m = product.exec(inpstr);
    const clean = `https://www.amazon.com/dp/${m[2]}`;

    amznclean.setAttribute("href", clean);
    amznclean.innerHTML = clean;
    notif.appendChild(amznclean);
  }
}
