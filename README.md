# TypeScript Crash Course Notes

This document is a comprehensive summary of all TypeScript concepts covered, including code examples, challenges, and solutions to help reinforce learning.

---

## ✅ Type Annotations

```ts
let city: string = "Lagos";
let population: number = 10;
let isCapital: boolean = true;
```

### Challenge

Declare a variable for a person's name, age, and employment status.

#### Solution

```ts
let name: string = "Jane";
let age: number = 30;
let isEmployed: boolean = true;
```

---

## ✅ Functions with Type Annotations

```ts
function double(num: number): number {
  return num * 2;
}
```

### Challenge

Write a function `square` that returns the square of a number.

#### Solution

```ts
function square(n: number): number {
  return n * n;
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

### Challenge

Create a `user` object with `name`, `email`, and `isActive` fields.

#### Solution

```ts
const user: { name: string; email: string; isActive: boolean } = {
  name: "Alice",
  email: "alice@example.com",
  isActive: true,
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

function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}, published in ${book.year}`);
}
```

### Challenge

Define an interface `UserProfile` with `username`, `email`, and optional `bio`.

#### Solution

```ts
interface UserProfile {
  username: string;
  email: string;
  bio?: string;
}
```

---

## ✅ Destructuring with Types

```ts
function describeMovie({ title, director, duration, isReleased }: Movie): void {
  console.log(
    `${title}, directed by ${director}, lasts ${duration}. Released: ${isReleased}`
  );
}
```

### Challenge

Use destructuring in a function to print a blog post’s title and author.

#### Solution

```ts
function printPost({ title, author }: BlogPost): void {
  console.log(`${title} by ${author ?? "anonymous"}`);
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

function printPost({ title, author }: BlogPost): void {
  console.log(author ? `${title} by ${author}` : `${title} (anonymous)`);
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

### Challenge

Define a `Rectangle` type with width and height and calculate area.

#### Solution

```ts
type Rectangle = {
  width: number;
  height: number;
};

function area(rect: Rectangle): number {
  return rect.width * rect.height;
}
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

### Challenge

Create a generic function `identity<T>(arg: T): T`.

#### Solution

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

---

## ✅ Function Overloads

```ts
function formatInput(a: string): string;
function formatInput(a: number): string;

function formatInput(a: any): string {
  return typeof a === "string" ? a.toUpperCase() : `${a}.00`;
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

function handleUser(user: User) {
  if (isAdmin(user)) {
    console.log(
      `Admin: [${user.username}] (Level: ${user.accessLevel ?? "N/A"})`
    );
  } else {
    console.log(`Guest: [${user.username}]`);
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
      console.log(
        `Sending email to ${notification.to}: ${notification.subject}`
      );
      break;
    case "sms":
      console.log(
        `Sending sms to ${notification.phoneNumber}: ${notification.message}`
      );
      break;
    case "push":
      console.log(
        `Sending push to ${notification.deviceId}: ${notification.title} - ${notification.body}`
      );
      break;
  }
}
```

### Challenge

Filter all `SMS` notifications and print them.

#### Solution

```ts
function isSMS(n: Notification): n is SMSNotification {
  return n.type === "sms";
}

const smsNotifications = notif.filter(isSMS);

smsNotifications.forEach(({ phoneNumber, message }) => {
  console.log(`SMS to ${phoneNumber}: ${message}`);
});
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

## ✅ Typing Events

Here’s how to type common events in React:

```ts
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Clicked");
};
```

## 🔍 The code:

```ts
const className = variant === "primary" ? "btn-primary" : "btn-secondary";
```

## 💡 What it means:

If `variant` equals `"primary"`, then className will be `"btn-primary"`.
Otherwise, it will be `"btn-secondary"`.

## ✅ Equivalent if written with if:

```ts
let className;

if (variant === "primary") {
  className = "btn-primary";
} else {
  className = "btn-secondary";
}
```
