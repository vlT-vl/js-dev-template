// main.js <> code
// neu js entrypoint
//------------------------------------------------------------------------------

// Inizializzazione di neu
Neutralino.init();
Neutralino.events.on("windowClose", onWindowClose);

// Import dei moduli necessari allo startup
import {htmlparse} from "./moduli/htmlparse.js";
import {varparse} from "./moduli/varparse.js";

// Load del primo HTML all'interno del DIV app
htmlparse('app', '/html/template.html')
.then(() => {
  varparse('list', `${NL_VERSION}`, 'neujs-ver')
  varparse('ver', `${NL_APPVERSION}`, 'app-ver')
  varparse('ver', `${NL_BUILD}`, 'app-build')
  varparse('copyright', `${NL_COPYRIGHT}`, 'copyright-var')
})

// Funzione per la chiusura della finestra
function onWindowClose() {
  Neutralino.app.exit();
}
