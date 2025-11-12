import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main1 {


    public static void main(String[] args){

            SharedResource s = new SharedResource();

        ExecutorService executor = Executors.newFixedThreadPool(2);

        executor.submit(()->{
             for(int i=1;i<=50;i++){
                 try {
                     s.produce(i);
                 } catch (InterruptedException e) {
                     throw new RuntimeException(e);
                 }
             }
        });
        executor.submit(()->{
            for(int i=1;i<=50;i++){
                try {
                    s.consume();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
        });

        executor.shutdown();

    }
}
