# Example of Union and Intersection

# Union:

in `Typescript, Union` used in type . It says that either this or that means , suppose there is model of Phone, so someones mobile model can contain only number at the same time someones mobile model can have string as model name, in this case we can use union.

## Union Example:

`type PhonesModel = {
    model: string|number
}`

# Intersection:

In intersection we have to do the opposite of `union`, Here we cant choose this or that, here we have ensuse both type or object or interface or whatever given;

## Intersection Example:

`interface BatsMan{
PlayerIdentityBatsman: "BatsMan";

}

interface Bowler{
PlayerIdentityBaller: "Baller";
}
type player = BatsMan&Baller;

type team:player = {
PlayerIdentityBatsman:"BatsMan",
PlayerIdentityBaller: "Baller"
}
`
