export const saveState = (state) => {
    try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem("noteAppState", serializedState);
    }
    catch (error){
        console.error('Error saving state to localStorage: ', error);
    }
}

export const getState = () => {
    try{
        const serializedState = localStorage.getItem("noteAppState");
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (error){
        console.log("Error getting state from localStorage: ", error);
        return undefined;
    }
}