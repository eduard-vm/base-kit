export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  phone: string;
  website: string;
  email: string;
  address: IAddress;
}

export default class User implements IUser {
  public id: number;
  public name: string;
  public phone: string;
  public website: string;
  public email: string;
  public address: IAddress;
  constructor({
    id,
    name,
    phone,
    website,
    email,
    address
  }: IUser) {
    this.id = id
    this.name = name
    this.phone = phone
    this.website = website
    this.email = email
    this.address = {
      street: address.street,
      suite: address.suite,
      city: address.city,
      zipcode: address.zipcode
    }
  }
}
