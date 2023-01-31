import { useEffect } from 'react';

function useOutsideClick(ref, callback) {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback?.();
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
}

export default useOutsideClick;
