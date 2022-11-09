import java.util.Scanner;

public class test1 {
	// function to print the pyramid triangle with height
	public static void printTriangle(int height){
		// loop to print rows with height upto n rows
        for (int i=0; i<height; i++){
        	// loop to create space before the first star in a row
            for (int j=height-i; j>1; j--){
                System.out.print(" ");
            }
            // loop to create the columns according to outer loop
            for (int j=0; j<=i; j++ ){
                System.out.print("* ");
            }
            System.out.println();
        }
    }

	public static void main(String[] args) {
		int height = 5;  
        printTriangle(height);
	}
}
