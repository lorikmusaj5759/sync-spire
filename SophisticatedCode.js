/*
   Filename: SophisticatedCode.js

   Description: This code is a simulation of a banking system, where users can create accounts, make transactions, and perform various banking operations.

   Author: Jane Doe

   Date: 2021-01-01
*/

// Account Class
class Account {
  constructor(accountNumber, accountName, balance) {
    this.accountNumber = accountNumber;
    this.accountName = accountName;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({
        type: "Deposit",
        amount: amount,
      });
      console.log("Deposit successful!");
    } else {
      console.log("Invalid amount!");
    }
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({
        type: "Withdrawal",
        amount: amount,
      });
      console.log("Withdrawal successful!");
    } else {
      console.log("Insufficient balance!");
    }
  }

  getTransactionHistory() {
    console.log(`Transaction History for Account ${this.accountNumber}:`);
    for (let transaction of this.transactions) {
      console.log(
        `${transaction.type} of ${transaction.amount} on ${new Date()}`
      );
    }
  }
}

// Bank Class
class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(accountNumber, accountName) {
    if (this.getAccount(accountNumber) === null) {
      const account = new Account(accountNumber, accountName, 0);
      this.accounts.push(account);
      console.log("Account created!");
    } else {
      console.log("Account number already exists!");
    }
  }

  getAccount(accountNumber) {
    for (let account of this.accounts) {
      if (account.accountNumber === accountNumber) {
        return account;
      }
    }
    return null;
  }

  makeTransaction(senderAccountNumber, receiverAccountNumber, amount) {
    const senderAccount = this.getAccount(senderAccountNumber);
    const receiverAccount = this.getAccount(receiverAccountNumber);

    if (senderAccount !== null && receiverAccount !== null) {
      if (senderAccount.balance >= amount) {
        senderAccount.withdraw(amount);
        receiverAccount.deposit(amount);
        console.log("Transaction successful!");
      } else {
        console.log("Sender has insufficient balance!");
      }
    } else {
      console.log("Invalid account number(s)!");
    }
  }

  getBankBalance() {
    let totalBalance = 0;
    for (let account of this.accounts) {
      totalBalance += account.balance;
    }
    console.log(`Total Balance in the Bank: ${totalBalance}`);
  }
}

// Example Usage
const bank = new Bank();

bank.createAccount(111, "John Doe");
bank.createAccount(222, "Jane Smith");

const johnAccount = bank.getAccount(111);
const janeAccount = bank.getAccount(222);

johnAccount.deposit(500);
johnAccount.withdraw(200);
janeAccount.deposit(1000);

bank.makeTransaction(222, 111, 700);
bank.getTransactionHistory();
bank.getBankBalance();