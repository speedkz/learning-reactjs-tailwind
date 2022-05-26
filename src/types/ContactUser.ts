export interface ContactUser {
  id: string
  name: string
  status: string
  categories: Category[]
  image: string
}

interface Category {
  type: CategoryType,
  name: string
}

export enum CategoryType {
  IMPORTANT = 1,
  NORMAL = 2,
  OTHER =3
}

export interface ContactListProps {
  setCurrentContact: (contact: ContactUser) => void;
}