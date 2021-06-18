import { postLimit } from '../../lib/variable'
import client from '../client'
import { Post } from '../types'

export default async function getPostsByUrl(url: string, cursor?: string) {
  const response = await client.get<Post[]>(`/post/${url}`, {
    params: {
      limit: postLimit,
      cursor,
    },
  })
  return response.data
}
