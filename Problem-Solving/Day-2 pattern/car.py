class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year
    
    def start(self):
        print(f"{self.brand} car started")

    # creating an object outside the class definition
my_car = Car("Toyota", 2026)
my_car.start()