import axios from 'axios';

class Api {
    static async getCepInfo(cep) {
        const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/ `);
        
        console.log(response);
    }
}

Api.getCepInfo('13870222');