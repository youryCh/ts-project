export class HttpHelper {
    /**
     * Функция выполняет запрос и преобразует ответ в json.
     *
     * @param input
     * @param init
     * @returns
     */
    static fetchAsJson(input, init) {
        return fetch(input, init)
            .then((response) => response.text())
            .then((responseText) => JSON.parse(responseText));
    }
}
