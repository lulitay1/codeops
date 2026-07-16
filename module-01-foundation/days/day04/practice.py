class Account:

    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number=number
        self.__balance=balance

    @property
    def balance(self):
            return self.__balance
        
    def deposit(self, amount):
            if amount <= 0:
                raise ValueError("Amount must be positive")
            self.__balance += amount

    def withdraw(self, amount):
            if amount > self.__balance:
                raise ValueError("Balance insufficient for the withdrawal")
            elif amount <= 0:
                raise ValueError("Amount must be positive")
            else:
                self.__balance -= amount
            
    def statement(self):
            print(f"Account owner: {self.owner}\n"
                  f"Account number: {self.account_number}\n"
                  f"Balance: {self.__balance}")
            
acc1=Account("Abebe", 1011 )
print(acc1.owner)
acc1.deposit(1500)
acc1.statement()



            