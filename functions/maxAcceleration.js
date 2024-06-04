// função usada para descobrir a aceleração máxima de um objeto
// criada a partir da segunda lei de Newton: Fr = m * a
// exemplo de uso:
// activeForce: força normal aplicada sobre o objeto
// reverseForce: força com sentido inverso à força normal aplicada sobre o objeto
// exemplo: getMaxAcceleration(força normal aplicada ao objeto, massa do objeto)

export function getMaxAcceleration(activeForce, reverseForce) {
  return activeForce / reverseForce;
}
