export class UserDto {

    private id!: string;
    private name!: string;
    private username!: string;
    private email!: string;

    User(name: string, username: string, email: string) {
        this.name = name;
        this.username = username;
        this.email = email
    }

}

