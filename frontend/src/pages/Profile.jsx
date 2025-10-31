import React, { useEffect, useState } from 'react';
import API from '../utils/api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    API.get(`/auth/user/${userId}`).then(res => setUser(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>User Profile</h2>
      {user ? (
        <div className="card p-3">
          <p><strong>Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default Profile;