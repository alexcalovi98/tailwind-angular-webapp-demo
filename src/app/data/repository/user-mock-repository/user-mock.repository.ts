import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "src/app/core/domain/user.model";
import { UserRepository } from "src/app/core/repositories/user.repository";
import { UserMockEntity } from "./user-mock-entity";
import { UserMockEntityMapper } from "./user-mock-entity.mapper";

@Injectable({
    providedIn: 'root'
  })
export class UserMockRepository implements UserRepository {
    
    mapper: UserMockEntityMapper;

    constructor(){
        this.mapper = new UserMockEntityMapper();
    }
    users: UserMockEntity[] = [
        { name: "Alex", surname: "Calovi", email: "alex.calovi@example.com", job: "Full Stack Developer", department: "Fiverr", status: "active", role: "Owner", avatarUrl: "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/74c796e5578bbdbad6a0b21b3d3453dd-1634389361776/c0455102-3d33-4d36-8485-3490a4d86f2c.jpg" },
        { name: "Jane", surname: "Cooper", email: "jane.cooper@example.com", job: "Regional Paradigm Technician", department: "Optimization", status: "active", role: "Member", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" },
        { name: "Cody", surname: "Fisher", email: "cody.fisher@example.com", job: "Product Directives Officer", department: "Intranet", status: "inactive", role: "Member", avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" },
        { name: "Esther", surname: "Howard", email: "esther.howard@example.com", job: "Forward Response Developer", department: "Directives", status: "active", role: "Member", avatarUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" },
        { name: "Jenny", surname: "Wilson", email: "jenny.wilson@example.com", job: "Central Security Manager", department: "Program", status: "active", role: "Member", avatarUrl: "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" },
        { name: "Kristin", surname: "Watson", email: "kristin.watson@example.com", job: "Lead Implementation Liaison", department: "Mobility", status: "active", role: "Member", avatarUrl: "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" },
        { name: "Cameron", surname: "Williamson", email: "cameron.williamson@example.com", job: "Internal Applications Engineer", department: "Security", status: "active", role: "Member", avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" }
    ]
    
    getUsers(): Observable<User[]> {
        return of(this.users.map(this.mapper.mapFrom));
    }
}