export const setLocalStorage = () => {
    let storage=[];
        global.localStorage = {
            getItem: (key) => storage[key],
            setItem: (key, value) => storage[key] = value,
            removeItem: (key) => delete storage[key]
        }
};
