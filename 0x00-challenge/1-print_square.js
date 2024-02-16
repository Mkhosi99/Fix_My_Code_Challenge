#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1)
}

/*
   This line parses the first command-line argument (process.argv[2]) as an integer using parseInt(). 
   This argument represents the size of the square to be printed.
*/
const size = parseInt(process.argv[2]);

/*
   This block of code checks if the parsed size is NaN (Not-a-Number). 
   If the argument is not a valid number, 
   it prints an error message to the standard error stream indicating an invalid size argument, 
   and exits the script with a status code of 1.
*/
if (isNaN(size)) {
    process.stderr.write("Invalid size argument. Please provide a valid number.\n");
    process.exit(1);
}

for (let i = 0 ; i < size ; i ++) {
    for (let j = 0 ; j < size ; j ++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
