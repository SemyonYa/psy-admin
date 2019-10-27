import { FormGroup, FormControl, Validators } from '@angular/forms';

export class User {
    id: number;
    organizationName: string;
    email: string;
    phone: string;
    specialistsQuantity: number;
    parentUserId: number;
    login: string;
    blocked: number;
    role: string;

    // tslint:disable-next-line:max-line-length
    constructor(id: string, orgName: string, email: string, phone: string, specsQ: string, parentId: string, login: string, blocked: string, role: string) {
        this.id = Number.parseInt(id, 10);
        this.organizationName = orgName;
        this.email = email;
        this.phone = phone;
        this.specialistsQuantity = Number.parseInt(specsQ, 10);
        this.parentUserId = Number.parseInt(parentId, 10);
        this.login = login;
        this.blocked = Number.parseInt(blocked, 10);
        this.role = role;
    }

    static createForm(): FormGroup {
        return new FormGroup({
            organizationName: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            phone: new FormControl('', Validators.required),
            login: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    editForm(): FormGroup {
        return new FormGroup({
            id: new FormControl(this.id),
            organizationName: new FormControl(this.organizationName, Validators.required),
            specialistsQuantity: new FormControl(this.specialistsQuantity, Validators.required),
            parentUserId: new FormControl(this.parentUserId, Validators.required),
            email: new FormControl(this.email, [Validators.required, Validators.email]),
            phone: new FormControl(this.phone, Validators.required),
            login: new FormControl(this.login, Validators.required),
            blocked: new FormControl(this.blocked, Validators.required),
            role: new FormControl(this.role)
        });
    }
}
