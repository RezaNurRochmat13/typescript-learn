export default class User {
    private name:string = "";

    constructor(name:string) {
        this.name = name;
    }

    public getName() {
        return this.name
    }

    public setName(name:string) {
        this.name = name;
    }
}