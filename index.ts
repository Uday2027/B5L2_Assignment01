{
    const formatString = (input: string, toUpper?: boolean): string => {
    if (toUpper || toUpper === undefined) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}

formatString("Hello");

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const result: { title: string; rating: number }[] = [];
    items.forEach(item => {
        if (item.rating >= 4) {
            result.push(item);
        }
    });
    return result; 
}

    const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

console.log(filterByRating(books)); 

    function concatenateArrays<T>(...arrays: T[][]): T[]{
        let result: T[] = [];

        for (const rest of arrays) {
            result = [...result, ...rest]
        }

        return result;
    }
    console.log(concatenateArrays(["a", "b"], ["c"]));      // Output: ["a", "b", "c"]
    console.log(concatenateArrays([1, 2], [3, 4], [5]));  // Output: [1, 2, 3, 4, 5]
    


    class Vehicle{
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }
         getInfo(): string{
            return `Make: ${this.make}, Year:${this.year}`;
        }
    }
    class Car extends Vehicle{
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;

        }

         getModel(): string{
            return `Model: ${this.model}`;
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    console.log(myCar.getInfo());  // Output: "Make: Toyota, Year: 2020"
    console.log(myCar.getModel()); // Output: "Model: Corolla"
    

    function processValue(value: string | number): number{
        if (typeof value === "string") return value.length;
        else return value * 2;
    }

   console.log( processValue("hello"));// Output: 5
    console.log(processValue(10));     // Output: 20
    
    interface Product {
  name: string;
  price: number;
}

    function getMostExpensiveProduct(products: Product[]): Product | null{
        let maxPrice = Number.MIN_VALUE;
        products.forEach(product =>{
            if (product.price > maxPrice) maxPrice = product.price;
        })
        
        const result: Product[] = [];

        products.forEach(product =>{
            if (product.price === maxPrice) result.push(product);
        })

        return result[0];
        
    }
    const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

    console.log(getMostExpensiveProduct(products));  
    
    enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
    }

    function getDayType(day: Day): string{
        if (day === Day.Saturday || day === Day.Sunday) return 'Weekend';
        else return 'Weekday';
    }
    
    console.log(getDayType(Day.Monday));   
    console.log(getDayType(Day.Sunday));  
    

    async function squareAsync(n: number): Promise<number> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (n < 0) {
        throw new Error("Negative number not allowed");
    }
    return n * n;
    }
    
    squareAsync(4).then(console.log);        
    squareAsync(-3).catch(console.error);    
    

}