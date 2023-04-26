import Link from 'next/link';


type TagsProps = {
    tags: string[],
    hover: boolean,
}

export function Tags(props: TagsProps) {
    return (
        <>
            {
                props.tags.map((tag) => {
                    return (
                        <span key={tag} className={`bg-grey-lightest text-grey-darkest text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full cursor-pointer
                            ${props.hover && 'hover:bg-grey-light'} transition-all duration-200`}>
                            {props.hover &&
                                <Link href={`/tag/${tag}`}>
                                    <samp className='text-grey-dark'>#</samp>{tag}
                                </Link> ||
                                <>
                                    <samp className='text-grey-dark'>#</samp>{tag}
                                </>
                            }
                        </span>
                    )
                })
            }
        </>
    )
}