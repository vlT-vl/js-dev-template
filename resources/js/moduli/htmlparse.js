// htmlparse.js <> Code
// Javascript Expansion Module
// Copyright © 2022 vlT - vl.TECH di Veronesi Lorenzo
//******************************************************************************
// Modulo js con funzione di base per il caricamento dinamico di file HTML
// all'interno di div dedicati recuperati tramite ID (ElementById)
//
// la funzione javascript per caricare dinamicamente file HTML all'interno
// dei DIV è:
// > es. htmlparse(divID, fileHTML)
//       .then(() => {})
//******************************************************************************

// <editor-fold> Funzione del Modulo
export async function htmlparse(divID, fileHTML) {
  let divELMNT = document.getElementById(divID)
  const response = await fetch(fileHTML);
  divELMNT.innerHTML = await response.text();
}
// </editor-fold>
