import mount from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

const DashboardApp = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      // Your logic here
      mount(ref.current);
    }
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;