import { useEffect, useState } from 'react';

const useDebounce = (fn, delay) => {
    const [debouncedValue, setDebouncedValue] = useState();
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(fn());
      }, delay);
  
      return () => {
        clearTimeout(handler);
      };
    }, [fn, delay]);
  
    return debouncedValue;
  };
export default useDebounce