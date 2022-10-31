import diaryData from './diaries.json' // para soportar este tipo de archivos se pone a true
                                       // resolveJsonModule en tsconfig.json y elimina el error

export const getEntries = () => diaryData // para recuperar las entries

export const addEntry = () => null   // para añadir una entrie