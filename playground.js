// Uma corda de massa desprezível pode suportar
// uma força tensora máxima de 200N sem se
// romper. Um garoto puxa, por meio desta corda
// esticada horizontalmente, uma caixa de 500N de
// peso ao longo de piso horizontal. Sabendo que o
// coeficiente de atrito cinético entre a caixa e o piso
// é 0,20 e, além disso, determine:
// a) a massa da caixa;
// b) a intensidade da força de atrito cinético entre a
// caixa e o piso;
// c) a máxima aceleração que se pode imprimir à
// caixa.

import { getWeight } from "./functions/weight";
import { gravity } from "./constants/gravity";
import { getKinecticIntensityForce } from "./functions/fk";
import { getTraction } from "./functions/traction";
import { getMaxAcceleration } from "./functions/maxAcceleration";

const normalForce = 200; // retirado do enunciado
const weight = getWeight(200, gravity);
const kinecticForce = getKinecticIntensityForce(0.2, weight);
const traction = getTraction(200, kinecticForce);
const maxAcceleration = getMaxAcceleration();
