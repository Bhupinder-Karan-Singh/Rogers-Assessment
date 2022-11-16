import java.util.Scanner;

public class test1 {
	public static int a = 1, b = 1;
	// function to print the pyramid triangle with height
	public static void printTriangle(int height){
		if ((int) Math.sqrt(Math.pow((a - (2 * height - 1) * (b - 1) - height), 2))<b) {
            System.out.print("*");
        } else {
            System.out.print(" ");
        }
        if ((a - (2 * height - 1) * (b - 1)) % (2 * height - 1) == 0) {
            System.out.print("\n");
            b++;
        }
        if (a++<height * (2 * height - 1))
        	printTriangle(height);
    }
	public static void main(String[] args) {
		int height = 10;  
        printTriangle(height);
	}
}
