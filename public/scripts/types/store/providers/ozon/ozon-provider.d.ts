import { Book } from '../../domain/book';
import { IProvider } from '../../domain/provider';
import { ISearchFilter } from '../../domain/search-filter';
export declare class OzonProvider implements IProvider {
    static provider: string;
    private static apiUrl;
    find(filter: ISearchFilter): Promise<Book[]>;
    getById(id: string): Promise<Book>;
    private assertIsValidResponse;
    private convertFilterToQueryString;
    private convertBookListResponse;
    private convertBookResponse;
    private mapGenre;
}
