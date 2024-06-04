export function getPX(mass, gravity, angle) {
  return mass * gravity * Math.sin(angle);
}
