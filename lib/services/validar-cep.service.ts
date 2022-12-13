import {CepResponse, ValidarCepStructure} from "../structure/structure";
import {AxiosInstance} from "../util/axios/axios.instance";
import {Fail} from "../util/error/error";
import {Urls} from "../util/url/urls";


class ValidarCepService implements ValidarCepStructure{

    private readonly urlViaCep = Urls.VIA_CEP
    private readonly axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = new AxiosInstance(this.urlViaCep)
    }
    async consultarCep(cep: string): Promise<CepResponse> {
        try{
            const response = await this.axiosInstance.GET(`${this.urlViaCep}${cep}/json`)
            return response.data
        }catch (e) {
            throw new Fail('cep inválido')
        }
    }
}

export default new ValidarCepService()