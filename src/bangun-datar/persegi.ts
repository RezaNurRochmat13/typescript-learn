import BangunDatar from "./bangun_datar";

export default class Persegi implements BangunDatar {
    private sisi: number = 0;

    constructor(sisi: number) {
        this.sisi = sisi;
    }

    luas(): number {
        return this.sisi * this.sisi;
    }

    keliling(): number {
       return 4 * this.sisi;
    }

}