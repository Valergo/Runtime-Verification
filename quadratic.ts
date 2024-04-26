// Parses a comma-separated input string into a number array. For example
// for the input "1,2,3.45" we get the array [1, 2, 3.45]. Throws the error
// "Wrong number of arguments" if the input does not contain exactly three
// numbers. Throws the error "Invalid number" if the input cannot be parsed
// as numbers.

//for (int i = 0; i < words.length; i++) {}
//sepa_nums.forEach(function (value) {})

export function parse(input: string): number[] {
  let conv_nums: number[] = [];
  const count_words: number = input.split(",").length;

  // Count words and check whether they equal 3
  if (count_words == 3){
    const sepa_nums = input.split(",");

    for (let i = 0; i < sepa_nums.length; i++){
      const nums: string = sepa_nums[i].replace(/\s+/g, '');
      conv_nums[i] = parseFloat(nums);
      console.log(conv_nums);

      // Check the type of conv_nums whether they numbers
      if (!Number(conv_nums[i]) ){  // could alos be solved with: conv_nums[i].indexOf(NaN) != -1
        throw new Error("Invalid number");
      };
    };
  }else{
    throw new Error("Wrong number of arguments!");
  };


  return conv_nums;
  }

//====================================================================================================================================================================//

// The actual root computation: Given the quadratic equation
//========================================================================
// f(x) = a*x*x + b*x + c this function finds those x where f(x) = 0.
// Throws the error "Infinitely many roots" if f(x) = 0 is true for
// more than two values. Returns the result as number array
// containing all roots.
export function compute(a: number, b: number, c: number): number[] {
  // fx = ax^2 + bx +c


  const first_term:number = (a + b + c)/a;
  console.log(first_term)


  return [];
}
//compute(conv_nums)
// Formats a given number as string using fix-width with 4 digits.
export function format(num: number): string {
  // TODO Implement
  return "";
}

// Converts an array of numbers into a string. Uses fix-width with 4 digits.
// For example for the input [2, Math.PI] we get "2.0000,3.1416". Uses the
// function format defined above.
export function toString(roots: number[]): string {
  // TODO Implement using format
  return "";
}

// Computes the roots of a quadratic equation. The parameters of the
// quadratic equation f(x) = a*x*x + b*x + c are given as string
// "a,b,c". The result is a comma-separated string containing the roots,
// which is all x where f(x) = 0 holds. The roots are formated in fix-width
// with four digits. For example for the input "1,1,-2" we get
// "-2.0000,1.0000".
export function roots(args: string): string {
  // TODO Implement using parse, compute and toString
  return "";
}
