function multiples(m, n) {
    let multiples = [];
    for (let i = 1; i <= m; i++) {
      multiples.push(i * n);
    }
    return multiples;
  }
  console.log(multiples(5, 3));