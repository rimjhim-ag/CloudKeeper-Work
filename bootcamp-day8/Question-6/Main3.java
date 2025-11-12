public class Main3 {

    public static void main(String[] args){
       PrintTable p = new PrintTable();
        MyThread Thread1 = new MyThread(p,2);
        MyThread Thread2 = new MyThread(p,4);

        Thread1.start();
        Thread2.start();

    }
}
