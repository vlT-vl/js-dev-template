// commandlist.js <> code
// modulo che restituisce la lista dei comandi
//******************************************************************************

// <editor-fold> Import del modulo
import chalk from 'chalk';
// </editor-fold>

// <editor-fold> Funzione del Modulo
export default function commandlist() {
  console.log("");
  console.log("utilizzo: node-cli <comando> <parametro>");
  console.log("");
  console.log(chalk.hex('#959595')("Sono disponibili i seguenti comandi:"));
  console.log("");
  console.log("   --help -->  mostra la lista completa dei comandi");
  console.log("");
  console.log("   --node -->  mostra la versione del runtime di nodejs");
  console.log("");
  console.log("       -v -->  mostra la versione e la build della cli");
}
// </editor-fold>
