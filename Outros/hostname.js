/* Objectivo:
    Uma mesma api para varios dominions.
    Retonar um parametro na url com base no dominio.
    Dessa forma conseguimos retonar alguma informção como uma imagem com base no dominio que solicitou a informção

*/
// process.env
const SUBDOMAIN = 'meuespaco'

/* Constantes */
const CHANNEL = {
  MAGAZINE_LUIZA: 'magazineluiza',
  MVC: 'magazinevoce',
  CLUBE_MAGALU_B2B: 'clube2'
}

const ORIGIN = {
  [CHANNEL.MAGAZINE_LUIZA]: 'magalu',
  [CHANNEL.MVC]: 'magazinevoce',
  [CHANNEL.CLUBE_MAGALU_B2B]: 'clube'
}

const HOSTNAMES= {
  [CHANNEL.MAGAZINE_LUIZA]: [
    `${SUBDOMAIN}.magazineluiza.com.br `,
    `${SUBDOMAIN}-piloto.magazineluiza.com.br `,
  ],
  [CHANNEL.MVC]: [
    `${SUBDOMAIN}.magazinevoce.com.br`,
    `${SUBDOMAIN}-piloto.magazinevoce.com.br`,
  ],
  [CHANNEL.CLUBE_MAGALU_B2B]:[
    `${SUBDOMAIN}.clube2.com.br`,
    `${SUBDOMAIN}-piloto.clube2.com.br`,
  ]
};

// Functions

function getCurrentChannel(hostname){
  // 0) retorna sem usar "some" o valor das props de CHANNEL
  const channel = Object.keys(HOSTNAMES).find(site => (HOSTNAMES[site].includes(hostname)));
  // 1) retorna o valor das props de CHANNEL
  //const channel = Object.keys(HOSTNAMES).find(site => (HOSTNAMES[site].some(host => host.includes(hostname))));

  // 2) retorna o valor das props de CHANNEL
  // const chnnl = Object.keys(HOSTNAMES);
  // const channel = chnnl.find(site => HOSTNAMES[site].some(host => host.includes(hostname)));

  // 3) retorna um boolean em vez das props de CHANNEL
  // const chnnl = Object.keys(HOSTNAMES);
  // const url = chnnl.map(site => HOSTNAMES[site]);
  // const channel = url.some(host => host.includes(hostname));

  return channel;
}

function termsUrl() {
  //let hostname = 'meuespaco.magazinevoce.com.br'
  //let hostname = 'meuespaco.magazineluiza.com.br'
  const hostname = 'meuespaco.clube2.com.br';
  const channel = getCurrentChannel(hostname);
  const param = channel ? `?origin=${ORIGIN[channel]}` : '';

  return `www.exemple.com.br/${param}`;
  
}

console.log(termsUrl())