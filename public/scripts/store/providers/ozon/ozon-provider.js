import { Book } from '../../domain/book';
import { Author } from '../../domain/author';
import { HttpHelper } from '../../utils/http-helper';
import { Genre } from '../../domain/genre';
export class OzonProvider {
    find(filter) {
        return HttpHelper.fetchAsJson(`${OzonProvider.apiUrl}/book?${this.convertFilterToQueryString(filter)}`)
            .then((response) => {
            this.assertIsValidResponse(response);
            return this.convertBookListResponse(response);
        });
    }
    getById(id) {
        return HttpHelper.fetchAsJson(`${OzonProvider.apiUrl}/book/${id}`)
            .then((response) => {
            this.assertIsValidResponse(response);
            return this.convertBookResponse(response.item);
        });
    }
    assertIsValidResponse(response) {
        if (response.errorMessage) {
            throw new Error(response.errorMessage);
        }
    }
    convertFilterToQueryString(filter) {
        var _a, _b;
        return `search=${filter.name}&author=${(_a = filter === null || filter === void 0 ? void 0 : filter.author) === null || _a === void 0 ? void 0 : _a.firstName} ${(_b = filter === null || filter === void 0 ? void 0 : filter.author) === null || _b === void 0 ? void 0 : _b.lastName}`;
    }
    convertBookListResponse(response) {
        return response.items.map((item) => this.convertBookResponse(item));
    }
    convertBookResponse(item) {
        return new Book(OzonProvider.provider, String(item.id), item.title, this.mapGenre(item.genre), item.description, item.pageCount, item.price, new Author(item.author[0].name, item.author[0].surname));
    }
    mapGenre(genre) {
        switch (genre) {
            case 'HORRORS': return Genre.Horror;
            case 'FICTIONS': return Genre.Fantasy;
            case 'COMEDIES': return Genre.Comedy;
            case 'DRAMAS': return Genre.Drama;
            default: return Genre.Unknown;
        }
    }
}
OzonProvider.provider = 'ozon';
OzonProvider.apiUrl = 'https://fake-api.ozon.ru/v1';
