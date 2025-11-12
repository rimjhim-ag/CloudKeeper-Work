public class MyThread extends   Thread {
   PrintTable p;
   int value;

     MyThread(PrintTable p, int value){
         this.p = p;
         this.value = value;
     }

    @Override
    public void run() {
        try {

            for(int i=1;i<=10;i++)
            { p.print(value, i);}
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
