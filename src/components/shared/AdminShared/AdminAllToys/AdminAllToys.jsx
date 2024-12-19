import React from 'react';
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";

const kanit = Kanit({
  weight: ["400", "700"],
  style: ["normal"],
});
const mulish = Mulish({
  weight: ["300", "700"],
  style: ["normal"],
});

{` ${kanit.className} `}
{` ${mulish.className} `}

const AdminAllToys = () => {
    return (
        <div>
            
        </div>
    );
};

export default AdminAllToys;