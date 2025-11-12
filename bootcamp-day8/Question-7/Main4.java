import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main4 {

    public static  void main(String[] args){


        PrintTable p = new PrintTable();
        ExecutorService executor = Executors.newFixedThreadPool(2);


        executor.submit(()->{
            for(int i=1;i<=10;i++)
            {
                try {
                    p.print(2, i);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
        }
        );
            executor.submit(()->{
                        for(int i=1;i<=10;i++)
                        {
                            try {
                                p.print(4, i);
                            } catch (InterruptedException e) {
                                throw new RuntimeException(e);
                            }
                        }
                    }
            );
executor.shutdown();


    }
}
