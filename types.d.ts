export interface  User {
    id: string;
    name:string;
    email: string;
    category: string
    isActive: boolean;
}

export interface  UserMutation {
    name:string;
    email: string;
    category: string
    isActive: boolean;
}