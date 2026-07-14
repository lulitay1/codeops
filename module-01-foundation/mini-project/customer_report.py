customers = [
    ("Almaz", 1500), ("Dawit", 700), ("Tigist", 2000),
    ("Hanna", 200), ("Samuel", 450),
]

def tier(balance):
    if balance >= 1000:
        return "Premium"
    elif balance >= 500:
        return "Standard"
    else:
        return "Basic"

basic_count=0
standard_count=0
premium_count=0    
for name, balance in customers:
    customer_tier = tier(balance)
    print(f"{name} --> {customer_tier} : {balance}ETB")
    if customer_tier == "Premium":
        premium_count += 1
    elif customer_tier == "Standard":
        standard_count += 1
    else:
        basic_count += 1

print("\nNumber of customers in each tier:")
print(
    f"Premium = {premium_count} customers \n"
    f"Standard = {standard_count} customers \n"
    f"Basic = {basic_count} customers"
    )