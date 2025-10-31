import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h1>Welcome, {user?.fullName || 'User'}!</h1>
      <p>This is a protected dashboard page.</p>
    </div>
  );
};

export default Dashboard;
