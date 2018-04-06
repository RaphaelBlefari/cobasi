import { Produto } from './produto-model';

class Pedido {
    constructor(
        public id: string,
        public usuarioId: number,
        public produtoId: number,
        public enderecoId: number,
        public Valor: number,
        public produto: Produto
    ) { }

}

export { Pedido };


