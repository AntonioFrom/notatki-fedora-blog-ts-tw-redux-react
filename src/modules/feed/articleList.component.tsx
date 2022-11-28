import { FC } from 'react'
import { FeedArticle } from '../api/dto/globalFeed.in'

import Article from './article.component'


interface ArticleListProps {
  list: FeedArticle[],
  
}

export const ArticleList: FC<ArticleListProps> = ({ list }) => {
  return (
    <div>
      {list.map((article, index) => (
        <Article key={index} {...article} />
      )
      )}
     
    </div>
  )
}

