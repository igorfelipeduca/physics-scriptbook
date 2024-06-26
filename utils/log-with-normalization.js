// Uso: import { logNormalizado } from "./utils/log-with-normalization";
// logNormalizado({ forcaNormal, massa, forcaCinetica, atrito, aceleracaoMaxima });

export function normalizedLog(obj) {
  const normalizedObj = {};

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      normalizedObj[key] = parseFloat(obj[key].toFixed(2));
    } else {
      normalizedObj[key] = obj[key];
    }
  }

  console.log(normalizedObj);
}
