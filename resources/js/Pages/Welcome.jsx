import { Link, Head } from '@inertiajs/react';

export default function Welcome(props) {
    return (
        <>
            <nav class="dark:bg-gray-900 text-gray-100  px-6 flex items-center justify-between">
                <div class="flex items-center justify-between w-full">
                    <h1 class="text-xl font-bold">Website Sekolah</h1>
                    <div className="top-0 right-0 px-6 py-4 sm:block ">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            {/* <button className="ml-4 text-sm text-gray-700 dark:text-gray-100 border border-gray-700 bg-gray-700 hover:border-gray-500 rounded px-3 py-2 ">
                                <a href={route('register')}>Register</a>
                            </button> */}
                            <button className="ml-4 text-sm text-gray-700 dark:text-gray-100 border border-gray-700 bg-gray-700 hover:border-gray-500 rounded px-2 py-1 ">
                                <a href={route('login')}>Log in</a>
                            </button>
                        </>
                    )}
                </div>
                </div>
                
            </nav>
            <div class="flex items-center h-screen bg-white">
                <div class="mx-auto text-center">
                    <img src={`storage/logoSekolah2.svg`} alt="Logo Sekolah" class="w-64 h-64 mb-5 m-auto"/>
                    <h1 class="text-2xl font-bold mb-5">Selamat Datang di Website Sekolah</h1>
                    <p class="text-gray-700">Kami sangat senang Anda berkunjung ke website resmi kami.</p>
                </div>
            </div>

        </>
    );
}

