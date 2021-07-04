export const global = {
  BASE_API_URL: 'http://localhost:5000/',
  // BASE_API_URL: 'http://javatechcruditau-env.eba-p6wmatyj.ap-south-1.elasticbeanstalk.com/',
  BASE_API_VIACODE : "https://viacep.com.br/ws/",
  telmask : ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  cpfMask : [/\d/, /\d/, /\d/, '.',/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
  dateMask : [/\d/, /\d/, '/',/\d/,  /\d/,'/', /\d/, /\d/, /\d/, /\d/],
  pinCodeMask : [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
  accountMask : [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/],
  agencyMask : [/\d/, /\d/, /\d/, /\d/],
};
