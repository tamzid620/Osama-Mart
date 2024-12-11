import SearchPanel from '@/components/shared/AdminShared/SearchPanel/SearchPanel';
import Sidebar from '@/components/shared/AdminShared/Sidebar/Sidebar';
import React from 'react';

const AdminPanelLayout = ({ children }) => {
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