import BangunDatar from "./bangun_datar";

export default class PersegiPanjang implements BangunDatar {
    private panjang: number = 0;
    private lebar: number = 0;

    constructor(panjang: number, lebar: number) {
        this.panjang = panjang;
        this.lebar = lebar;
    }

    luas(): number {
        return 2 * (this.panjang + this.lebar);
    }

    keliling(): number {
        return this.panjang * this.lebar;
    }
}