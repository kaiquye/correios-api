import {
    calcPrecoPrazoRequestStructure,
    calcPrecoPrazoResponseStructure,
    CorreiosApiStructure
} from "../structure/structure";
import {AxiosInstance} from "../util/axios/axios.instance";
import {parseString} from 'xml2js'
import {Fail} from "../util/error/error";
import {Urls} from "../util/url/urls";


 class CalPrazoPreco implements CorreiosApiStructure {

    private readonly urlCorreios = Urls.CORREIOS_API
    private readonly axiosInstance: AxiosInstance;

    constructor() {
     this.axiosInstance = new AxiosInstance(this.urlCorreios)
    }

     /**
      * @description this method calculates the price and term of the product informed to it. It uses the dimensions of the product as a basis for calculation.
      * @param data
      * @return {calcPrecoPrazoResponseStructure}
      */
   async calcPrecoPrazo(data: calcPrecoPrazoRequestStructure): Promise<calcPrecoPrazoResponseStructure | any> {
       // request for the post office api passing the parameters by url query
        const data_ = await this.axiosInstance.GET('/calculador/CalcPrecoPrazo.aspx?', {
            sCepOrigem: data.cepOrigem,
            sCepDestino: data.cepDestino,
            StrRetorno: 'xml',
            nCdServico: data.cdServico,
            nvlPeso: data.peso,
            nVLComprimento: data.comprimento,
            nVlAtura: data.altura,
            nVlLargura: data.largura
        })

       let result_ = undefined

        // converting xml responses to json using xml2js library
        await parseString(data_.data, async (err, result) => {
            if(err) {
                throw new Fail(err.message)
            }

            if(result.Servicos.cServico[0].MsgErro[0]) {
                throw new Fail(result.Servicos.cServico[0].MsgErro[0])
            }

            result_ =  {
                Codigo:  result.Servicos.cServico[0].Codigo[0],
                Valor:  result.Servicos.cServico[0].Valor[0],
                PrazoEntrega:  result.Servicos.cServico[0].PrazoEntrega[0],
                ValorSemAdicionais: result.Servicos.cServico[0].ValorSemAdicionais[0],
                ValorMaoPropria: result.Servicos.cServico[0].ValorMaoPropria[0],
                ValorAvisoRecebimento:  result.Servicos.cServico[0].ValorAvisoRecebimento[0],
                ValorValorDeclarado: result.Servicos.cServico[0].ValorValorDeclarado[0],
                EntregaDomiciliar: result.Servicos.cServico[0].EntregaDomiciliar[0],
                EntregaSabado: result.Servicos.cServico[0].EntregaSabado[0],
                obsFim: result.Servicos.cServico[0].obsFim[0],
                Erro: result.Servicos.cServico[0].Erro[0],
                MsgErro: result.Servicos.cServico[0].MsgErro[0],
            }
        })

       return result_
   }
}

export default new CalPrazoPreco()