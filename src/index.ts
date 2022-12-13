import calcularPrecoPrazo from './services/preco-prazo.service'
import viaCep from './services/validar-cep.service'
import calcularTamanho from "./services/calcular-tamanho.service";

calcularPrecoPrazo.calcPrecoPrazo('' as any)

export  {
     calcularPrecoPrazo,
     viaCep,
     calcularTamanho
}