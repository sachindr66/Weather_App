import { useEffect, useState } from 'react';

const UseDate = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); 
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year:"numeric" };
    return date.toLocaleDateString('en', options);
  };

  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return date.toLocaleTimeString('en', options);
  };

  return {
    date: formatDate(currentDateTime),
    time: formatTime(currentDateTime)
  };
};

export default UseDate;
