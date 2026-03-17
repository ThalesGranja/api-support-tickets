export async function jsonHandler(request, response) {
  const buffers = []

  for await (const chunk of request) {
    buffers.push(chunk)
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {

  }

  response.setHeader("Content-Type", "application/json")

}