class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = () => {
      this.end = true;
    };
    this.isEnd = () => {
      return this.end;
    };
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      // create key
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  isWord(word) {
    let node = this.root;

    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }

    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  }

  print() {
    let words = new Array();

    let search = (node, string) => {
      if (node.keys.size !== 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }

        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };

    search(this.root, new String());
    return words.length > 0 ? words : null
  }
}

const myTrie = new Trie();
myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dark");
myTrie.add("do");
myTrie.add("dorm");
myTrie.add("send");
myTrie.add("sense");

console.log(myTrie.isWord("doll"));
console.log(myTrie.isWord("chelsea"));
