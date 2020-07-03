exports.handler = (event, context, callback) => {
  const secretContent = `
    <h3>Welcome To The Secret Area</h3>
    <p><strong>Blah</strong> blah<p>
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
      body: secretContent
    })
  } else {
    callback(null, {
      statusCode: 401
    })
  }
}
