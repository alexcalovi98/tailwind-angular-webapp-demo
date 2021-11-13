export interface User {
    avatarUrl: string;
    name: string;
    surname: string;
    fullname: string;
    email: string;
    job: string;
    department: string;
    status: "active" | "inactive";
    role: string;
}