// @ts-nocheck
/* eslint-disable */

//Array filter Syntax:
array.filter((item) => condition);

// It returns:
// A new array with items that pass the condition.
// Let’s say you only want to send push notifications from the list.

const onlyPush = notif.filter((n) => n.type === "push");

// Now onlyPush contains just the notifications where type is "push".
notif.filter((n) => isPush(n));


// Utility Types in TypeScript
```
1. Partial<T>
-    Makes all properties optional.
-    Useful for update functions or optional configs.
```
        interface User {
            id: number;
            name: string;
            email: string;
        }
        
        // Normally all required:
        const fullUser: User = {
            id: 1,
            name: "Alice",
            email: "alice@example.com",
        };
        
        // With Partial<User> all fields optional:
        const partialUser: Partial<User> = {
            name: "Bob", // just name, others missing
        };

```
2. Pick<T, K>
-   Creates a new type by picking only certain keys from T.
```

        type UserPreview = Pick<User, "id" | "name">;

        const preview: UserPreview = {
        id: 2,
        name: "Charlie",
        // email: missing, not allowed here
        };

```
3. Omit<T, K>
-   Creates a new type by excluding certain keys from T.
```
        type UserWithoutEmail = Omit<User, "email">;

        const userNoEmail: UserWithoutEmail = {
        id: 3,
        name: "Diana",
        // email: not allowed here
        };

```
4. Record<K, T>
-   Creates a type with keys from K and values of type T.
-   Great for dictionaries or maps.
```

        type PageNames = "home" | "about" | "contact";

        const pageTitles: Record<PageNames, string> = {
        home: "Welcome Home",
        about: "About Us",
        contact: "Contact Info",
        };

```
5. Readonly<T>
-   Makes all fields non-editable.
```
        const product: Readonly<Product> = {
            id: 1,
            name: "Watch",
            price: 50,
            description: "Smart watch",
        };
        
        // product.price = 60; ❌ Error! Read-only
        
```
6. Required<T>
-   Makes all fields required, even if they were optional before.
```
        interface DraftProduct {
            id?: number;
            name?: string;
        }
        
        type FinalProduct = Required<DraftProduct>;
        
        const p: FinalProduct = {
            id: 1,
            name: "Tablet",
        }; // ✅ All required now
  

```
```

```Mapped Types A```
// 🔁 Basic Syntax:

type MyMappedType = {
  [Key in Keys]: Type;
}

// 🧪 Example 1: Make all fields strings

type Product = {
  id: number;
  name: string;
  price: number;
};

type StringifiedProduct = {
  [K in keyof Product]: string;
};

// Now StringifiedProduct looks like:

{
  id: string;
  name: string;
  price: string;
}

// 🧪 Example 2: Custom optional version

// Instead of using Partial<T>, you can write:

type OptionalProduct = {
  [K in keyof Product]?: Product[K];
};

// Same result: All fields are optional.


// 🔄 Combining with Generics
// You can make this reusable:

type MakeOptional<T> = {
  [K in keyof T]?: T[K];
};

type OptionalProduct = MakeOptional<Product>;



```Mapped Types B```
// 🔹 Basic Example

type Product = {
  id: number;
  name: string;
  price: number;
};

type ReadonlyProduct = {
  readonly [K in keyof Product]: Product[K];
};

// This creates a new type where all properties in Product are now read-only.
// Equivalent to:

type ReadonlyProduct = Readonly<Product>;

// 🔸 Let's break it down:

readonly [K in keyof Product]: Product[K];

    // K in keyof Product: loop over keys ("id", "name", "price")

    // Product[K]: get the type of that key

    // readonly: adds the readonly modifier to each property


// ✅ Custom Mapped Type Example
// Let’s say we want to create a version of any object where every value is a string.

type Stringify<T> = {
  [K in keyof T]: string;
};

type StringProduct = Stringify<Product>;

// So now:

const strProd: StringProduct = {
  id: "1",
  name: "Shoes",
  price: "99.99",
};


```🔥 Challenge```
// Define a mapped type that makes all fields optional AND readonly.

// Hint: You can combine modifiers like:

readonly [K in keyof T]?: ...

// Your turn:

type SafeProduct = ??? // fill in the mapped type for Product

// Write a type MakeReadonly<T> that makes all properties readonly.

// Write a type MakeNullable<T> that makes all properties accept null as a value.


Type optRead<T> = {
    readonly [K in keyof T]?: string;
}

type SafeProduct = {
    readonly [K in keyof Product]?: Product[K];
}

type MakeReadonly<T> = {
    readonly [K in keyof T]: T[K];
}
type MakeNullable<T> = {
    [K in keyof T]: T[K] | null;
}

example 
type NullableProduct = MakeNullable<Product>;
const prod: NullableProduct = {
    id: null,
    name: "TV",
  };
  