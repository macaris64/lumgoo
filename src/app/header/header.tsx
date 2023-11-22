'use client';
import Search from '../search/search'
import {Redirect} from "@/components/route/route";
import withGlobalState from "@/app/withGlobalState";
import {useRouter} from "next/navigation";
import {userStore} from "@/store/user";

import {observer} from "mobx-react";
import logout from "@/components/logout/logout";
import {useEffect, useState} from "react";

const Header = observer(() => {
    const [isClient, setIsClient] = useState(false);
    const isLoggedIn = isClient && userStore.isLoggedIn();
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleLogout = () => {
        logout();
    }

    if (!isClient) {
        return null;
    }

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
                {isLoggedIn && (
                    <button
                        className="mx-2 p-2 rounded hover:bg-gray-700"
                        onClick={() => router.push('/act')}
                    >
                        Act
                    </button>
                )}
                {!isLoggedIn && (
                    <button
                        className="mx-2 p-2 rounded hover:bg-gray-700"
                        onClick={() => router.push('/user/sign-in')}
                    >
                        Sign in
                    </button>
                )}
                {isLoggedIn && (
                    <button
                        className="mx-2 p-2 rounded hover:bg-gray-700"
                        onClick={() => router.push('/user/profile')}
                    >
                        Profile
                    </button>
                )}
                {isLoggedIn && (
                    <button
                        className="mx-2 p-2 rounded hover:bg-gray-700"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                )}
            </nav>
        </header>
    );
});

export default withGlobalState(Header);
