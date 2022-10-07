import React, {ReactNode} from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export interface CategoryListProps {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

interface GatsbyLinkProps {
  children: ReactNode;
  className?: string;
  to: string;
  active: boolean;
}


function CategoryList({ selectedCategory, categoryList }: CategoryListProps) {
  console.log(Object.entries(categoryList), categoryList)
  return (
    <CategoryListWrapper>
      <ul>
        {Object.entries(categoryList).map(([name, count]) => (
          <li key={name}>
            <CategoryItem
              to={`/?category=${name}`}
              active={name === selectedCategory}
            >
              {name}({count})
            </CategoryItem>
          </li>
        ))}
      </ul>
    </CategoryListWrapper>
  )
}

export default CategoryList

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
`

const CategoryItem = styled(({ active, ...props }:GatsbyLinkProps) => <Link {...props} />)`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? "800" : "400")};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`
