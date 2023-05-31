import { useState, useEffect } from "react";

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const checkNetworkStatus = () => setIsOnline(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", checkNetworkStatus);
    window.addEventListener("offline", checkNetworkStatus);
    return () => {
      window.removeEventListener("online", checkNetworkStatus);
      window.removeEventListener("offline", checkNetworkStatus);
    };
  }, [navigator.onLine]);

  return isOnline;
}

export default useIsOnline;
