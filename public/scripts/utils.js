import { Book } from './book.js';
import { genreMapping } from './constants.js';
/**
 * Находит книгу по жанру и количеству страниц
 *
 * @param {string} genre Жанр
 * @param {number} pageAmount Количество страниу
 * @returns {Book}
 */
// export function findSuitableBook (genre: Genre, pageAmount: number, multipleRecommendations = true): Book | Book[] | undefined {
//   const findAlgorithm = (book: Book) => book.genre === genre && book.price <= pageAmount;
// if (multipleRecommendations) {
//   return books.get(findAlgorithm);
// }
// return books.get(findAlgorithm());
// }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUcvQixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUM7Ozs7OztHQU1HO0FBQ0gsbUlBQW1JO0FBQ25JLDRGQUE0RjtBQUU1RixpQ0FBaUM7QUFDakMscUNBQXFDO0FBQ3JDLElBQUk7QUFFSixxQ0FBcUM7QUFDckMsSUFBSTtBQUVKOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBRSxLQUFjO0lBQ3ZDLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxTQUFTLEVBQUU7UUFDL0IsT0FBTyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ25CO0lBRUQsSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO1FBQ3pCLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3hEO0lBRUQsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsQ0FBQztBQUdEOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBbUIsRUFBRSxFQUFFO0lBQ2hELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7UUFDMUIsT0FBTyxlQUFlLENBQUM7S0FDeEI7SUFFRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVoRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFFaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDO0tBQ2pCO0lBRUQsT0FBTyxNQUFNLEdBQUcsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ25ELENBQUMsQ0FBQTtBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBb0IsRUFBRSxFQUFFO0lBQy9DLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNuQixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDM0IsVUFBVSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDO0lBQzdFLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsUUFBUSxDQUFDLE1BQU0saUJBQWlCLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDOUUsQ0FBQyxDQUFBO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFZLEVBQVUsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Qm9va30gZnJvbSAnLi9ib29rLmpzJztcclxuaW1wb3J0IHtwcm9ncmFtbWluZ0xpdGVyYXR1cmUgYXMgYm9va3N9IGZyb20gJy4vYm9vay1jb2xsZWN0aW9uLmpzJztcclxuaW1wb3J0IHtJUmF0aW5nYWJsZSwgSVByb2R1Y3QsIEdlbnJlfSBmcm9tICcuL21vZGVscy5qcyc7XHJcbmltcG9ydCB7Z2VucmVNYXBwaW5nfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcblxyXG4vKipcclxuICog0J3QsNGF0L7QtNC40YIg0LrQvdC40LPRgyDQv9C+INC20LDQvdGA0YMg0Lgg0LrQvtC70LjRh9C10YHRgtCy0YMg0YHRgtGA0LDQvdC40YZcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5yZSDQltCw0L3RgFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGFnZUFtb3VudCDQmtC+0LvQuNGH0LXRgdGC0LLQviDRgdGC0YDQsNC90LjRg1xyXG4gKiBAcmV0dXJucyB7Qm9va31cclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBmaW5kU3VpdGFibGVCb29rIChnZW5yZTogR2VucmUsIHBhZ2VBbW91bnQ6IG51bWJlciwgbXVsdGlwbGVSZWNvbW1lbmRhdGlvbnMgPSB0cnVlKTogQm9vayB8IEJvb2tbXSB8IHVuZGVmaW5lZCB7XHJcbi8vICAgY29uc3QgZmluZEFsZ29yaXRobSA9IChib29rOiBCb29rKSA9PiBib29rLmdlbnJlID09PSBnZW5yZSAmJiBib29rLnByaWNlIDw9IHBhZ2VBbW91bnQ7XHJcblxyXG4vLyBpZiAobXVsdGlwbGVSZWNvbW1lbmRhdGlvbnMpIHtcclxuLy8gICByZXR1cm4gYm9va3MuZ2V0KGZpbmRBbGdvcml0aG0pO1xyXG4vLyB9XHJcblxyXG4vLyByZXR1cm4gYm9va3MuZ2V0KGZpbmRBbGdvcml0aG0oKSk7XHJcbi8vIH1cclxuXHJcbi8qKlxyXG4gKiDQktC+0LfQstGA0LDRidCw0LXRgiDQv9C10YDQtdC00LDQvdC90YvQuSDQv9Cw0YDQsNC80LXRgtGA0L7QvCDQvtCx0YrQtdC60YIg0LIg0LLQuNC00LUg0YHRgtGA0L7QutC4LlxyXG4gKiBcclxuICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZSAtINCy0YXQvtC00L3QvtC5INC/0LDRgNCw0LzQtdGC0YAsINC+0LHRi9GH0L3QviDRgtC40L/QsCBvYmplY3QuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0g0YHQtdGA0LjQsNC70LjQt9C+0LLQsNC90L3Ri9C5INC+0LHRitC10LrRgi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUgKHZhbHVlOiB1bmtub3duKSB7XHJcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHZhbHVlICsgJyc7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBCb29rKSB7XHJcbiAgICByZXR1cm4gYCR7dmFsdWUubmFtZX0sICR7dmFsdWUuZ2VucmV9LCAke3ZhbHVlLnByaWNlfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiDQn9C+0LrQsNC30YvQstCw0LXRgiDRgNC10LnRgtC40L3QsyDQutC90LjQs9C4INC40LvQuCDQsNCy0YLQvtGA0LAg0LIg0LLQuNC00LUg0LfQstC10LfQtNC+0YfQtdC6LlxyXG4gKiBcclxuICogQHBhcmFtIHtJUmF0aW5nYWJsZX0gZW50aXR5IC0g0YDQtdC50YLQuNC90LNcclxuICogQHJldHVybnMge3N0cmluZ30gLSDRgNC10LnRgtC40L3QsyDQsiDQstC40LTQtSAqXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2hvd1JhdGluZyA9IChlbnRpdHk6IElSYXRpbmdhYmxlKSA9PiB7XHJcbiAgaWYgKGVudGl0eS5yYXRpbmcgPT09IG51bGwpIHtcclxuICAgIHJldHVybiAnbm90IHJhdGVkIHlldCc7XHJcbiAgfVxyXG5cclxuICBjb25zdCByb3VuZGVkUmF0aW5nID0gTWF0aC5yb3VuZChlbnRpdHkucmF0aW5nKTtcclxuXHJcbiAgbGV0IHJhdGluZyA9ICcnO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdW5kZWRSYXRpbmc7IGkrKykge1xyXG4gICAgcmF0aW5nICs9ICcgKiAnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJhdGluZyArIGAgKCR7ZW50aXR5LnJhdGluZy50b0ZpeGVkKDIpfSlgO1xyXG59XHJcblxyXG4vKipcclxuICog0KTRg9C90LrRhtC40Y8g0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LrQvtGA0LfQuNC90Ysg0L/RgNC+0LTRg9C60YLQvtCyLlxyXG4gKiBcclxuICogQHBhcmFtIHtJUHJvZHVjdH0gcHJvZHVjdHMgLSDQvNCw0YHRgdC40LIg0L/RgNC+0LTRg9C60YLQvtCyXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNob3dDYXJ0ID0gKHByb2R1Y3RzOiBJUHJvZHVjdFtdKSA9PiB7XHJcbiAgbGV0IHRvdGFsUHJpY2UgPSAwO1xyXG4gIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuICAgIHRvdGFsUHJpY2UgKz0gcHJvZHVjdC5wcmljZTtcclxuICAgIGNvbnNvbGUubG9nKGAke3Byb2R1Y3QuZ2V0UHJvZHVjdERlc2NyaXB0aW9uKCl9IHggJHtwcm9kdWN0LnByaWNlfSBydWIuIGApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhgXFxuVG90YWwgaXRlbXM6ICR7cHJvZHVjdHMubGVuZ3RofSwgdG90YWwgY29zdDogJHt0b3RhbFByaWNlfWApO1xyXG59XHJcblxyXG4vKipcclxuICog0KTRg9C90LrRhtC40Y8g0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQuNC80LXQvdC4INC20LjQvdGA0LDRjlxyXG4gKiBcclxuICogQHBhcmFtIHtHZW5yZX0gZ2VucmUgLSDQttCw0L3RgCDQuNC3INC10L3QsNC80LBcclxuICogQHJldHVybnMge3N0cmluZ30gLSDQuNC80Y8g0LbQsNC90YDQsCDQsiDRgdGC0YDQvtC60L7QstC+0Lwg0LLQuNC00LVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHZW5yZU5hbWUgPSAoZ2VucmU6IEdlbnJlKTogc3RyaW5nID0+IGdlbnJlTWFwcGluZ1tnZW5yZV07XHJcbiJdfQ==