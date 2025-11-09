public class Student {

    String name;
    int Subject1;
    int Subject2;
    int Subject3;

    Student(String name, int Subject1, int Subject2, int Subject3){
        this.name = name;
        this.Subject1 = Subject1;
        this.Subject2 = Subject2;
        this.Subject3 = Subject3;


    }

    int getTotalMarks(){
        return this.Subject1 + this.Subject2 + this.Subject3;
    }
    void getAverageMarks(){

        System.out.printf("Average: %.2f%n", (double)getTotalMarks()/3);

    }

}
