export const find = (keyboard: number[], target: number): number => {
  let time = 0;
  let currentPosition = 0;
  const digits = String(target)
    .split("")
    .map((num) => Number(num));
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    let position = keyboard.slice(currentPosition).indexOf(digit);
    if (position === -1) {
        position = keyboard.length - keyboard.slice(0, currentPosition).reverse().indexOf(digit) - 1;
        time += Math.abs(position - currentPosition) + 1;
    } else {
        position += currentPosition;
        time += Math.abs(position - currentPosition);
    }
    currentPosition = position;
}
return time;
};
