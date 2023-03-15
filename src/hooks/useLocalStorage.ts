import {
  Dispatch, SetStateAction, useCallback, useEffect, useState,
} from "react";
import { isBrowser } from "@/utils/helpers";
import { useEventListener } from "./useEventListener";

type SetValue<T> = Dispatch<SetStateAction<T>>

export function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = useCallback((): T => {
    // Prevent build error "window is undefined" but keeps working
    if (!isBrowser()) return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue: SetValue<T> = useCallback((value: T | SetStateAction<T>) => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === "undefined") {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`,
      );
    }

    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(storedValue) : value;

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue));

      // Save state
      setStoredValue(newValue);

      // We dispatch a custom event so every useLocalStorage hook are notified
      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  }, [storedValue]);

  useEffect(() => {
    setStoredValue(readValue());
  }, []);

  const handleStorageChange = useCallback(
    (event: any) => {
      if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue],
  );

  // this only works for other documents, not the current one
  useEventListener("storage", handleStorageChange);

  return [storedValue, setValue];
}
