#!/usr/bin/env node
// cli.js <> code
//******************************************************************************

// <editor-fold> Import del modulo
import chalk from 'chalk';
import webcheck from './moduli/webcheck.js';
const argv = process.argv;
const cliName = 'node-cli'
const securityToken = 'cli03478js830nod3'
const cliCommand = argv[2];
// </editor-fold>

// <editor-fold> Import dei moduli dei comandi
import cmdlist from './cli/commandlist.js';
// </editor-fold>

// <editor-fold> cli output base
function cliOut() {
  console.log(chalk.whiteBright(`${cliName} template`))
  console.log(chalk.hex('#aba9a9')(`ver: VER build: BUILD`))
  console.log(chalk.hex('#aba9a9')(`COPYRIGHT`))
}
// </editor-fold>

// <editor-fold> cli output info comandi
function helpOut() {
  console.log("");
  console.log(">> usa l'argomento " + chalk.hex('#98d066')(`'--help'`) + " per visualizzare una lista completa dei comandi");
}
// </editor-fold>

// <editor-fold> cli Command Interpreter
webcheck()
  .then((webConnected) => {
    if (webConnected) {
      if (securityToken == securityToken) {
        switch (cliCommand) {
          case undefined:
            cliOut()
            helpOut()
            break;
          case "--help":
            cliOut()
            cmdlist()
            break;
          case "--node":
            console.log("");
            console.log(`${cliName} running on nodejs: ` + chalk.hex('#c3c258')(`${process.version}`))
            console.log("");
            console.log(`node executable path: ` + chalk.hex('#c2c2b1')(`${argv[0]}`))
            break;
          case "-v":
            console.log(chalk.hex('#aba9a9')(`ver: VER build: BUILD`))
            break;
          default:
            console.log(`${cliName} ` + chalk.hex('#cd1414')("ERROR") + " comando '" + chalk.hex('#9166d0')(`${cliCommand}`) + "' non riconosciuto.")
            helpOut()
        }
      } else {
        console.log(`${cliName} ` + chalk.hex('#cd1414')("ERROR") + ` computer non abilitato ad eseguire ${cliName}: ` + chalk.hex('#9166d0')(`securitytoken`) + " non abilitato.")
        console.log("");
        console.log(`>> per maggiori dettagli contattata l'amministratore di ${cliName} all'indirizzo email: ` + chalk.hex('#a4a7fc')("veronesilorenzo@outlook.com"));
      }
    } else {
      console.log("");
      console.log(chalk.hex('#e2f50a')(`ATTENZIONE: `) + (chalk.hex('#d7fcb6')(`CONNESSIONE DI RETE ASSENTE`)))
      console.log(chalk.hex('#d4d4d4')(`${cliName} richiede una connessione di rete stabile per il corretto funzionamento,`));
      console.log(chalk.hex('#d4d4d4')("verifica la tua connessione di rete e riprova."));
    }
  });
// </editor-fold>
