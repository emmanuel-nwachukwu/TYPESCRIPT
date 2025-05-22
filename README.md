
# TypeScript Crash Course Notes

This document is a concise summary of all the TypeScript concepts, code examples, and exercises we've covered during our session.

---

## ✅ Type Annotations

```ts
let city: string = "Lagos";
let population: number = 10;
let isCapital: boolean = true;
```

---

## ✅ Functions with Type Annotations

```ts
function double(num: number): number {
  return num * 2;
}
```

---

## ✅ Object Type Annotation

```ts
const product: { title: string; price: number } = {
  title: "product A",
  price: 300,
};
```

---

## ✅ Interfaces

```ts
interface Book {
  title: string;
  author: string;
  year: number;
}

const book1: Book = {
  title: "Great Dane",
  author: "Phoenix",
  year: 1980,
};

const book2: Book = {
  title: "Big Fat Goat",
  author: "Empr",
  year: 2006,
};

function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}, published in ${book.year}`);
}
```

---

## ✅ Destructuring with Types

```ts
function describeMovie({ title, director, duration, isReleased }: Movie): void {
  console.log(`${title}, directed by ${director}, lasts ${duration}. Released: ${isReleased}`);
}
```

---

## ✅ Optional Properties

```ts
interface BlogPost {
  title: string;
  content: string;
  author?: string;
}

function printPost({ title, content, author }: BlogPost): void {
  if (author !== undefined) {
    console.log(`${title} by ${author}`);
  } else {
    console.log(`${title} (anonymous)`);
  }
}
```

---

## ✅ Union Types & Type Narrowing

```ts
function logStatus(status: string | boolean) {
  if (typeof status === "string") {
    console.log(`Status: ${status.toUpperCase()}`);
  } else {
    console.log(`Status: ${status ? "Active" : "Inactive"}`);
  }
}
```

---

## ✅ Custom Types

```ts
type Coordinate = {
  lat: number;
  lng: number;
};
```

---

## ✅ Generics

```ts
function wrapInArray<T>(value: T): T[] {
  return [value];
}

function makePair<T, P>(a: T, b: P): [T, P] {
  return [a, b];
}
```

---

## ✅ Function Overloads

```ts
function formatInput(a: string): string;
function formatInput(a: number): string;

function formatInput(a: any): string {
  if (typeof a === "string") {
    return a.toUpperCase();
  } else {
    return `${a}.00`;
  }
}
```

---

## ✅ Type Guards

```ts
interface Admin {
  username: string;
  role: "admin";
  accessLevel?: number;
}

interface Guest {
  username: string;
  role: "guest";
}

type User = Admin | Guest;

function isAdmin(user: User): user is Admin {
  return user.role === "admin";
}

function handleUser({ role, username, accessLevel }: User) {
  if (role === "admin") {
    console.log(`Admin: [${username}] (Level: [${accessLevel ?? "N/A"}])`);
  } else if (role === "guest") {
    console.log(`Guest: [${username}]`);
  } else {
    console.log("Invalid user");
  }
}
```

---

## ✅ Discriminated Unions & Pattern Matching

```ts
interface EmailNotification {
  type: "email";
  to: string;
  subject: string;
}

interface SMSNotification {
  type: "sms";
  phoneNumber: string;
  message: string;
}

interface PushNotification {
  type: "push";
  deviceId: string;
  title: string;
  body: string;
}

type Notification = EmailNotification | SMSNotification | PushNotification;

function sendNotification(notification: Notification) {
  switch (notification.type) {
    case "email":
      console.log(`Sending email to ${notification.to}: ${notification.subject}`);
      break;
    case "sms":
      console.log(`Sending sms to ${notification.phoneNumber}: ${notification.message}`);
      break;
    case "push":
      console.log(`Sending push to ${notification.deviceId}: ${notification.title} - ${notification.body}`);
      break;
  }
}
```

---

## ✅ Utility Types

```ts
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
};

type optProduct = Partial<Product>;
type onlyProduct = Pick<Product, "id" | "price">;
type omitProduct = Omit<Product, "description">;
type SafeProduct = {
  readonly [K in keyof Product]?: Product[K];
};
```

---

## ✅ Mapped Types Exercises

```ts
type MakeReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type MakeNullable<T> = {
  [K in keyof T]: T[K] | null;
};
```

---

## ✅ Conditional Types

```ts
type IsNumber<T> = T extends number ? "number" : "not-number";
type OnlyNumbers<T> = T extends number ? T : never;
```

---

This document will grow as your TypeScript journey continues! 🚀

> Save this as `README.md` in your notes folder and open it in VS Code for a formatted view anytime.
