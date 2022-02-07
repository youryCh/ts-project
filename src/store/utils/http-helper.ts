export abstract class HttpHelper {

    /**
     * Функция выполняет запрос и преобразует ответ в json.
     * 
     * @param input 
     * @param init 
     * @returns 
     */
    public static fetchAsJson<Response>(input: RequestInfo, init?: RequestInit): Promise<Response> {
        return fetch(input, init)
            .then((response) => response.text())
            .then<Response>((responseText) => JSON.parse(responseText));
    }
}
