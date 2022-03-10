export default class BookResponse {
  public id: number = 0;
  public title: string = '';
  public author: string = '';
}

// TODO: 以下の形に修正
// export type Id = number;
// export type Title = string;
// export type Author = string;

// export default class Book {
//   constructor(
//     private _id: Id,
//     private _title: string,
//     private _author: string,
//   ) {}

//   get id() {
//     return this._id;
//   }

//   get title() {
//     return this._title;
//   }

//   get author() {
//     return this._author;
//   }

//   hasTitle(book: Book): boolean {
//     return !!book.title;
//   }
// }
