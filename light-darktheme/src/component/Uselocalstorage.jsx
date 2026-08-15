import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        try {
            if (typeof window === 'undefined') {
                return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
            }

            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : (typeof defaultValue === 'function' ? defaultValue() : defaultValue);
        } catch (error) {
            console.error(error);
            return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
    });

    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
            console.error(error);
        }
    }, [key, value]);

    return [value, setValue];
}