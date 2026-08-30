# def display_employees(employee, name, indent=0):
#     print(" " * indent + name )

#     for subordinate in employee[name]:
#         display_employees(employee, subordinate, indent + 4)

# employees = {
#     "Abebe":["Kebede", "Belete"],
#     "Kebede": ["Almaz", "Dawit"],
#     "Almaz": ["Melat"]
#     }

# display_employees(employees, "Abebe")



students={}
def find_by_id(students, student_id):
    lo=0
    hi=len(students)-1
    while lo <= hi:
            mid= hi+lo//2
            if students[mid]==student_id:
                return students[mid]
            elif students[mid] < student_id:
                lo= mid+1
            else:
                hi= mid-1
    return None

def find_by_name(students,name):
    for student in students:
        if student[name] == name:
            return student
    return None

students =[{"id":01, "Name": "Abebe"},
           {"id":02, "Name": "Abebe"}
           ]

    
            

                  
