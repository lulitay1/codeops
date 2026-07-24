customer={}
total = 0 
try: 
    with open("transaction.txt", "r") as f:
        for line in f:
            name, amount = line.strip().split(",")
            amount=float(amount)
            customer[name] = customer.get(name, 0) + amount
            total+= amount
except FileNotFoundError:
    print("No transaction file found")
else:
    print(f"total: {total} ETB")

    customer_copy = customer.copy()

    while customer_copy:

        highest_name = ""
        highest_spent = -1

        for name, spent in customer_copy.items():
            if spent > highest_spent:
                highest_spent = spent
                highest_name = name
        print(f"{highest_name}: {highest_spent} ETB")

        del customer_copy[highest_name]

print(" \n List of customers")
for name, spent in customer.items():
    print(f"{name} : {spent} ETB")
    
with open("report.txt", "w") as file :
    for name, spent in customer.items():
        file.write(f"{name}: {spent} ETB\n")
   
