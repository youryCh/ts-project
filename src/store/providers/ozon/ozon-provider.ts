import {Book} from '../../domain/book';
import {Author} from '../../domain/author';
import {IProvider} from '../../domain/provider';
import {ISearchFilter} from '../../domain/search-filter';
import {HttpHelper} from '../../utils/http-helper';
import {IBookListResponse, IBookResponse} from './response';
import {Genre} from '../../domain/genre';

export class OzonProvider implements IProvider {
    public static provider = 'ozon';
    private static apiUrl = 'https://fake-api.ozon.ru/v1';

    public find (filter: ISearchFilter): Promise<Book[]> {
        return HttpHelper.fetchAsJson<IBookListResponse>(`${OzonProvider.apiUrl}/book?${this.convertFilterToQueryString(filter)}`)
            .then((response) =>{
                this.assertIsValidResponse(response);

                return this.convertBookListResponse(response);
            });
    }

    public getById (id: string): Promise<Book> {
        return HttpHelper.fetchAsJson<IBookResponse>(`${OzonProvider.apiUrl}/book/${id}`)
            .then((response) => {
                this.assertIsValidResponse(response);

                return this.convertBookResponse(response.item);
            });
    }

    private assertIsValidResponse (response: IBookListResponse | IBookResponse): void {
        if (response.errorMessage) {
            throw new Error(response.errorMessage);
        }
    }

    private convertFilterToQueryString (filter: ISearchFilter): string {
        return `search=${filter.name}&author=${filter.author.firstName} ${filter.author.lastName}`;
    }

    private convertBookListResponse (response: IBookListResponse): Book[] {
        return response.items.map((item) => this.convertBookResponse(item));
    }

    private convertBookResponse (item): Book {
        return new Book(
            OzonProvider.provider,
            String(item.id),
            item.title,
            this.mapGenre(item.genre),
            item.description,
            item.pageCount,
            item.price,
            new Author(
                item.author[0].name,
                item.author[0].surname
            )
        );
    }

    private mapGenre (genre: string): Genre {
        switch (genre) {
        case 'HORRORS': return Genre.Horror;
        case 'FICTIONS': return Genre.Fantasy;
        case 'COMEDIES': return Genre.Comedy;
        case 'DRAMAS': return Genre.Drama;
        default: Genre.Unknown;
        }
    }
}
