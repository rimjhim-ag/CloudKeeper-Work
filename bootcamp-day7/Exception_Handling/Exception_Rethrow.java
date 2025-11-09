public class Exception_Rethrow {

    public static void main(String[] args){

        try{
            try{
                throw new ArithmeticException("Arithmetic Exception");
            }
            catch (ArithmeticException e){
                System.out.println("Caught Inner: " + e.getMessage() );
                throw e;
            }


        }
        catch (Exception e){
            System.out.println("Caught Outer : " +e.getMessage());
        }
    }

}
