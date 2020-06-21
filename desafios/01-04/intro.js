
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
  return console.log(oldObject)
}


function getAverageTransactionValue() {
  var total = user.transactions.length;
  var sum = 0;

  for(let i = 0; i < total; i++) {
    sum += user.transactions[i].value;
  }

  return console.log(sum / total);
};

function getTransactionsCount() {
  var counter = { credit: 0, debit: 0 };

  for (let i = 0; i < user.transactions.length; i++) {
    if (user.transactions[i].type == 'debit') {
      counter.debit += 1;
    } else if (user.transactions[i].type == 'credit') {
      counter.credit += 1;
    }
  }

  return console.log(counter)

};



createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }