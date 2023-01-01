export class UserRolesResponse {
    public readonly roleId: number;
    public readonly role: string;

    constructor(roleId: number, role: string) {
        this.roleId = roleId;
        this.role = role;
    }
}