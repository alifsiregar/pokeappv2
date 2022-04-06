export const reducer = (state, action) => {
    switch (action.type) {

        case "set_myPokemon":
            return { ...state, myPokemon: action.payload };

        case "set_pokemon":
            return { ...state, wildPokemon: action.payload };
        
        case "pokemon_caught":
            return { ...state, pokemonCaught: action.payload };

        default:
            return state;
    }
};

export const initialState = {
    myPokemon: [],
    wildPokemon: {},
    pokemonCaught: null,
};