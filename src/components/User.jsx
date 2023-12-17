import React from 'react';
import Btn from "./Btn";

const User = ({email, first_name, last_name, avatar, id, invitedHandler, isInvited}) => {
    return (

        <li className='flex justify-between items-center py-2 px-4 border-2 border-white rounded-2xl hover:bg-amber-50 transition 0.3s mb-2'>
            <div className='flex'>
                <img className="w-[50px] h-[50px] rounded-3xl"
                     src={avatar} alt="User"
                />
                <div className='flex flex-col  ml-9'>
                    <h3>{first_name + last_name}</h3>
                    <p className='opacity-60 text-sm'>{email}</p>
                </div>
            </div>

            <Btn
                color={isInvited ? 'bg-red-500' : 'bg-green-500'}
                onClick={() => invitedHandler(id)}
                text={isInvited ? 'Rem' : 'Inv'}
            />
        </li>
    );
};

export default User;