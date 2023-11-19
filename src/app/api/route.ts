export async function GET(request: Request, context: { params: { s: string } }) {
  const { s } = context.params
  const url = `https://api.github.com/search/repositories?q=${s}&sort=stars&order=desc`
  const response = await fetch(url)
  const json = await response.json()
  return {
    body: json,
    headers: {
      'content-type': 'application/json',
    },
  }
}
