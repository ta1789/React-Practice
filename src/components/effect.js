import React, { useEffect } from 'react';

function Logger() {
  useEffect(() => {
    console.log('Component has rendered.');
  });

  return <h2>Check the console for messages!</h2>;
}

export default Logger;