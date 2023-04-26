import { format } from 'date-fns'

import { ArticleTypes } from './Article.types';
import { GetArticlesMetadata } from './FetchData';
import { Tags } from './Tags';


type ArticleListProps = {
    limit?: number,
    tag?: string,
    folder?: string,
}

export function ArticleList(props: ArticleListProps) {
    const articlesMetadata: ArticleTypes[] = GetArticlesMetadata(props.tag, props.limit);

    const articlesPreview = articlesMetadata.map((article) => {
        const date = format(new Date(article.date), 'dd LLL yyyy');

        return (
            <li key={article.slug} className="group">
                <a href={`/${article.slug}`}>
                    <span className="font-bold decoration-[3px]
                    group-hover:decoration-accent group-hover:underline-offset-4
                    transition-all duration-200
                    underline decoration-grey-light underline-offset-1">
                        {article.title}
                    </span>
                    <time dateTime="2019-08-31T00:00:00Z" className="text-grey-darkest text-sm md:ml-2 w-full md:w-24 inline-block">
                        {date}
                    </time>
                    <p>
                        <Tags tags={article.tags} hover={false} />
                    </p>
                </a>
            </li>
        )
    });

    return (
        <>
            <ul className="space-y-4 md:space-y-0">
                {articlesPreview}
            </ul>
        </>
    );
}
