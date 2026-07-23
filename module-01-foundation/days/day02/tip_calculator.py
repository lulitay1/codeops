bill_total = 1200
people = 5

def split_bill(total, people,tip_rate= 0.10):
    tipped_total=total+(total*tip_rate)
    return  tipped_total / people

print ("Amount per person: ", split_bill(bill_total, people), "ETB")



