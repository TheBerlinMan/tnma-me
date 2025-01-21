export function getCurrentYear(): string {
  return new Date().getFullYear().toString();
}

export function getCurrentDateLong(): string {
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}
