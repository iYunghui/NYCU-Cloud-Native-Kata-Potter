export class Potter {

    private basket: number[][] = [];
    private price = 0;
    private discount = [0, 1, 0.95, 0.9, 0.8, 0.75];

    calculatePrice(books:number[]) {

        for(let i=0; i<books.length; ++i) {
            var flag = 0;
            for(let j=0; j<this.basket.length; ++j) {
                if(!this.basket[j].includes(books[i])) {
                    flag = 1;
                    this.basket[j].push(books[i]);
                }
            }
            if(!flag) {
                this.basket.push([books[i]]);
            }
        }

        for(let i=1; i<=this.basket.length; ++i) {
            let num = this.basket[i-1].length;
            this.price += 8 * num * this.discount[num];
        }

        return this.price;
    }
}


