import isEmpty from 'lodash/isEmpty';
import { Id, Name, MailAddress } from './vo';

// TODO: フロントでの持ち方検討
export class User {
  // 完全コンストラクタパターン
  constructor(
    private _id: Id,
    private _name: Name,
    private _mailAddress: MailAddress,
  ) {}

  get id(): Id {
    return this._id;
  }

  get name(): Name {
    return this._name;
  }

  get mailAddress(): MailAddress {
    return this._mailAddress;
  }

  hasId(): boolean {
    return !isEmpty(this._id);
  }

  hasName(): boolean {
    return !isEmpty(this._name);
  }

  hasMailAddress(): boolean {
    return !isEmpty(this._name);
  }
}
