const JeasRoutConfig = require('../../../config/routes');

module.exports = ( req ) => {
       
  console.log( JeasRoutConfig )
  let buffer = '' ;
  JeasRoutConfig.forEach( (item) => {
    buffer += item.name + "\n" ;
  })
    return buffer ;
}