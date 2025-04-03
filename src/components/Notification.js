import React from 'react';

const Notification = ({ message }) => {
  return (
    <div className="notification show">
      {message}
    </div>
  );
};

export default Notification;