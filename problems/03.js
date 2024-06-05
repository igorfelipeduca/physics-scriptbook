/*
Ana está fazendo um exercício de crossfit onde
empurra uma caixa de metal de peso 850N aplicando
uma força de 50N sobre a caixa.
Seu treinador, Jorge, marca que Ana conseguiu
empurrar a caixa por 12m em um intervalo de 30s.
Sabendo dos dados acima, calcule o seguinte:
a) a massa da bola;
b) a aceleração da bola;
c) a velocidade média da bola.
*/

import { getMassa } from '../functions/massa.js';
import { getAceleracao } from '../functions/aceleracao.js';
import { getVelocidadeMedia } from '../functions/velocidadeMedia.js';
import { gravidade } from '../constants/gravidade.js';
import { normalizedLog } from '../utils/log-with-normalization.js';

// informações do enunciado
const peso = 850;
const forcaAplicada = 50;
const posicaoInicial = 0;
const posicaoFinal = 12;
const tempo = 30;

const massa = getMassa(peso, gravidade);
const aceleracao = getAceleracao(forcaAplicada, massa);
const velocidadeMedia = getVelocidadeMedia(posicaoInicial, posicaoFinal, tempo, "m");

normalizedLog({ massa, aceleracao, velocidadeMedia });