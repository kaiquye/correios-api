export enum FormatoStructure {
    'caixa/pacote' = 1,
    'rolo/prisma' = 2,
    'envelope' = 3
}

/**
 * @description Parametros de entrada
 */
export interface calcPrecoPrazoRequestStructure {
    /**
     * @description cdEmpresa: o codigo está disponível no corpo do contrato firmado com os Correios
     */
    cdEmpresa?: string;
    /**
     * @description senha: associada ao seu codigo administrativo. A senha inicial corresponde aos 8
     * primeiros digitos do CPNJ informado no contrato.
     */

    /**
     * @description
     */
    cdServico: [] | string;
    dsSenha?: string;
    /**
     * @description cep origem: CEP de origem sem hifen: Exemplo: 30850100
     */
    cepOrigem: string;
    /**
     * @description CEP de destino: sem hifen
     */
    cepDestino: string;
    /**
     * @description peso: Peso da encomenda, incluido sua embalagem. O peso deve ser informado
     * em quilogramas. Se o formato for Envelope, o valor máximo permitido sera 1kg
     */
    peso: string
    /**
     * @description formato: formato da encomenda ( incluindo embalagem ).
     * @param Aceitos: caixa rolo envelope
     */
    formato: FormatoStructure;
    /**
     * @description Comprimento da encomenda ( incluindo embalagem ) em CENTIMETROS.
     */
    comprimento: number
    /**
     * @description altura: Altura da encomenda ( incluindo embalagem ), em CENTIMETROS. Se o formato for
     * envelope, informar zero (0)
     */
    altura: number
    /**
     * @description largura: Largura da encomenda ( incluindo embalagem ),  em CENTIMETROS.
     */
    largura: number
    /**
     * @description Indica se a encomenda será entregue com o serviço adicional mâo própria.
     */
    maoProria: 'S' | 'N'
    /**
     * @description Valor declarado: Indica se a encomenda será entregue com o serviço adicional valor declarado. Valor em Reais.
     */
    valorDeclarado: number
    /**
     * @description aviso recebimento: Indica se a encomenda será entregue com o serviço adicional aviso de recebimento.
     */
    avisoRecebimento: 'S' | 'N'
}


export interface calcPrecoPrazoResponseStructure {
    /**
     * @description Código: codigo de serviço de entrega
     */
    codigo: string
    /**
     * @description preço total da encomenda, em Reais, incluindo os preços dos serviços opcionais.
     */
    valor: string
    /**
     * @description prazo estimado em dias para entrega do produto.
     */
    prazoEntrega?: string
    /**
     * @description preço do serviço adicional Mão própia
     */
    valorMaoPropria?: string
    /**
     * @description preço do serviço adicional aviso de recebimento
     */
    valorAvisoRecebimento?: string
    /**
     * @description preço do serviço adicional valor declarado
     */
    valorDeclarado?: string
    /**
     * @description informa se a localidade informada possui entrega domiciliar.
     */
    entregaDomiciliar?: string
    /**
     * @description informa se a localidade informada possui entrega
     */
    entregaSabado?: string
    /**
     * @description informa se a localidade informada possui entrega domiciliaria aos sábados.
     */
    erro?: string
    msgErro?: string
}

export interface CalcDimensoes {
    comprimento: number;
    largura: number;
    altura: number;

}


export interface CorreiosApiStructure {
     calcPrecoPrazo(data: calcPrecoPrazoRequestStructure): Promise<calcPrecoPrazoResponseStructure>
}

export interface CepResponse {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}
export interface ValidarCepStructure {
    consultarCep(cep: string): Promise<CepResponse>
}

export interface CalcularTamanhoRequest {
    comprimento: number;
    largura: number;
    altura: number;

    peso: number
}

export interface CalcularTamanhoResponse {
    comprimento: number;
    largura: number;
    altura: number;

    peso: number
}
export interface CalcularTamanhoStructure {
    calcularTamanho(produtos: CalcularTamanhoRequest[]): CalcularTamanhoRequest
}