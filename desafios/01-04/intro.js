
// Irei usar ponto e vírgula.

// ************************ Primeira tentativa ************************
// function categorizeByTypes() {
//   for(let i = 0; i < user.transactions.length; i++) {
//     if (user.transactions[i].type == 'credit') {
//       credit.push(user.transactions[i].value);
//     } else if (user.transactions[i].type == 'debit') {
//       debit.push(user.transactions[i].value);
//     }
//   }
// };

// function getHigherTransactionByType(type) {
//   categorizeByTypes();
//   var lastNumber = 0;
//   if (type == 'credit') {
//     for (let i = 0; i < credit.length; i++) {
//       if (lastNumber < credit[i]) {
//         lastNumber = credit[i];
//       }
//     }
//     return lastNumber
//   } else if (type == 'debit') {
//     for(let i = 0; i < debit.length; i++) {
//       if (lastNumber < debit[i]) {
//         lastNumber = debit[i];
//       }
//     }
//     return lastNumber
//   }
// };
// ************************ Primeira tentativa ************************

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(object) {

  user.transactions.push(object);

  if (object.type == 'credit') {
    user.balance += object.value;
  } else if (object.type == 'debit') {
    user.balance -= object.value;
  }
};


function getHigherTransactionByType(type) {
  let oldValue = 0;
  let oldObject = {};

  for(let i = 0; i < user.transactions.length; i++) {
    if (user.transactions[i].type == type) {
      if (oldValue < user.transactions[i].value) {
        oldValue = user.transactions[i].value;
        oldObject = user.transactions[i];
      }
    }
  }
  return oldObject
}




// function getAverageTransactionValue() {

// };

// function getTransactionsCount() {

// };



createTransaction({
  type: 'credit',
  value: 50.5
});

createTransaction({
  type: 'debit',
  value: 20.5
});

createTransaction({
  type: 'debit',
  value: 22
});

createTransaction({
  type: 'credit',
  value: 72.5
});

createTransaction({
  type: 'credit',
  value: 73
});






console.log(user);
console.log(getHigherTransactionByType('credit'));