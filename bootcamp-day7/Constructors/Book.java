public class Book {

    private final String  title ;
    private final String  author;
    int price;


    Book(String title, String author, int price){
        this.title = title;
        this.price = price;
        this.author = author;
    }

    void getBook(){

        System.out.println(title + " " + author+ " " + price);
    }


}
