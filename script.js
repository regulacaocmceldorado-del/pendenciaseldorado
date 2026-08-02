// ===================================
// FUNÇÃO: URL CSV (Google Sheets gviz) - SEM CACHE BUSTING
// ===================================
function gvizCsvUrl(sheetId, gid) {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&gid=${gid}`;
}

// ===================================
// CONFIGURAÇÃO DA PLANILHA (DUAS ABAS)
// ===================================
const SHEET_ID = '1_74uHFBFFZOM9klydEEEgCahFI3rVeQDXjZxgGsioTo';

const SHEETS = [
  {
    name: 'PENDÊNCIAS ELDORADO',
    url: gvizCsvUrl(SHEET_ID, '0'),
    distrito: 'ELDORADO',
    tipo: 'PENDENTE'
  },
  {
    name: 'RESOLVIDOS ELDORADO',
    url: gvizCsvUrl(SHEET_ID, '781262891'),
    distrito: 'ELDORADO',
    tipo: 'RESOLVIDO'
  }
];
