import Link from 'next/link'

import { FooterType } from './Footer.types';
import { Social, SiteMap } from '../types/Config.types';


export function Footer(props: FooterType = {siteMapConfig: [], socialConfig: [], author: "Jorge Chato"}) {
    const socials = props.socialConfig.map((social: Social) => (
        <li key={social.name}>
            <a target="_blank" href={social.url} rel="noopener noreferrer" className="text-grey-darkest">
                {social.name}
            </a>
        </li>
    ));

    const siteMap = props.siteMapConfig.map((endpoint: SiteMap) => (
        <li key={endpoint.name} className="text-grey-darkest">
            <Link href={endpoint.url}>
                {endpoint.name}
            </Link>
        </li>
    ));
    const year = new Date().getFullYear();

    return (
        <>
            <footer className="container font-display text-grey-darkest mx-auto px-4 text-xs mt-24 mb-12 tracking-wide text-center">
                <nav className="w-full mb-4">
                    <ul className="flex justify-center tracking-wide space-x-4 mb-2">
                        {siteMap}
                    </ul>
                    <ul className="flex justify-center tracking-wide space-x-4">
                        {socials}
                    </ul>
                </nav>
                <p>©{year} {props.author}</p>
            </footer>
        </>
    )
}
