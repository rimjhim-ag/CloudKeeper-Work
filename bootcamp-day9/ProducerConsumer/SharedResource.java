import java.util.LinkedList;
import java.util.Queue;

public class SharedResource {


    Queue<Integer> buffer = new LinkedList<>();



    public synchronized void produce(int val) throws InterruptedException {

         while(buffer.size() == 5){
             wait();
         }

         System.out.println("Producer generates" + val);


         buffer.add(val);


         notify();


    }
    public synchronized void consume() throws InterruptedException {

        while(buffer.size() == 0){
            wait();
        }



        System.out.println("Consumer prints" + buffer.remove());


        notify();


    }


}
