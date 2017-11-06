export function fetchPaintings() {
  return fetch(
    'https://www.rijksmuseum.nl/api/en/collection/?key=9jq8N0tK&format=json&ps=100'
  ).then(res => res.json());
}
