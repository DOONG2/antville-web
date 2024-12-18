import { commentsLimit } from '../../variable'
import client from '../client'
import { getCommentsByIdResponse } from './types'

export default async function getCommentsById(id: string, cursor?: number) {
  const response = await client.get<getCommentsByIdResponse>(
    `/comment/${id}/first`,
    {
      params: {
        limit: commentsLimit,
        cursor,
      },
    }
  )

  return response.data
}
