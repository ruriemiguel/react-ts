import Tema from '../models/Tema'

interface Postagem {
    id: number;
    titulo: string;
    text: string;
    tema?: Tema | null;
}

export default Postagem;