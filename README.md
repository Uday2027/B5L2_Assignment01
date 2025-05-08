# TypeScript Union and Intersection Types

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

```interface Batsman {
playerType: "Batsman";
battingAverage: number;
}

interface Bowler {
playerType: "Bowler";
bowlingAverage: number;
}

type AllRounder = Batsman & Bowler;

const player: AllRounder = {
playerType: "Batsman", // Must satisfy both interfaces
battingAverage: 45.2,
bowlingAverage: 28.7
};
```
