import { useEffect, useState } from 'react'
import getSubCommentById from '../api/comment/getSubCommentsById'
import { getCommentsByIdResponse } from '../api/comment/types'

export default function useSubCommentsById(id: number) {
  const [comment, setCommnet] = useState<getCommentsByIdResponse>()
  useEffect(() => {
    try {
      const getSubCommentsByIdApi = async () => {
        const result = await getSubCommentById(id)
        setCommnet(result)
      }
      getSubCommentsByIdApi()
    } catch (error) {
      console.log(error)
    }
  }, [id])

  return comment
}
