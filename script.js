const Modal = {
  open() {
    //abrir modal
    //adiconar a classe active ao modal
    document.querySelector('.modal-overlay').classList.add('active')
  },

  close() {
    //fechar modal
    //remover a classe active do modal
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2022'
  },
  {
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '23/01/2022'
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2022'
  },
  {
    id: 4,
    description: 'App',
    amount: 400000,
    date: '23/01/2022'
  }
]

const Transaction = {
  all: transactions,

  incomes() {
    let income = 0;

    Transaction.all.forEach(transaction => {
      if(transaction.amount > 0) {
        income += transaction.amount;
      }
    })

    return income;
  },
  expenses() {
    let expense = 0;

    Transaction.all.forEach(transaction => {
      if(transaction.amount < 0) {
        expense += transaction.amount;
      }
    })

    return expense;
  },
  total() {
    return Transaction.incomes() + Transaction.expenses()
  }
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransection(transaction)

    DOM.transactionsContainer.appendChild(tr)

  },

  innerHTMLTransection(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense"

    const amount = Utils.formatCurrency(transaction.amount)


    const html = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Remove transaction">
      </td>
    `
    return html
  },

  updateBalance() {
    document
        .getElementById('income-display')
        .innerHTML = Utils.formatCurrency(Transaction.incomes())
    document
        .getElementById('expense-display')
        .innerHTML = Utils.formatCurrency(Transaction.expenses())
    document
        .getElementById('total-display')
        .innerHTML = Utils.formatCurrency(Transaction.total())
  }
}

const Utils = {
  formatCurrency(value){
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "")

    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
    })

    return signal + value
  }
}

transactions.forEach(function(transaction){
  DOM.addTransaction(transaction)
})

DOM.updateBalance();

