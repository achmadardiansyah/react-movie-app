import { createContext, useState, useContext } from 'react'

const Context = createContext()

const StateProvider = ({children}) => {

    const [input, setInput] = useState('')

    return ( 
        <Context.Provider value={{input, setInput}}>
            {children}
        </Context.Provider>
     );
}
 
export default StateProvider;

export const useInputContext = ()=> useContext(Context)