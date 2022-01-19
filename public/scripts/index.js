// import {Book} from './book.js';
// import {BookAuthor, Genre, IAuthor, IOptionalAuthor} from './models.js';
// import {BookCollection, ProductCollection} from './book-collection.js';
// import {Collection} from './collection.js';
// import {Notepad} from './notepad.js';
// import {getBookInfo} from './google-books.js';
// const harryPotterIsbn = '9781408845646';
// new Collection<Book, number>();
// new Collection<Book, number>();
// new Collection<Book, symbol>();
// new Collection<Book>();
// const jkRowling: BookAuthor = {
//   firstName: 'J. K.',
//   lastName: 'Rowling',
//   // rating: 4.6,
// };
// const harryPotter = new Book('Harry Potter', Genre.fantasy, 500, jkRowling);
// const superNotepad = new Notepad('Super text', 44);
// const cart = new ProductCollection();
// cart.set(harryPotter.name, harryPotter);
// cart.set(superNotepad.name, superNotepad);
// const favoriteBooksShelf = new BookCollection();
// favoriteBooksShelf.set(harryPotter.name, harryPotter);
// const getSummary = (collection: Collection<unknown>): string => {
//   if (collection instanceof BookCollection) {
//     return `Total ${cart.size} books on the shelf`;
//   }
//   if (collection instanceof ProductCollection) {
//     return `Total ${cart.price} for ${cart.size} items`;
//   }
//   return 'No special summary for this kind of collection';
// };  
// console.log(getSummary(cart));
// console.log(getSummary(favoriteBooksShelf));
// getBookInfo(harryPotterIsbn)
//   .then((book) => {
//     console.log(
//       book.volumeInfo.title,
//       book.volumeInfo.description,
//       book.volumeInfo.authors[0]
//     );
//   })
//   .catch((error) => console.error(error));
// const optionalAuthor: IOptionalAuthor = {
//   rating: 5,
//   booksWritten: 11,
// };
// const fullAuthor: Required<IOptionalAuthor> = {
//   firstName: '',
//   lastName: '',
//   birthDate: new Date(),
//   booksWritten: 1,
//   rating: 2,
// };
// const author: BookAuthor = {
//   firstName: 'J.K.',
//   lastName: 'Rowling',
// };
// const book = new Book('Harry Potter', Genre.fantasy, 100, author);
// console.log(book);
// const authorWithoutRating: Omit<IAuthor, 'rating'> = {
//   firstName: 'first name',
//   lastName: 'last name',
//   birthDate: new Date(),
//   booksWritten: 100500,
// };
// const newAuthor: Partial<IAuthor> = {};
// const anotherAuther: Readonly<IAuthor> = {
//   firstName: '',
//   lastName: '',
//   birthDate: new Date(),
//   booksWritten: 12,
//   rating: 1,
// };
// import {upperCase} from './stringHelper.js';
// console.log(upperCase('bla-bla-bla'));
// const max = Math.max(1, 2);
import { search, lookup } from 'google-books-search';
const searchCallback = () => {
    search('harry potter and the sorcerer\'s stone', (error, results) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(results[0]);
        }
    });
};
search('harry potter and the sorcerer\'s stone', {
    type: 'magazines',
}, (error, results) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Search results for magazines: ', results);
    }
});
lookup('some book', (error, result) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Lookup by ID result: ', result);
    }
});
searchCallback();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDLDJFQUEyRTtBQUMzRSwwRUFBMEU7QUFDMUUsOENBQThDO0FBQzlDLHdDQUF3QztBQUN4QyxpREFBaUQ7QUFFakQsMkNBQTJDO0FBRTNDLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLDBCQUEwQjtBQUUxQixrQ0FBa0M7QUFDbEMsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QixvQkFBb0I7QUFDcEIsS0FBSztBQUVMLCtFQUErRTtBQUUvRSxzREFBc0Q7QUFFdEQsd0NBQXdDO0FBQ3hDLDJDQUEyQztBQUMzQyw2Q0FBNkM7QUFFN0MsbURBQW1EO0FBQ25ELHlEQUF5RDtBQUV6RCxvRUFBb0U7QUFDcEUsZ0RBQWdEO0FBQ2hELHNEQUFzRDtBQUN0RCxNQUFNO0FBRU4sbURBQW1EO0FBQ25ELDJEQUEyRDtBQUMzRCxNQUFNO0FBRU4sNkRBQTZEO0FBQzdELE9BQU87QUFFUCxpQ0FBaUM7QUFDakMsK0NBQStDO0FBRS9DLCtCQUErQjtBQUMvQixzQkFBc0I7QUFDdEIsbUJBQW1CO0FBQ25CLCtCQUErQjtBQUMvQixxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DLFNBQVM7QUFDVCxPQUFPO0FBQ1AsNkNBQTZDO0FBRTdDLDRDQUE0QztBQUM1QyxlQUFlO0FBQ2Ysc0JBQXNCO0FBQ3RCLEtBQUs7QUFFTCxrREFBa0Q7QUFDbEQsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQiwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZixLQUFLO0FBRUwsK0JBQStCO0FBQy9CLHVCQUF1QjtBQUN2Qix5QkFBeUI7QUFDekIsS0FBSztBQUVMLHFFQUFxRTtBQUVyRSxxQkFBcUI7QUFFckIseURBQXlEO0FBQ3pELDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0IsMkJBQTJCO0FBQzNCLDBCQUEwQjtBQUMxQixLQUFLO0FBRUwsMENBQTBDO0FBRTFDLDZDQUE2QztBQUM3QyxtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLDJCQUEyQjtBQUMzQixzQkFBc0I7QUFDdEIsZUFBZTtBQUNmLEtBQUs7QUFFTCwrQ0FBK0M7QUFFL0MseUNBQXlDO0FBRXpDLDhCQUE4QjtBQUU5QixPQUFPLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBR25ELE1BQU0sY0FBYyxHQUFxQixHQUFHLEVBQUU7SUFDNUMsTUFBTSxDQUFDLHdDQUF3QyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQ2xFLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUNKLHdDQUF3QyxFQUN4QztJQUNFLElBQUksRUFBRSxXQUFXO0NBQ2xCLEVBQ0QsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDakIsSUFBSSxLQUFLLEVBQUU7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO1NBQU07UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3hEO0FBQ0gsQ0FBQyxDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ3BDLElBQUksS0FBSyxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM5QztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsY0FBYyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge0Jvb2t9IGZyb20gJy4vYm9vay5qcyc7XHJcbi8vIGltcG9ydCB7Qm9va0F1dGhvciwgR2VucmUsIElBdXRob3IsIElPcHRpb25hbEF1dGhvcn0gZnJvbSAnLi9tb2RlbHMuanMnO1xyXG4vLyBpbXBvcnQge0Jvb2tDb2xsZWN0aW9uLCBQcm9kdWN0Q29sbGVjdGlvbn0gZnJvbSAnLi9ib29rLWNvbGxlY3Rpb24uanMnO1xyXG4vLyBpbXBvcnQge0NvbGxlY3Rpb259IGZyb20gJy4vY29sbGVjdGlvbi5qcyc7XHJcbi8vIGltcG9ydCB7Tm90ZXBhZH0gZnJvbSAnLi9ub3RlcGFkLmpzJztcclxuLy8gaW1wb3J0IHtnZXRCb29rSW5mb30gZnJvbSAnLi9nb29nbGUtYm9va3MuanMnO1xyXG5cclxuLy8gY29uc3QgaGFycnlQb3R0ZXJJc2JuID0gJzk3ODE0MDg4NDU2NDYnO1xyXG5cclxuLy8gbmV3IENvbGxlY3Rpb248Qm9vaywgbnVtYmVyPigpO1xyXG4vLyBuZXcgQ29sbGVjdGlvbjxCb29rLCBudW1iZXI+KCk7XHJcbi8vIG5ldyBDb2xsZWN0aW9uPEJvb2ssIHN5bWJvbD4oKTtcclxuLy8gbmV3IENvbGxlY3Rpb248Qm9vaz4oKTtcclxuXHJcbi8vIGNvbnN0IGprUm93bGluZzogQm9va0F1dGhvciA9IHtcclxuLy8gICBmaXJzdE5hbWU6ICdKLiBLLicsXHJcbi8vICAgbGFzdE5hbWU6ICdSb3dsaW5nJyxcclxuLy8gICAvLyByYXRpbmc6IDQuNixcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IGhhcnJ5UG90dGVyID0gbmV3IEJvb2soJ0hhcnJ5IFBvdHRlcicsIEdlbnJlLmZhbnRhc3ksIDUwMCwgamtSb3dsaW5nKTtcclxuXHJcbi8vIGNvbnN0IHN1cGVyTm90ZXBhZCA9IG5ldyBOb3RlcGFkKCdTdXBlciB0ZXh0JywgNDQpO1xyXG5cclxuLy8gY29uc3QgY2FydCA9IG5ldyBQcm9kdWN0Q29sbGVjdGlvbigpO1xyXG4vLyBjYXJ0LnNldChoYXJyeVBvdHRlci5uYW1lLCBoYXJyeVBvdHRlcik7XHJcbi8vIGNhcnQuc2V0KHN1cGVyTm90ZXBhZC5uYW1lLCBzdXBlck5vdGVwYWQpO1xyXG5cclxuLy8gY29uc3QgZmF2b3JpdGVCb29rc1NoZWxmID0gbmV3IEJvb2tDb2xsZWN0aW9uKCk7XHJcbi8vIGZhdm9yaXRlQm9va3NTaGVsZi5zZXQoaGFycnlQb3R0ZXIubmFtZSwgaGFycnlQb3R0ZXIpO1xyXG5cclxuLy8gY29uc3QgZ2V0U3VtbWFyeSA9IChjb2xsZWN0aW9uOiBDb2xsZWN0aW9uPHVua25vd24+KTogc3RyaW5nID0+IHtcclxuLy8gICBpZiAoY29sbGVjdGlvbiBpbnN0YW5jZW9mIEJvb2tDb2xsZWN0aW9uKSB7XHJcbi8vICAgICByZXR1cm4gYFRvdGFsICR7Y2FydC5zaXplfSBib29rcyBvbiB0aGUgc2hlbGZgO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgaWYgKGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBQcm9kdWN0Q29sbGVjdGlvbikge1xyXG4vLyAgICAgcmV0dXJuIGBUb3RhbCAke2NhcnQucHJpY2V9IGZvciAke2NhcnQuc2l6ZX0gaXRlbXNgO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuICdObyBzcGVjaWFsIHN1bW1hcnkgZm9yIHRoaXMga2luZCBvZiBjb2xsZWN0aW9uJztcclxuLy8gfTsgIFxyXG5cclxuLy8gY29uc29sZS5sb2coZ2V0U3VtbWFyeShjYXJ0KSk7XHJcbi8vIGNvbnNvbGUubG9nKGdldFN1bW1hcnkoZmF2b3JpdGVCb29rc1NoZWxmKSk7XHJcblxyXG4vLyBnZXRCb29rSW5mbyhoYXJyeVBvdHRlcklzYm4pXHJcbi8vICAgLnRoZW4oKGJvb2spID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKFxyXG4vLyAgICAgICBib29rLnZvbHVtZUluZm8udGl0bGUsXHJcbi8vICAgICAgIGJvb2sudm9sdW1lSW5mby5kZXNjcmlwdGlvbixcclxuLy8gICAgICAgYm9vay52b2x1bWVJbmZvLmF1dGhvcnNbMF1cclxuLy8gICAgICk7XHJcbi8vICAgfSlcclxuLy8gICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcblxyXG4vLyBjb25zdCBvcHRpb25hbEF1dGhvcjogSU9wdGlvbmFsQXV0aG9yID0ge1xyXG4vLyAgIHJhdGluZzogNSxcclxuLy8gICBib29rc1dyaXR0ZW46IDExLFxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgZnVsbEF1dGhvcjogUmVxdWlyZWQ8SU9wdGlvbmFsQXV0aG9yPiA9IHtcclxuLy8gICBmaXJzdE5hbWU6ICcnLFxyXG4vLyAgIGxhc3ROYW1lOiAnJyxcclxuLy8gICBiaXJ0aERhdGU6IG5ldyBEYXRlKCksXHJcbi8vICAgYm9va3NXcml0dGVuOiAxLFxyXG4vLyAgIHJhdGluZzogMixcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IGF1dGhvcjogQm9va0F1dGhvciA9IHtcclxuLy8gICBmaXJzdE5hbWU6ICdKLksuJyxcclxuLy8gICBsYXN0TmFtZTogJ1Jvd2xpbmcnLFxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgYm9vayA9IG5ldyBCb29rKCdIYXJyeSBQb3R0ZXInLCBHZW5yZS5mYW50YXN5LCAxMDAsIGF1dGhvcik7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhib29rKTtcclxuXHJcbi8vIGNvbnN0IGF1dGhvcldpdGhvdXRSYXRpbmc6IE9taXQ8SUF1dGhvciwgJ3JhdGluZyc+ID0ge1xyXG4vLyAgIGZpcnN0TmFtZTogJ2ZpcnN0IG5hbWUnLFxyXG4vLyAgIGxhc3ROYW1lOiAnbGFzdCBuYW1lJyxcclxuLy8gICBiaXJ0aERhdGU6IG5ldyBEYXRlKCksXHJcbi8vICAgYm9va3NXcml0dGVuOiAxMDA1MDAsXHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBuZXdBdXRob3I6IFBhcnRpYWw8SUF1dGhvcj4gPSB7fTtcclxuXHJcbi8vIGNvbnN0IGFub3RoZXJBdXRoZXI6IFJlYWRvbmx5PElBdXRob3I+ID0ge1xyXG4vLyAgIGZpcnN0TmFtZTogJycsXHJcbi8vICAgbGFzdE5hbWU6ICcnLFxyXG4vLyAgIGJpcnRoRGF0ZTogbmV3IERhdGUoKSxcclxuLy8gICBib29rc1dyaXR0ZW46IDEyLFxyXG4vLyAgIHJhdGluZzogMSxcclxuLy8gfTtcclxuXHJcbi8vIGltcG9ydCB7dXBwZXJDYXNlfSBmcm9tICcuL3N0cmluZ0hlbHBlci5qcyc7XHJcblxyXG4vLyBjb25zb2xlLmxvZyh1cHBlckNhc2UoJ2JsYS1ibGEtYmxhJykpO1xyXG5cclxuLy8gY29uc3QgbWF4ID0gTWF0aC5tYXgoMSwgMik7XHJcblxyXG5pbXBvcnQge3NlYXJjaCwgbG9va3VwfSBmcm9tICdnb29nbGUtYm9va3Mtc2VhcmNoJztcclxuaW1wb3J0IHtJQm9vaywgSUNhbGxiYWNrfSBmcm9tICdnb29nbGUtYm9va3Mtc2VhcmNoJztcclxuXHJcbmNvbnN0IHNlYXJjaENhbGxiYWNrOiBJQ2FsbGJhY2s8SUJvb2s+ID0gKCkgPT4ge1xyXG4gIHNlYXJjaCgnaGFycnkgcG90dGVyIGFuZCB0aGUgc29yY2VyZXJcXCdzIHN0b25lJywgKGVycm9yLCByZXN1bHRzKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0c1swXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5zZWFyY2goXHJcbiAgJ2hhcnJ5IHBvdHRlciBhbmQgdGhlIHNvcmNlcmVyXFwncyBzdG9uZScsXHJcbiAge1xyXG4gICAgdHlwZTogJ21hZ2F6aW5lcycsXHJcbiAgfSxcclxuICAoZXJyb3IsIHJlc3VsdHMpID0+IHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnU2VhcmNoIHJlc3VsdHMgZm9yIG1hZ2F6aW5lczogJywgcmVzdWx0cyk7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxubG9va3VwKCdzb21lIGJvb2snLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnTG9va3VwIGJ5IElEIHJlc3VsdDogJywgcmVzdWx0KTtcclxuICB9XHJcbn0pO1xyXG5cclxuc2VhcmNoQ2FsbGJhY2soKTtcclxuIl19