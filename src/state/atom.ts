import { atom } from "jotai";
import { loadable, atomWithStorage } from "jotai/utils";


export const countAtom = atomWithStorage('count',0);

//derived-atom (which simply depend on another atom)
// getter method 
export const doubleCountAtom = atom((get) => get(countAtom) * 2)

const fetchUser = atom (async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok){
        throw new Error('failed to fetch user detail')
    };

    const data = await response.json();
    return data;
})

export const userAtom =  loadable(fetchUser);