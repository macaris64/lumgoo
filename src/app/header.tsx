'use client';
import Link from 'next/link'
import SearchComponent from './searchComponent'
import {useRouter} from "next/navigation";

const Header = () => {
    const router = useRouter()
    return (
        <header className="bg-amber-800 p-4 flex justify-between items-center">
            <div className="logo text-white flex-shrink-0">
                <Link href="/">
                    {'Lumgoo!'}
                    {/* Example: <img src="/path-to-logo.png" alt="Logo" className="h-8 w-auto" /> */}
                </Link>
            </div>
            <SearchComponent />
            <nav className="flex-shrink-0 text-white">
                <button
                    className="mx-2 p-2 rounded hover:bg-gray-700"
                    onClick={() => router.push('/act')}
                >
                    Act
                </button>
                <button
                    className="mx-2 p-2 rounded hover:bg-gray-700"
                    onClick={() => router.push('/sign-in')}
                >
                    Sign in
                </button>
            </nav>
        </header>
    );
}

export default Header;
