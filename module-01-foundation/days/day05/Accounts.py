class Account:

    def __init__(self, owner, number, balance=0):
        self.owner=owner
        self.number=number
        self.__balance=balance

    @property
    def balance(self):
        return self.__balance
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive.")
        self.__balance += amount

    def withdraw (self, amount):
        if amount <=0:
            raise ValueError("Amount must be positive")
        elif self.__balance < amount:
            raise ValueError("Balance insufficient")
        else:
            self.__balance -= amount

    def statement(self):
        print(f"Account Owner: {self.owner} \n"
              f"Account number: {self.number} \n"
              f"Balance: {self.__balance}")
        
class SavingsAccount(Account):
    def __init__(self,owner,number, balance=0,rate=0.05):
        super().__init__(owner, number,balance)
        self.rate = rate

    def add_interest(self):
        self.deposit(self.balance *self.rate)

    def statement(self):
        print(f"Account owner: {self.owner}\n"
              f"Account type: Saving Account\n"
              f"Account number: {self.number}\n"
              f"Balance: {self.balance}")    

class CurrentAccount(Account):

    def __init__(self, owner, number,balance=0, overdraft=1000):
        super().__init__(owner, number,balance)
        self.overdraft = overdraft

    def withdraw(self, amount):
        if amount <=0:
            raise ValueError("Amount must be positive")
        elif self._Account__balance - amount < -self.overdraft:
            raise ValueError("Amount surpassed overdraft limit")
        else: 
            self._Account__balance -= amount
    
    def statement(self):
        print(f"Account owner: {self.owner}\n"
              f"Account type: Current Account\n"
              f"Account number: {self.number}\n"
              f"Balance: {self.balance}")   


    
acc1=CurrentAccount("Abebe", 7685,5000)
acc1.statement()
acc1.withdraw(400)
print(acc1.balance)