public class Nested_Exception {

    public static void main(String[] args){

           try{
               try{
                   throw new ArithmeticException("Arithmetic Exception");
               }
              catch (ArithmeticException e){
                     System.out.println("Caught Inner: " + e.getMessage() );
              }

               throw new ArrayIndexOutOfBoundsException("Index out of bounds");
           }
           catch (ArrayIndexOutOfBoundsException e){
                 System.out.println("Caught Outer : " +e.getMessage());
           }
    }

}
