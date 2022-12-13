import {CepResponse, ValidarCepStructure} from "../structure";
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
            // queries whether the zip code sent is fake or not, if not, it returns an execution
            const response = await this.axiosInstance.GET(`${this.urlViaCep}${cep}/json`)
            return response.data
        }catch (e) {
            throw new Fail('cep inválido')
        }
    }
}

export default new ValidarCepService()