public class Exception_Propagation {

    public static void main(String[] args){


        m1(0,0);
    }

   static void m1(int a, int b){

        try{

          m2(a,b);
        }
        catch(ArithmeticException e){
            System.out.println("Caught Exception in m1 :" + e.getMessage());
        }
    }

   static void m2(int a, int b) throws ArithmeticException{
             m3(a,b);
    }

    static void  m3(int a, int b) throws  ArithmeticException{

          int r =  a/b;

    }
}
