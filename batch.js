const fetch = require('node-fetch')
const {stringify} = JSON

async function batch(data, method = 'POST') {
  const endpoint = 'https://heapanalytics.com/api/'

  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    const res = await fetch(endpoint, {
      headers,
      method,
      body: stringify(data),
    })
  } catch (err) {
    throw new Error(
      `Batch Import Failed while trying to post your data: ${err.message}`,
    )
  }

  const body = await res.json()

  return body
}

module.exports = batch
