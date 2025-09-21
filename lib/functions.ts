export function getCurrentYear(): string {
  return new Date().getFullYear().toString();
}

export function getCurrentDateLong(): string {
  const date = new Date();
  const estDate = new Date(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const month = estDate.toLocaleString("en-US", { month: "long" });
  const day = estDate.getDate();
  const year = estDate.getFullYear();

  return `${month} ${day}, ${year}`;
}

export const getRandomColor = (prevColor: string = "") => {
  const colors = [
    'red-200',
    'blue-200', 
    'green-200',
    'yellow-100',
    'purple-200',
    'pink-200',
    'orange-200',
    'teal-200',
    'indigo-200',
    'rose-200'
  ];

  let newColor = colors[Math.floor(Math.random() * colors.length)];
  // If a previous color exists and it's the same as the newColor, pick another one
  while(newColor === prevColor) {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  }
  return newColor;
};