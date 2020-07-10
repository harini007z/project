var random = new Array("https://ikc1.app.link/x5Fb6m5heR", "https://ikc1.app.link/x5Fb6m5heR", "https://ikc1.app.link/x5Fb6m5heR", "https://ikc1.app.link/x5Fb6m5heR" );

// or

// Regular Array

var random = new Array();

random[0] = "https://ikc1.app.link/x5Fb6m5heR";
random[1] = "https://ikc1.app.link/x5Fb6m5heR";
random[2] = "https://ikc1.app.link/x5Fb6m5heR";
random[3] = "https://ikc1.app.link/x5Fb6m5heR";
random[4] = "https://ikc1.app.link/x5Fb6m5heR";

function randomlink() {
window.location = random[Math.floor(Math.random()*random.length)];
}