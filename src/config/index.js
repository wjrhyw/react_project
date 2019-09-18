let baseUrl='';
if (process.env.NODE_ENV === 'development'||process.env.NODE_ENV === 'production'){
    baseUrl = 'https://elm.cangdu.org'
  } 
  export {
    baseUrl
  }