type LogoType = {
    appName: string;
    url: string;
    children?: React.ReactNode;
};


export function Logo(props: LogoType) {
    
    return (
        <a href={props.url} className="relative">
            <div dangerouslySetInnerHTML={{ __html: props.appName }} className="font-logo font-bold"></div>
            {props.children}
        </a>
    )
}
