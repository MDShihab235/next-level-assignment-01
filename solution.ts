// 1----------
type FormatValue = string | number | boolean;
const formatValue = (value: FormatValue) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value === true) {
      return false;
    } else {
      return true;
    }
  }
};

// 2------------
type GetLength = string | number[];
const getLength = (value: GetLength) => {
  if (typeof value === "string") {
    const stringLength = value.length;
    return stringLength;
  } else if (Array.isArray(value)) {
    const arrayLength = value.length;
    return arrayLength;
  }
};

// 3----------

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// 4----------

type Items = {
  title: string;
  rating: number;
};
const filterByRating = (items: Items[]): Items[] => {
  const highestRating = items.filter((item) => {
    if (item.rating > 4) {
      return item;
    }
  });
  return highestRating;
};

// 5----------

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: User[]): User[] => {
  const activeUsers = users.filter((user) => {
    if (user.isActive === true) {
      return user;
    }
  });
  return activeUsers;
};

// 6----------

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  const bookDetails = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`;

  return bookDetails;
};

// 7----------

type GetUniqueValues = (arr1: number[], arr2: number[]) => number[];
type FindIndex = (array: number[], element: number) => number;

const getUniqueValues: GetUniqueValues = (arr1, arr2) => {
  let uniqueValues: number[] = [];

  const findIndexManually: FindIndex = (array, element) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return i;
      }
    }
    return -1;
  };

  for (let i = 0; i < arr1.length; i++) {
    const value: any = arr1[i];
    if (findIndexManually(uniqueValues, value) === -1) {
      uniqueValues[uniqueValues.length] = value;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const value: any = arr2[i];
    if (findIndexManually(uniqueValues, value) === -1) {
      uniqueValues[uniqueValues.length] = value;
    }
  }

  return uniqueValues;
};

// 8----------

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  let productsTotalPrice = 0;
  if (products.length === 0) {
    return 0;
  } else {
    products.map((product) => {
      const { price, quantity, discount } = product;
      if (discount !== undefined) {
        const totalPrice = price * quantity;
        const withDiscountPrice = totalPrice - (totalPrice / 100) * discount;
        productsTotalPrice += withDiscountPrice;
      } else {
        const withOutDiscount = price * quantity;
        productsTotalPrice += withOutDiscount;
      }
    });
  }
  return productsTotalPrice;
};
