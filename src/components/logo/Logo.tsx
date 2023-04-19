import "../fonts/font.css";
import Link from 'next/link';

import { LogoType } from './Logo.types';


export function Logo(props: LogoType) {
    
    return (
        <Link href={props.url} className="relative">
            <div dangerouslySetInnerHTML={{ __html: props.appName }} className="font-logo font-bold"></div>
            {props.children}
        </Link>
    )
}