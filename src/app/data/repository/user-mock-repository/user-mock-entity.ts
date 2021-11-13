export interface UserMockEntity {

    avatarUrl: string;
    name: string;
    surname: string;
    email: string;
    job: string;
    department: string;
    status: "active" | "inactive";
    role: string;
}