export const find = (keyboard: number[], target: number): number => {
  let time = 0;
  let currentPosition = 0;
  const digits = String(target)
    .split("")
    .map((num) => Number(num));
  if (keyboard[0] === 0) { keyboard.shift(); }

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    let position = keyboard.indexOf(digit, currentPosition);
    if (position === -1) {
      position =
        keyboard.length - keyboard.slice().reverse().indexOf(digit) - 1;
      time += Math.abs(position - currentPosition) + 1;
    } else {
      time += Math.abs(position - currentPosition);
    }
    currentPosition = position;
  }
  return time;
};
