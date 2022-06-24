// jsonparse.js <> Code
// Javascript Expansion Module
// Copyright © 2022 vlT - vl.TECH di Veronesi Lorenzo
//******************************************************************************
// Modulo js per il load di file json da path esterni, anche HTTP
//
// la funzione per caricare une file JSON in una variabile è:
//         > es. jsonparse("../package.json")
//                  .then((jsonData) => {VARIABILE = jsonData})
//******************************************************************************

// <editor-fold> Funzione del Modulo
export async function jsonparse(filePath) {
  return new Promise(async function(resolve) {
    let jsonData
    const response = await fetch(filePath);
    jsonData = JSON.parse(await response.text());
    resolve(jsonData)
  });
}
// </editor-fold>
