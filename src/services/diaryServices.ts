import { DiaryEntry } from '../types';
import diaryData from './diaries.json'; // para soportar este tipo de archivos se pone a true
// resolveJsonModule en tsconfig.json y elimina el error
// si no especifica el archivo diaries como .ts ó .json, el sistema busca...
//... ".tsx", ".ts", ".node", ".js", ".json"

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = (): DiaryEntry[] => diaries; // para recuperar las entries

export const addEntry = () => (): undefined => undefined //null;   // para añadir una entrie