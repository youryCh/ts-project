import {Book} from './book';
import {ISearchFilter} from './search-filter';

export interface IProvider {
    find (filter: ISearchFilter): Promise<Book[]>;
    getById (id: string): Promise<Book>;
}
