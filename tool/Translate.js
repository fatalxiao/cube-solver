'use strict';

let value = 'YBRYROBGBRWGBBORYBWYWGYWGGWYOGGORGWRBBOYGWWROYROBWOYRO';
value = value.replace(/R/g, 'U');
value = value.replace(/B/g, 'R');
value = value.replace(/Y/g, 'F');
value = value.replace(/O/g, 'D');
value = value.replace(/G/g, 'L');
value = value.replace(/W/g, 'B');
console.log(value);
