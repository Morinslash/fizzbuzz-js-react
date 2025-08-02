export function fizzBuzz(number) {
    const result = [
        [3, 'Fizz'],
        [5, 'Buzz']
    ].reduce((str, [divisor, word]) =>
            str + (number % divisor === 0 ? word : ''),
        '');

    return result || number.toString();
}