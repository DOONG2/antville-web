import { subCommentsLimit } from '../../lib/variable'
import client from '../client'
import { getCommentsByIdResponse } from './types'

export default async function getSubCommentsById(id: number, cursor?: string) {
  const response = await client.get<getCommentsByIdResponse>(
    `/comment/${id}/second`,
    {
      params: {
        limit: subCommentsLimit,
        cursor,
      },
    }
  )

  return response.data
}