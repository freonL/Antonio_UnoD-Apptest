export interface IContact {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

type ContactState = {
  contacts: IContact[];
};

type ContactAction = {
  type: string;
  payload: IContact;
};

export type DispatchType = (args: ContactAction) => ContactAction;
