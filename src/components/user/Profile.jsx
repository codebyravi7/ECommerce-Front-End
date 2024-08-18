import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';

const Profile = () => {
  const {user} = useContext(AppContext)
  return (
    <div className="bg-slate-200 content-wrapper  h-full min-w-screen max-w-screen min-h-screen p-2 text-black">
      <div className="name text-center text-xl font-bold">
        <h1>Welcome {user?.name}</h1>
        <h1>Welcome {user?.email}</h1>
      </div>
    </div>
  );
}

export default Profile