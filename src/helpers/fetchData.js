const API_URL = 'https://random-data-api.com/api/v2/users?response_type=json'

export function fetchData () {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => { return data })
}
