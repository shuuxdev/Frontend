import React, { SetStateAction, useEffect, useState } from 'react';



interface IGlobalContext {
    login: boolean,
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValue: IGlobalContext = {
    login: false,
    setLogin: function (value: SetStateAction<boolean>): void {
        throw new Error('Function not implemented.');
    }
}
export const GlobalContext = React.createContext(defaultValue);
const GlobalProvider: React.FC = ({ children }) => {

    useEffect(() => { console.log('global called') })
    const [login, setLogin] = useState(false);
    return (
        <GlobalContext.Provider value={{ login: login, setLogin: setLogin }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;