import Card from "./Card.js";

test("first card is three of clubs", () => {
    expect(Card.stringify(0)).toBe("Three of Clubs");
})