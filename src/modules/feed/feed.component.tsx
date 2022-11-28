import { FC, useState } from 'react'
import Container from '../../common/components/container.component'
import { useGetGlobalFeedQuery } from '../api/repository'
import { ArticleList } from './articleList.component'
import { FeedToggle } from './feedToggle.component'
import ReactPaginate from 'react-paginate';
import { FEED_PAGE_SIZE } from '../consts';
import { useSearchParams } from 'react-router-dom'
import { serializeSearchParams } from '../../utils/router'

interface FeedProps {

}

export const Feed: FC<FeedProps> = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(
        searchParams.get('page') ? Number(searchParams.get('page')) : 0
    )

    const handlePageChange = ({selected}: {selected: number}) => {
        setPage(selected)
        setSearchParams(serializeSearchParams({page: String(selected)}))

    }
    const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({page})

    if (isLoading || isFetching) {
        <Container>
            feed loading...
        </Container>
    }
    if (error) {
        <Container>
            Error while loading feed
        </Container>
    }

    return (
        <Container>
            <FeedToggle />
            <div className=' flex '>
                <div className='w-3/4 '>

                    <ArticleList list={data?.articles || []} />
                    <ReactPaginate pageCount={data?.articlesCount || 0 / FEED_PAGE_SIZE} previousLabel={null} nextLabel={null}
                        forcePage={page}
                        onPageChange={handlePageChange}    
                        containerClassName="flex my-10"
                        pageRangeDisplayed={ FEED_PAGE_SIZE}
                        pageClassName='group'
                        pageLinkClassName='px-3 py-2 relative border text-green-900 border-green-900 -ml-px  hover:bg-black/20 
                         group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r'
                        activeClassName='active group'
                        activeLinkClassName=" group-[.active]:bg-green-900 group-[.active]:text-white" />
                </div>
                <div className=' w-1/4' > tags</div>
            </div>

        </Container>
    )
}
