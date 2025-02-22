//section 1
function capitalizeWords(input: string): string {
    if (input === "") return input; 
  
    return input
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' '); 
  
  console.log(capitalizeWords("hello world from typescript")); 
  
  function isValidNumber(value: unknown): boolean {
    return typeof value === 'number' && !isNaN(value); 
  }
}
  
  //section 2
interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean; 
  }
  
  function createUser(user: User): string {
    return `User ${user.name} created successfully`;
  }
  
  const newUser: User = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    isAdmin: true
  };
  
  console.log(createUser(newUser)); 
  
// section 3
class Product {
    public name: string;
    public price: number;
    public category: string;

    constructor(name: string, price: number, category: string) {
      this.name = name;
      this.price = price;
      this.category = category;
    }
  
    public getDiscountedPrice(discount: number): number {
      return this.price - (this.price * discount / 100);
    }
  }
  
  const product = new Product("Laptop", 1000, "Electronics");
  console.log(`Original Price: $${product.price}`); 
  console.log(`Discounted Price (10% off): $${product.getDiscountedPrice(10)}`); 
  
  //section 4
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    return array.filter(predicate);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = filterArray(numbers, (num) => num % 2 === 0); 
  console.log("Even Numbers:", evenNumbers);
  
  const strings = ["apple", "banana", "cherry", "date"];
  const longWords = filterArray(strings, (word) => word.length > 5); 
  console.log("Long Words:", longWords);

// section 5
async function fetchUsers(): Promise<{ id: number, name: string, email: string }[]> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
  
      const users = data.map((user: { id: number, name: string, email: string }) => ({
        id: user.id,
        name: user.name,
        email: user.email
      }));
  
      return users;
  
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
  
  fetchUsers().then(users => {
    console.log("Fetched Users:", users);
  });

//Bonus Challenge
const weakPasswords = [
    "password", "123456", "qwerty", "abc123", "letmein", "welcome", "admin", "password123", "12345", "monkey"
  ];
  
  function validatePassword(password: string): boolean {

    if (password.length < 8) {
      console.log("Password must be at least 8 characters long.");
      return false;
    }
  
  
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    if (!hasLowerCase || !hasUpperCase || !hasNumber || !hasSpecialChar) {
      console.log("Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.");
      return false;
    }

    if (weakPasswords.includes(password.toLowerCase())) {
      console.log("This password is too weak.");
      return false;
    }
  
    console.log("Password is valid.");
    return true;
  }
  
  const testPasswords = [
    "password123", 
    "StrongPassword123!", 
    "12345", 
    "Qwerty123@", 
    "letmein", 
  ];
  
  testPasswords.forEach(password => {
    console.log(`Testing password: ${password}`);
    validatePassword(password);
  });
  