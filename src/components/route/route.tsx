import {observer} from "mobx-react";
import Link from 'next/link'

interface RouteProps {
    href: string;
    children?: React.ReactNode;
}

export const Redirect = observer(({href, children}: RouteProps) => {
    return (
        <div>
            <Link href={href} legacyBehavior>{children}</Link>
        </div>
    )
});
