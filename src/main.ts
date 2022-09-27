import User from "./user/user"

export function main() {
    const user = new User("Reza");

    console.info("INFO: ", user.getName());

    return `Hello TypeScript`
}

console.log(main())
