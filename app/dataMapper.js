const client = require('./database');


const dataMapper = {
  getAllCards: (callback) => {
    const allCards = {
      text:'SELECT * FROM "card";'
    }
    
    client.query(allCards, callback);
  },
  getOneCard: (id, callback) => {
    const oneCard = {
        text:'SELECT * FROM "card" WHERE  id=$1;',
        values: [id]
    }
    client.query(oneCard, callback)
  },
  searchCard: (element, callback)=>{
    const byElement = {
      text:`SELECT * FROM "card" WHERE "element"= '${element}';`,
      // values: [element]
        }
    console.log(`ma recherche mapper ${byElement}`);
    client.query(byElement, callback)
  }
};


module.exports = dataMapper;