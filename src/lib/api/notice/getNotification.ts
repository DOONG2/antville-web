import client from '../client'
import { NoticeObject } from './types'

export default async function getNotification(cursor?: number) {
  const response = await client.get<NoticeObject[]>('/notification', {
    params: {
      limit: 10,
      cursor,
    },
  })
  return response.data
}
