class BankConfig:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.interest_rate = 0.05
            cls._instance.overdraft_limit = 1000
        return cls._instance
    
class AccountFactory:

    @staticmethod
    def create(kind, owner, number, balance=0):
        if kind == "savings":
            return SavingsAccount(owner, number, balance)
        elif kind == "current":
            return CurrentAccount(owner, number, balance)
        else:
            raise ValueError("This kind of account does not exist")


class Account:

    def __init__(self, owner, number, balance=0):
        self.owner=owner
        self.number=number
        self.__balance=balance
        self.observers = []

    @property
    def balance(self):
        return self.__balance
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive.")
        self.__balance += amount
        self._notify("Deposit successful")

    def withdraw (self, amount):
        if amount <=0:
            raise ValueError("Amount must be positive")
        elif self.__balance < amount:
            raise ValueError("Balance insufficient")
        else:
            self.__balance -= amount
        self._notify("Withdrawal successful")

    def statement(self):
        print(f"Account Owner: {self.owner} \n"
              f"Account number: {self.number} \n"
              f"Balance: {self.__balance}")
        
    def subscribe(self, observer):
        self.observers.append(observer)

    def _notify(self, message):
        for observer in self.observers:
            observer.update(message)
    
        
class SavingsAccount(Account):
    def __init__(self,owner,number, balance=0):
        super().__init__(owner, number,balance)
        config= BankConfig()
        self.rate = config.interest_rate

    def add_interest(self):
        self.deposit(self.balance *self.rate)
        self._notify("Deposit successful")

    def statement(self):
        print(f"Account owner: {self.owner}\n"
              f"Account type: Saving Account\n"
              f"Account number: {self.number}\n"
              f"Balance: {self.balance}")    

class CurrentAccount(Account):

    def __init__(self, owner, number,balance=0):
        super().__init__(owner, number,balance)
        config=BankConfig()
        self.overdraft = config.overdraft_limit

    def withdraw(self, amount):
        if amount <=0:
            raise ValueError("Amount must be positive")
        elif self._Account__balance - amount < -self.overdraft:
            raise ValueError("Amount surpassed overdraft limit")
        else: 
            self._Account__balance -= amount
            self._notify("withdrawal successful")
    
    def statement(self):
        print(f"Account owner: {self.owner}\n"
              f"Account type: Current Account\n"
              f"Account number: {self.number}\n"
              f"Balance: {self.balance}")  
class SMSAlert:

    def update(self, message):
        print(f"SMS: {message}") 

class AuditLog:

    def update(self,message):
        print(f"Audit: {message}")
    
acc2=AccountFactory.create("savings","Abebe", 7685,2000)
acc2.subscribe(SMSAlert())
acc2.subscribe(AuditLog())
acc2.deposit(100)
        