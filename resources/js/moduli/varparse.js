// varparse.js <> Code
// Javascript Expansion Module
// Copyright © 2022 vlT - vl.TECH di Veronesi Lorenzo
//******************************************************************************
// Modulo js con funzione di base per il caricamento dinamico di variabili
// all'interno di markup HTML (byClassName) viene sostituita la stringa '{var}'
// con la variabile indicata.
//
// la funzione javascript per caricare dinamicamente le variabili all'interno
// del markup HTML è:
// > es. varparse(divClass, variable, id)
//       .then(() => {})
//******************************************************************************

// <editor-fold> Funzione del Modulo
export async function varparse(divClass, variable, id) {
  return new Promise(function(resolve) {
    let htmlELMNT = document.getElementsByClassName(divClass);
    htmlELMNT = htmlELMNT[0]
    let varAttribute = htmlELMNT.getAttribute(id);
    if (varAttribute == null) {
      htmlELMNT.setAttribute(id, variable);
      htmlELMNT.innerHTML = htmlELMNT.innerHTML.replace('{var}', variable)
    } else {
      htmlELMNT.innerHTML = htmlELMNT.innerHTML.replace(varAttribute, variable)
      htmlELMNT.setAttribute(id, variable);
    }
    resolve();
  });
}
// </editor-fold>
