import React from 'react'
import { useParams } from 'react-router-dom'
import MainTemplate from '../../components/main/MainTemPlate'
import usePostById from './hooks/usePostById'
import FeedDetailPage from './FeedDetailPage'
import usePageView from '../../components/common/hooks/usePageView'

export default function FeedPage() {
  const { id } = useParams<{ id: string }>()
  const post = usePostById(id)
  usePageView('피드상세')

  if (!post) return <></>

  return (
    <MainTemplate children={<FeedDetailPage id={Number(id)} post={post} />} />
  )
}
