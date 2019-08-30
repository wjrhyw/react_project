let baseUrl='';
if (process.env.NODE_ENV === 'development'||process.env.NODE_ENV === 'production'){
    baseUrl = '//elm.cangdu.org'
  } 
  export {
    baseUrl
  }