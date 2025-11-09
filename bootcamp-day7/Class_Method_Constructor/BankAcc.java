public class BankAcc {

    private final int accountNumber;
    private final String holderName;
    int deposit;


    BankAcc(String holderName, int accountNumber, int deposit){
          this.holderName = holderName;
          this.accountNumber = accountNumber;
          this.deposit = deposit;
    }

    void getCustomer(){

        System.out.println(
                "HolderName: " + holderName + " " +
                        "Deposit: " + deposit + " " +
                        "AccountNumber: " + accountNumber
        );
    }
}
