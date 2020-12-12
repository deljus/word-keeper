interface DictionaryData {
    word: string;
    partsOfSpeech: string;
    description: string;
    selected: boolean;
}

interface State {
    loading: boolean,
    error: string | null,
    data: DictionaryData[],
    favorite: DictionaryData[],
}


const DEFAULT_STATE = {
    loading: false,
    error: null,
    data: [],
    favorite: [],
};


const dictionaryReducer = (state: State = DEFAULT_STATE, action) => {

};

export default dictionaryReducer;
