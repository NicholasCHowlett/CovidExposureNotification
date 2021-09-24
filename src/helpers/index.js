// helpers/index.js

async function getSites() {
  const limit = '5'; // max. of 32,000-
  var url = 'https://discover.data.vic.gov.au/api/3/action/datastore_search?resource_id=afb52611-6061-4a2b-9110-74c920bede77&limit=';
  url = url.concat(limit);
  var exposureSites = new Request(url);
  var response = await fetch(exposureSites);
  var json = await response.json();
  let results = json['result']['records'];
  return results;
}
export {getSites};