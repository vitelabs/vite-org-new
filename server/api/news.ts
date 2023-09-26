export default defineEventHandler(async (event) => {
  setHeaders(event, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  const response = await fetch('https://static.vite.net//testnet-vite-1257137467/discover/discover_en.json');
  const body = await response.text();
  return body;
})
