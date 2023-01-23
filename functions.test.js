const { returnTwo, greeting, add } = require("./functions")

test('function should return 2', () => {
    expect(returnTwo()).toBe(2)
})

test('should return hello + name param', () => {
    expect(greeting('James')).toBe("Hello, James.")
    expect(greeting('Jill')).toBe("Hello, Jill.")
})

test('should add both number params together', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)
})