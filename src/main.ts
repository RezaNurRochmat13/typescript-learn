import Persegi from "./bangun-datar/persegi";
import Reza from "./user/reza";
import User from "./user/user"

export function main() {
    const user = new User("Reza");

    console.info("INFO: ", "Application is running successfully");

    // Bangun Datar 
    const persegiOne = new Persegi(4);
    console.log(persegiOne.keliling());
    console.log(persegiOne.luas());

    return `Hello TypeScript`
}

// Execute main application
main();
