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

import { getMassa } from "../functions/massa.js";
import { getForcaIntensidadeCinetica } from "../functions/fk.js";
import { getTracao } from "../functions/tracao.js";
import { getMaxAceleracao } from "../functions/aceleracao.js";
import { gravidade } from "../constants/gravidade.js";
import { normalizedLog } from "../utils/log-with-normalization.js";

const forcaNormal = 200; // retirado do enunciado
const massa = getMassa(500, gravidade); // peso da caixa e gravidade
const fk = getForcaIntensidadeCinetica(0.2, 500); // coeficiente e peso da caixa
const tracao = getTracao(forcaNormal, fk); // força normal e força cinética
const aceleracaoMax = getMaxAceleracao(tracao, massa); // tração e massa

normalizedLog({ forcaNormal, massa, fk, tracao, aceleracaoMax });
