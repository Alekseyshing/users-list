import { useEffect, useState } from "react";


export const usePersistedState = (key: string, defaultValue: boolean) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key) as string)
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}