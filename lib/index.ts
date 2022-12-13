import {CalPrazoPreco} from './services/preco-prazo.service'
import {ValidarCepService} from './services/validar-cep.service'
import {CalcularTamanhoService} from "./services/calcular-tamanho.service";

const calcularPrazoPreco = new CalPrazoPreco()
const validarCep = new ValidarCepService()
const calcularDimensoes = new CalcularTamanhoService()

export {
    calcularPrazoPreco,
    validarCep,
    calcularDimensoes
}