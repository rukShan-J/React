# Assign integer 42 to my_variable
my_variable = 42
print(my_variable)           # Output: 42
print(id(my_variable))       # Print the memory address (id) of 42

# Assign my_other_variable to refer to the same object as my_variable
my_other_variable = my_variable
print(my_other_variable)     # Output: 42 (same value)
print(id(my_other_variable)) # Same memory address as my_variable (both refer to 42)

# Reassign my_variable to a new integer 45
# This creates a new object in memory since integers are immutable
my_variable = 45
print(my_variable)           # Output: 45
print(id(my_variable))       # New memory address (different from the one for 42)
