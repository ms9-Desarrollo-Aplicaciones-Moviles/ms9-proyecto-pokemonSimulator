import { AppContext } from "./AppContext";

export const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={{
            region: 'Kanto'
        }}>
            {children}
        </AppContext.Provider>
    );
}