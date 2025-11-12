class PrintTable {

    private boolean turnFor2 = true;

    synchronized void print(int a, int i) throws InterruptedException {
        while ((a == 2 && !turnFor2) || (a == 4 && turnFor2)) {
            wait();
        }

        System.out.println(a + " * " + i + " = " + (a * i));


        turnFor2 = !turnFor2;

        notifyAll();
    }
}