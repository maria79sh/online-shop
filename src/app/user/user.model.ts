
export class User {
    public username : string;
    public password :string;
    public contact :string;

    constructor(name:string, password:string, contact:string){
        this.username = name;
        this.password = password;
        this.contact = contact;
    }
}
