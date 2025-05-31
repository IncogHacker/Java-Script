class Product {
    constructor(id, name, price, stock, grades) {
        this.id = id;
        this.NameofProduct = name;
        this.Price = price;
        this.Stock = stock;
        this.grades = grades;
    }

    // Method to add or update a grade
    calladding(key, value) {
        this.grades[key] = value;
        console.log(this);
    }
}

// Creating an instance of the Product class
const product = new Product(
    "01",
    "CetapHill",
    999.9,
    "50-rs",
    {
        MAths: "90",
        English: "45",
        Science: "32"
    }
);

// Using the method
product.calladding("History", "88");a