/*////////////////////////////
// O(1) Example
///////////////////////////*/ 

const s = 4 + 8; // O(1)

/*////////////////////////////
// O(n) Example
///////////////////////////*/ 

// O(n)
let y = 0;
for (let i = 0; i < n; i++) {
  // O(1)
  s += 1; 
} // runtime: O(n * 1) = O(n)


/*////////////////////////////
// O(n^2) Example
///////////////////////////*/ 

for(let i = 0; i < n; i++) {
  for (let j = 0; j < y; j++) {
    // some code
  }
} // runtime: O(n^2)

/*//////////////////////////////////
// O(n) Example:Non-nested for loops
//////////////////////////////////*/ 

for(let i = 0; i < n; i++) {}
for(let j = 0; j < n; j++) {}
// runtime: O(n + n) => O(2n) => O(n)

/*////////////////////////////
// O(logn) Example
///////////////////////////*/ 

// O(logn)
while (n > 0) {
  n /= 2; 
}

// O(n)
for (let i = 0; i = n; i++) {
  // O(logn)
  while(n > 0) {
    n /= 2;
  }
} // runtime: O(n * logn) => O(nlogn)