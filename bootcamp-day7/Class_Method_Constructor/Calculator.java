public class Calculator {


    double add (double a, double b){


        return a+b;
    }

    double subtract(double a, double b){

        if(a>b){
            return a-b;
        }

        return b-a;
    }

    double multiply(double a, double b){

        return a * b;
    }

    double divide (double a, double b){
        return a/b;
    }
}
