export class User {
    id: number;
    organizationName: string;
    specialistsQuantity: number;
    parentUserId: number;
    login: string;
    blocked: number;

    constructor(id: number, orgName: string, specsQ: number, parentId: number, login: string, blocked: number) {
        this.id = id;
        this.organizationName = orgName;
        this.specialistsQuantity = specsQ;
        this.parentUserId = parentId;
        this.login = login;
        this.blocked = blocked;
    }
}
