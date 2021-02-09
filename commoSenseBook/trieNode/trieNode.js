class TrieNode {
    constructor() {
        this.children = {};
        // this.children = {
        //     'a': new TrieNode()
        // }
    }
}

class TrieClass {
    constructor() {
        this.root = new TrieNode();
    }

    search(word) {
        var currentNode = this.root;

        for ( let i = 0; i < word.length; i++ ) {
            if (currentNode.children[word[i]]) {
                currentNode = currentNode.children[word[i]];
            } else {
                return null;
            }
        }

        return currentNode;
    } 

    insert(word) {
        var currentNode = this.root;

        for ( let i = 0; i < word.length; i++ ) {
            if (currentNode.children[word[i]]) {
                currentNode = currentNode.children[word[i]];
            } else {
                var newNode = new TrieNode();
                currentNode.children[word[i]] = newNode;

               currentNode = newNode;
            }
        }

        currentNode.children['*'] = null;
    }

    collectAllWords(node, word='', words=[]) {
        let currentNode = (node) ? node : this.root;

        console.log(currentNode);

        for (const prop in currentNode.children) {
            console.log(prop)
            if (prop === '*') {
                words.push(word);
            } else {
                this.collectAllWords(currentNode.children[prop], word + prop, words)
            }
        }

        return words;
    }

    autocomplete(prefix) {
        let currentNode = this.search(prefix);
        if (!currentNode) {
            return false;
        }
        return this.collectAllWords(currentNode);
    }
}


var t = new TrieClass();
// console.log(t)
t.insert('cat')
t.insert('cater')
t.insert('cattering')
t.insert('catwoman')
t.insert('cabba')
t.insert('aegc')
t.insert('ace')


// t.insert('c')
// t.insert('a')
// t.insert('t')
// console.log(t.root.children['c'].children['a'].children['t'])

let words = t.collectAllWords();
console.log(words)

let searchWords = t.autocomplete('cat');
console.log(searchWords)















