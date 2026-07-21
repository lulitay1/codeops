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
        self.history = []

    @property
    def balance(self):
        return self.__balance
    
    def deposit(self, amount, record=True):
        if amount <= 0:
            raise ValueError("Amount must be positive.")
        self.__balance += amount
        if record:
            self.history.append(("deposit",amount))
            self._notify("Deposit successful")
        

    def withdraw (self, amount, record=True):
        if amount <=0:
            raise ValueError("Amount must be positive")
        elif self.__balance < amount:
            raise ValueError("Balance insufficient")
        else:
            self.__balance -= amount

        if record:
            self._notify("Withdrawal successful")
            self.history.append(("withdraw", amount))

    def statement(self):
        print(f"Account Owner: {self.owner} \n"
              f"Account number: {self.number} \n"
              f"Balance: {self.__balance}")
        
    def subscribe(self, observer):
        self.observers.append(observer)

    def _notify(self, message):
        for observer in self.observers:
            observer.update(message)
    
    def undo_last(self):
        
        transaction, amount= self.history.pop()
        if transaction == "deposit":
            self.withdraw(amount, record=False)
        if transaction == "Withdraw":
            self.deposit(amount, record=False)
        
          
        
class SavingsAccount(Account):
    def __init__(self,owner,number, balance=0):
        super().__init__(owner, number,balance)
        config= BankConfig()
        self.rate = config.interest_rate

    def add_interest(self):
        self.deposit(self.balance *self.rate)

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

    def withdraw(self, amount, record=True):
        if amount <=0:
            raise ValueError("Amount must be positive")
        elif self._Account__balance - amount < -self.overdraft:
            raise ValueError("Amount surpassed overdraft limit")
        else: 
            self._Account__balance -= amount

        if record:
            self._notify("withdrawal successful")
            self.history.append(("withdraw", amount))
    
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

class AccountRegistry:
    def __init__(self):
        self.by_number={}
        self.order=[]

    def add(self,acc):
        self.by_number[acc.number] = acc
        self.order.append(acc.number)

    def find(self, number):
        return self.by_number.get(number)
    
    def list_all(self):
        for item in self.order:
            account=self.by_number[item]
            account.statement()
            print()
            

registry = AccountRegistry()

acc1 = AccountFactory.create("savings", "Abebe", 1001, 2000)
acc1.subscribe(SMSAlert())
acc2 = AccountFactory.create("current","Almaz", 1002)

registry.add(acc1)
registry.add(acc2)

acc1.deposit(500)
acc2.withdraw(300)
print("balance after deposit and withdrawal")
print(acc1.balance)
print(acc2.balance)

acc1.undo_last()
print("balance after undo")
print(acc1.balance)

print("Lists of accounts")
registry.list_all()