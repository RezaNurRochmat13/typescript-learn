import Persegi from "./bangun-datar/persegi";
import PersegiPanjang from "./bangun-datar/persegi_panjang";

export function main() {
    // Bangun Datar 
    const persegiOne = new Persegi(4);
    console.log("Keliling Persegi :", persegiOne.keliling());
    console.log("Luas Persegi :", persegiOne.luas());

    const persegiPanjangOne = new PersegiPanjang(10, 23);
    console.log("Keliling Persegi Panjang :", persegiPanjangOne.keliling());
    console.log("Luas Persegi Panjang :", persegiPanjangOne.luas());

    console.info("INFO: ", "Application is running successfully");
}

// Execute main application
main();
