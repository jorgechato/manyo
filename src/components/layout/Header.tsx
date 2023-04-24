import { ThemeButton } from './ThemeButton';
import { Logo } from '@/src/components/logo/Logo';
import { HeaderType } from './Header.types';


export function Header(props: HeaderType = {title: ""}) {
    return (
        <header className="container mx-auto p-4 mt-4 mb-12 sm:mb-24 flex items-center text-sm">
            <Logo url="/" appName={props.title} />
            <ThemeButton />
        </header>
    )
}
