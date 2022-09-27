import Reza from "./user/reza";
import User from "./user/user"

export function main() {
    const user = new User("Reza");
    const reza = new Reza("Reja");

    console.info("INFO: ", user.getName());
    console.info("INFO: ", reza.getName());

    return `Hello TypeScript`
}

console.log(main())
