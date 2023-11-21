'use client';
import Search from './search/search'
import {useRouter} from "next/navigation";
import {Redirect} from "@/components/route/route";

const Header = () => {
    const router = useRouter()
    return (
        <header className="p-4 flex justify-between items-center">
            <div className="logo site-title flex-shrink-0">
                <Redirect href={'/'}>
                    {'Lumgoo!'}
                    {/* Example: <img src="/path-to-logo.png" alt="Logo" className="h-8 w-auto" /> */}
                </Redirect>
            </div>
            <Search />
            <nav className="flex-shrink-0 text-white">
                <button
                    className="mx-2 p-2 rounded hover:bg-gray-700"
                    onClick={() => router.push('/act')}
                >
                    Act
                </button>
                <button
                    className="mx-2 p-2 rounded hover:bg-gray-700"
                    onClick={() => router.push('/user/sign-in')}
                >
                    Sign in
                </button>
            </nav>
        </header>
    );
}

export default Header;
