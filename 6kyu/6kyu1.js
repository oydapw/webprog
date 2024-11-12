function expandedForm(num) {
    const nums = String(num);
    let str = [];
  
    for (let i = 0; i < nums.length; i++) {
      const chislo = nums[i];
      if (chislo !== '0') {
        str.push(chislo + '0'.repeat(nums.length - i - 1));
      }
    }
  
    return str.join(' + ');
  }