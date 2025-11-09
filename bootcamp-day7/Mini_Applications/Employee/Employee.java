package Employee;

import java.util.ArrayList;

abstract class Employee {
    private String name;
    private int age;

    public Employee(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public abstract double getSalary();

    @Override
    public String toString() {
        return "Employee [name=" + name + ", age=" + age + "]";
    }
}

class FullTimeEmployee extends Employee {
    public FullTimeEmployee(String name, int age) {
        super(name, age);
    }

    @Override
    public double getSalary() {
        return 45000;
    }
}

class PartTimeEmployee extends Employee {
    public PartTimeEmployee(String name, int age) {
        super(name, age);
    }

    @Override
    public double getSalary() {
        return 15000;
    }
}

class Main {
    public static void main(String[] args) {

        Employee e1 = new FullTimeEmployee("Rimjhim", 23);
        Employee e2 = new PartTimeEmployee("Amit", 21);
        System.out.println(e1.getSalary());
        System.out.println(e2.getSalary());
    }
}
