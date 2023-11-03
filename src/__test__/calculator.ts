export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);

export function calculateTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

