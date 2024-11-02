function enough(cap, on, wait) {
    let res = cap - on;
     if( res > wait)
     {
      return 0 ;
     }
     else
     {
      return Math.abs(wait - res);
     }
    }