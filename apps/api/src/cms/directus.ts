const API = "https://your-directus-url.com"

export const getArticlesFromDirectus = async () => {
  const res = await fetch(`${API}/items/articles`)
  const json = await res.json()

  return json.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    content: item.content,
    publishedAt: item.date_created,
  }))
}