function digitalRoot(n) {
    while (n >= 10) {
      let str = String(n);
      let chisla = str.split('');
      let sum = 0;
      for (let i = 0; i < chisla.length; i++) {
        sum += Number(chisla[i]);
      }
      n = sum;
    }
    
    return n;
  }