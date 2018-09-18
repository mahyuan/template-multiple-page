import qs from 'qs';

let query = {};
if(typeof window !== 'undefined') {
  let search = location.search || '';
  if(search) search = search.substr(1);
  query = qs.parse(search);
}

module.exports = query;
