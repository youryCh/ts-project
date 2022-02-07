export declare abstract class HttpHelper {
    /**
     * Функция выполняет запрос и преобразует ответ в json.
     *
     * @param input
     * @param init
     * @returns
     */
    static fetchAsJson<Response>(input: RequestInfo, init?: RequestInit): Promise<Response>;
}
