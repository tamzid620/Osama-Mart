'use client';
import React, { useEffect } from 'react';
import SearchPanel from '../../components/shared/AdminShared/SearchPanel/SearchPanel';
import Sidebar from '../../components/shared/AdminShared/Sidebar/Sidebar';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const AdminPanelLayout = ({ children }) => {

    const router = useRouter();
    useEffect(() => {
        const adminData = localStorage.getItem('user');

        if (adminData) {
            const user = JSON.parse(adminData);
            if (user.id !== '007') {
                router.push('/dp');
            }
        } else {
            //  Toast message -----------------------------
            Swal.fire({
                position: "center",
                icon: "error",
                title: "You Must Login First",
                showConfirmButton: false,
                timer: 1500
            });
            router.push('/login');
        }

    }, [])

    return (
        <div className='flex'>
            <div>
                <Sidebar />
            </div>
            <div className='w-full'>
                <SearchPanel />
                {children}
            </div>
        </div>
    );
};

export default AdminPanelLayout;