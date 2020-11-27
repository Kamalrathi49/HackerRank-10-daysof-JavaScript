function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

     let PI = Math.PI
     const r = readLine()
    // Print the area of the circle:
    
     var area = console.log(PI * (r*r));
    
    // Print the perimeter of the circle:
    
     var perimeter =  console.log(2*PI*r);

}
{
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}