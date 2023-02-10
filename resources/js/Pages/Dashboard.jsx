import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    const Card = ({title, desc}) => {
        return (
            <a href="#" class="block max-w-sm p-6 bg-white border mr-[2rem] border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
                </a>
        )
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className='flex flex-wrap '>
                    
            <Card title="Total Kelas" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam voluptatibus molestias neque, nulla sunt numquam quod cumque repellendus qui at?"/>
            <Card title="Jumlah Siswa" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam voluptatibus molestias neque, nulla sunt numquam quod cumque repellendus qui at?"/>
            <Card title="Total Uang" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam voluptatibus molestias neque, nulla sunt numquam quod cumque repellendus qui at?"/>
            </div>


        </AuthenticatedLayout>
    );
}
