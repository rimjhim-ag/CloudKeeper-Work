public class SharedResource {


    private int buffer_size = 0;
    private int data;

    public synchronized void produce(int val) throws InterruptedException {

         while(buffer_size == 5){
             wait();
         }

         System.out.println("Producer generates" + val);
         data = val;

         buffer_size++;


         notify();


    }
    public synchronized void consume() throws InterruptedException {

        while(buffer_size == 0){
            wait();
        }

        int consume = data;

        System.out.println("Consumer prints" + consume);
        buffer_size--;

        notify();


    }


}
