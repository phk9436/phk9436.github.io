import React, { useMemo } from "react"
import styled from "@emotion/styled"
import PostItem from "./PostItem"
import { PostListItemType } from "types/PostItem.types"
import useInfiniteScroll, {
  useInfiniteScrollType,
} from "hooks/useInfiniteScroll"

interface PostListProps {
  selectedCategory: string
  posts: PostListItemType[]
}

function PostList({ selectedCategory, posts }: PostListProps) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts
  )
  console.log(containerRef)
  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.naver.com" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`
