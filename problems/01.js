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

import { getKinecticIntensityForce } from "../functions/fk.js";
import { getMaxAcceleration } from "../functions/maxAcceleration.js";
import { getTraction } from "../functions/traction.js";
import { getMass } from "../functions/mass.js";
import { gravity } from "../constants/gravity.js";
import { normalizedLog } from "../utils/log-with-normalization.js";

const normalForce = 200; // retirado do enunciado
const mass = getMass(500, gravity); // peso da caixa e gravidade
const kinecticForce = getKinecticIntensityForce(0.2, 500); // coeficiente e peso da caixa
const traction = getTraction(normalForce, kinecticForce); // força normal e força cinética
const maxAcceleration = getMaxAcceleration(traction, mass); // tração e massa

normalizedLog({ normalForce, mass, kinecticForce, traction, maxAcceleration });
