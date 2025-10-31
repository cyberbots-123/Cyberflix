// import React from 'react';

// const NotFound = () => {
//   return (
//     <div className="text-center my-5">
//       <h1>404 - Page Not Found</h1>
//       <p>The page you’re looking for does not exist.</p>
//       <a href="/" className="btn btn-primary mt-3">Go to Home</a>
//     </div>
//   );
// };

// export default NotFound;



import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="text-center my-5">
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">The page you’re looking for doesn’t exist.</p>
      <p>Redirecting to the homepage in <strong>5 seconds...</strong></p>
      <a href="/" className="btn btn-primary mt-3">Go to Home Now</a>
    </div>
  );
};

export default NotFound;
