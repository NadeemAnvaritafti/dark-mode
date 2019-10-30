import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = () => {
    const [mode, setMode] = useLocalStorage('darkmode', false);

    useEffect( ()=>{
        const body = document.querySelector('body');

        mode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    
    }, [mode])

    return [mode, setMode];
}