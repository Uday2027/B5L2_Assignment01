# TypeScript Union and Intersection Types (EXAMPLE)

## Union Types (`|`)

In TypeScript, a **Union Type** allows a value to be one of several types. It's useful when a property can accept different types.

### Union Example: Phone Model

```typescript
type PhoneModel = {
  model: string | number; // Can be either string or number
};

const phone1: PhoneModel = { model: "iPhone 15" }; // Valid
const phone2: PhoneModel = { model: 15 }; // Also valid
```

## Intersection Types (`&`)

In Typescript, a **Intersection type** allows a value to be all of the mentioned type. It is useful when there striclty follow the rules or any other have to do things.

```Typescript
interface Batsman {
playerType: "Batsman";
battingAverage: number;
}

interface Bowler {
playerType: "Bowler";
bowlingAverage: number;
}

type AllRounder = Batsman & Bowler; //Intersection

const player: AllRounder = {
playerType: "Batsman", // Must satisfy both interfaces
battingAverage: 45.2,
bowlingAverage: 28.7
};
```

# What are some differences between interfaces and types in TypeScript?

**There are not so many difference in between `interfaces` and `types`**
Interface and Types are almost same, but there is actually some noticable difference.

1. In _interface_ we can **extends** or **implements** as our demand, but in _Type_ we we do **Union** or **intersection**.
2. In _interface_ its quite difficult to handle complex projects, so there is _Types_, its easy to use make the code less complex.
3. There is also a noticeable diffirence while writing the code that is in interface we use **curly braces** directly after define the interfcae but in types we use **curly braces** after the **=** sign.

Let's take an example:

```Typescript
interface Hello{
  Hello: string;
}

type User = {
  hi: string;
}
```
