function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    return word1.join('') === word2.join('');
};

console.log(arrayStringsAreEqual(["a", "bc"], ["ab", "c"]));