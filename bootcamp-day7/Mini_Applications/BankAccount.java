public class BankAccount {
    private double amount;
    private static int totalAcc;

    BankAccount(){
        totalAcc++;
    }


    void deposit (double depositAmount){


        try{
        if(depositAmount <0){
            throw new InvalidAmount_Exception("Invalid Amount");
        }
        else{
            amount += depositAmount;
            System.out.println("Amount deposited successful");

        }

          }
        catch (Exception e){
            System.out.println(e.getMessage());
        }



    }
    void withdraw(double withdrawAmount){
              try{
                  if(amount > withdrawAmount){
                      throw new OverDraft_Exception("Amount can't be withdrawed");
                  }
                  else{
                      amount -= withdrawAmount;
                      System.out.println("Withdrawal Successful");
                  }
            }
              catch(Exception e){

                  System.out.println(e.getMessage());
              }


    }

    double getBalance(){
        return amount;
    }



}
