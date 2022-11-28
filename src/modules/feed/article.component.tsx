import { FC } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../common/components/container.component'
import { FeedArticle } from '../api/dto/globalFeed.in'
import { FavoriteButton } from './favoriteButton.component'
import { TagList } from './tagList.component'
import { DateTime } from "luxon"

interface ArticleProps extends FeedArticle { }

const Article: FC<ArticleProps> = ({ author, createdAt, favoritesCount, title, description, tagList }) => {


    return (
        <Container>

            <article>
                <div className=' border-t border-black/10 py-6 flex justify-between mt-2'>
                    <div className=' mb-4 font-light flex'>
                        <Link to={`/@${author.username}`}>
                            <img src={author.image}
                                alt={`${author.username} avatar`}
                                className='inline-block h-8 w-8 rounded-full mr-3' />
                        </Link>
                        <div className=' inline-flex flex-col mr-6 ml-[0.3rem] leading-4 '>
                            <Link to={`/@${author.username}`} className=' font-medium'>
                                {author.username}
                            </Link>
                            <span className=' text-gray-400 text-sm'>{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATETIME_FULL)}</span>
                        </div>
                    </div>
                    <FavoriteButton count={favoritesCount} />
                </div>
                <Link to="/article/qwert" className=' hover:no-underline'>
                    <h1 className=' mb-1 font-semibold text-2xl text-gray-900'>
                        {title}
                    </h1>
                </Link>
                <p className=' text-gray-800 font-light mb-1'>
                    {description}
                </p>
                <div className=' flex justify-between'>
                    <span className=' text-gray-700 font-light'>
                        Read more...
                    </span>
                </div>
                <TagList list={tagList} />
            </article>
        </Container>
    )
}

export default Article