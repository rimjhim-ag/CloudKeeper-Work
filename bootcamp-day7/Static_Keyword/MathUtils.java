public class MathUtils {


    static void max(int... nums) {


        int result = nums[0];
        for (int n : nums) {
            result = Math.max(result, n); // Using built-in Math.max
        }

        System.out.println("Max number is: " + result);
    }


    static void min(int... nums) {


        int result = nums[0];
        for (int n : nums) {
            result = Math.min(result, n); // Using built-in Math.min
        }

        System.out.println("Min number is: " + result);
    }


    static void average(int... nums) {

        int sum = 0;
        for (int n : nums) {
            sum += n;
        }

        double avg = (double) sum / nums.length;
        System.out.println("Average is: " + avg);
    }


}
