import client from '../client'
import { Post } from '../types'

export default async function getPost(
  url: string,
  limit: string,
  cursor?: string
) {
  const response = await client.get<Post[]>(`/post/${url}`, {
    params: {
      limit,
      cursor,
    },
  })
  return response.data
}
