

public class Multiplication {

    public void getTable(int num){
   System.out.println("Table of " + num );
        for(int i=0;i<10;i++){

            String ans = String.format("%d * %d = %d", num,i,num*i);
            System.out.println(ans);
        }
    }
}
