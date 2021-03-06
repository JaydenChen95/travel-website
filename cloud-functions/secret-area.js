exports.handler = (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
  }

  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 200,
      headers,
      body: "This was not a POST request"
    })
  }

  const secretContent = `
    <h3>Congratulations!</h3>
    <p>You cracked the pass code!<p>
  `

  let body

  if (event.body) {
    body = JSON.parse(event.body)
  } else {
    body = {}
  }

  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      headers,
      body: secretContent
    })
  } else {
    callback(null, {
      statusCode: 401,
      headers
    })
  }
}
