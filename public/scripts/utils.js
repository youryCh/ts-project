import { Book } from './book.js';
import { genreMapping } from './constants.js';
/**
 * Возвращает переданный параметром объект в виде строки.
 *
 * @param {unknown} value - входной параметр, обычно типа object.
 * @returns {string} - сериализованный объект.
 */
export function serialize(value) {
    if (value === null || undefined) {
        return value + '';
    }
    if (value instanceof Book) {
        return `${value.name}, ${value.genre}, ${value.price}`;
    }
    return value.toString();
}
/**
 * Показывает рейтинг книги или автора в виде звездочек.
 *
 * @param {IRatingable} entity - рейтинг
 * @returns {string} - рейтинг в виде *
 */
export const showRating = (entity) => {
    if (entity.rating === null) {
        return 'not rated yet';
    }
    const roundedRating = Math.round(entity.rating);
    let rating = '';
    for (let i = 0; i < roundedRating; i++) {
        rating += ' * ';
    }
    return rating + ` (${entity.rating.toFixed(2)})`;
};
/**
 * Функция для отображения корзины продуктов.
 *
 * @param {IProduct} products - массив продуктов
 * @returns {void}
 */
export const showCart = (products) => {
    let totalPrice = 0;
    products.forEach((product) => {
        totalPrice += product.price;
        console.log(`${product.getProductDescription()} x ${product.price} rub. `);
    });
    console.log(`\nTotal items: ${products.length}, total cost: ${totalPrice}`);
};
/**
 * Функция для получения имени жинраю
 *
 * @param {Genre} genre - жанр из енама
 * @returns {string} - имя жанра в строковом виде
 */
export const getGenreName = (genre) => genreMapping[genre];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUUvQixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUM7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsU0FBUyxDQUFFLEtBQWM7SUFDdkMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLFNBQVMsRUFBRTtRQUMvQixPQUFPLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDbkI7SUFFRCxJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7UUFDekIsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDeEQ7SUFFRCxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQixDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxNQUFtQixFQUFFLEVBQUU7SUFDaEQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtRQUMxQixPQUFPLGVBQWUsQ0FBQztLQUN4QjtJQUVELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUVoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQUM7S0FDakI7SUFFRCxPQUFPLE1BQU0sR0FBRyxLQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDbkQsQ0FBQyxDQUFBO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxRQUFvQixFQUFFLEVBQUU7SUFDL0MsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUMzQixVQUFVLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDN0UsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixRQUFRLENBQUMsTUFBTSxpQkFBaUIsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUM5RSxDQUFDLENBQUE7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxDQUFDLEtBQVksRUFBVSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCb29rfSBmcm9tICcuL2Jvb2suanMnO1xyXG5pbXBvcnQge0lSYXRpbmdhYmxlLCBJUHJvZHVjdCwgR2VucmV9IGZyb20gJy4vbW9kZWxzLmpzJztcclxuaW1wb3J0IHtnZW5yZU1hcHBpbmd9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcclxuXHJcbi8qKlxyXG4gKiDQktC+0LfQstGA0LDRidCw0LXRgiDQv9C10YDQtdC00LDQvdC90YvQuSDQv9Cw0YDQsNC80LXRgtGA0L7QvCDQvtCx0YrQtdC60YIg0LIg0LLQuNC00LUg0YHRgtGA0L7QutC4LlxyXG4gKiBcclxuICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZSAtINCy0YXQvtC00L3QvtC5INC/0LDRgNCw0LzQtdGC0YAsINC+0LHRi9GH0L3QviDRgtC40L/QsCBvYmplY3QuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0g0YHQtdGA0LjQsNC70LjQt9C+0LLQsNC90L3Ri9C5INC+0LHRitC10LrRgi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUgKHZhbHVlOiB1bmtub3duKSB7XHJcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHZhbHVlICsgJyc7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBCb29rKSB7XHJcbiAgICByZXR1cm4gYCR7dmFsdWUubmFtZX0sICR7dmFsdWUuZ2VucmV9LCAke3ZhbHVlLnByaWNlfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqINCf0L7QutCw0LfRi9Cy0LDQtdGCINGA0LXQudGC0LjQvdCzINC60L3QuNCz0Lgg0LjQu9C4INCw0LLRgtC+0YDQsCDQsiDQstC40LTQtSDQt9Cy0LXQt9C00L7Rh9C10LouXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0lSYXRpbmdhYmxlfSBlbnRpdHkgLSDRgNC10LnRgtC40L3Qs1xyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtINGA0LXQudGC0LjQvdCzINCyINCy0LjQtNC1ICpcclxuICovXHJcbmV4cG9ydCBjb25zdCBzaG93UmF0aW5nID0gKGVudGl0eTogSVJhdGluZ2FibGUpID0+IHtcclxuICBpZiAoZW50aXR5LnJhdGluZyA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuICdub3QgcmF0ZWQgeWV0JztcclxuICB9XHJcblxyXG4gIGNvbnN0IHJvdW5kZWRSYXRpbmcgPSBNYXRoLnJvdW5kKGVudGl0eS5yYXRpbmcpO1xyXG5cclxuICBsZXQgcmF0aW5nID0gJyc7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm91bmRlZFJhdGluZzsgaSsrKSB7XHJcbiAgICByYXRpbmcgKz0gJyAqICc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmF0aW5nICsgYCAoJHtlbnRpdHkucmF0aW5nLnRvRml4ZWQoMil9KWA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQutC+0YDQt9C40L3RiyDQv9GA0L7QtNGD0LrRgtC+0LIuXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0lQcm9kdWN0fSBwcm9kdWN0cyAtINC80LDRgdGB0LjQsiDQv9GA0L7QtNGD0LrRgtC+0LJcclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2hvd0NhcnQgPSAocHJvZHVjdHM6IElQcm9kdWN0W10pID0+IHtcclxuICBsZXQgdG90YWxQcmljZSA9IDA7XHJcbiAgcHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xyXG4gICAgdG90YWxQcmljZSArPSBwcm9kdWN0LnByaWNlO1xyXG4gICAgY29uc29sZS5sb2coYCR7cHJvZHVjdC5nZXRQcm9kdWN0RGVzY3JpcHRpb24oKX0geCAke3Byb2R1Y3QucHJpY2V9IHJ1Yi4gYCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGBcXG5Ub3RhbCBpdGVtczogJHtwcm9kdWN0cy5sZW5ndGh9LCB0b3RhbCBjb3N0OiAke3RvdGFsUHJpY2V9YCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC40LzQtdC90Lgg0LbQuNC90YDQsNGOXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0dlbnJlfSBnZW5yZSAtINC20LDQvdGAINC40Lcg0LXQvdCw0LzQsFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtINC40LzRjyDQttCw0L3RgNCwINCyINGB0YLRgNC+0LrQvtCy0L7QvCDQstC40LTQtVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEdlbnJlTmFtZSA9IChnZW5yZTogR2VucmUpOiBzdHJpbmcgPT4gZ2VucmVNYXBwaW5nW2dlbnJlXTtcclxuIl19