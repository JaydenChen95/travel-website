exports.handler = (event, context, callback) => {
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
      body: secretContent
    })
  } else {
    callback(null, {
      statusCode: 401
    })
  }
}
