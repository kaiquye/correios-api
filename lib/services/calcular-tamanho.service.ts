import {CalcularTamanhoRequest, CalcularTamanhoStructure} from "../structure";
import {Fail} from "../util/error/error";

export class CalcularTamanhoService implements CalcularTamanhoStructure {

    /**
     * @description this method calculates the dimensions of the products based on cm³ and takes the square root of the final value.
     * These server values as a parameter cannot be taken seriously
     * @param produtos
     */
    calcularTamanho(produtos: CalcularTamanhoRequest[]): CalcularTamanhoRequest {
        let cm3 = 0
        let peso = 0

        for(let produto of produtos) {
            if(produto.altura < 2 ) throw new Fail('a altura não pode ser menor do que 2 cm.')
            if(produto.comprimento < 16) throw new Fail('o comprimento não pode ser menor do que 16 cm.')
            if(produto.largura < 11) throw new Fail('a largura não pode ser menor do que 11 cm.')

            cm3 += produto.comprimento * produto.altura * produto.largura
            peso += produto.peso
        }

        const sqrt = Math.sqrt(cm3)
        const tamanho = Number(sqrt.toFixed(1))

        return {
            altura: tamanho < 2 ? 2 : tamanho,
            comprimento: tamanho < 16 ? 16 : tamanho,
            largura: tamanho < 11 ? 11 : tamanho,
            peso
        }
    }
}

export default new CalcularTamanhoService()