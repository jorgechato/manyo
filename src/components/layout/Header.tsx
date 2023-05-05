import { ThemeButton } from './ThemeButton';
import { Logo } from '../logo/Logo';


type HeaderType = {
    title: string;
    className?: string;
};


export function Header(props: HeaderType = {title: ""}) {
    return (
        <header className={`text-center container mx-auto p-4 mt-4 mb-12 sm:mb-24 flex items-center text-sm ${props.className}`}>
            <Logo url="/" appName={props.title} />
            <ThemeButton />
        </header>
    )
}
