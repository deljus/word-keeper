import { useEffect } from 'react';

type BeforeUnloadCallback = (e: BeforeUnloadEvent) => void;

const useBeforeUnload = (fn: BeforeUnloadCallback): void => {
  useEffect(() => {
    window.addEventListener('beforeunload', fn);
    return () => {
      window.removeEventListener('beforeunload', fn);
    };
  }, []);
};

export default useBeforeUnload;
