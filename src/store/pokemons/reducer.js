export const reducer = (state, action) => {
    switch (action.type) {

        case "set_pokemons":
            return { ...state, pokemons: [...action.payload] };

        case "set_myPokemons":
            return { ...state, isLoading: [...action.payload] };

        default:
            return state;
    }
};

export const initialState = {
    pokemons: [],
    myPokemons: [],
};