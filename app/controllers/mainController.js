const dataMapper = require('../dataMapper');

const mainController = {
  homePage: (request, response) => {
    dataMapper.getAllCards((error, results) => {
      if(error) {
        response.status(500).send('Erreur ! Aucun enregidtrement n\'a été créé');
      }else{
        
        const allCards = results.rows;
       
        response.render('cardList', {allCards , title: 'Liste des cartes'});
    }
    });
  },
  cardPage: (request,response)=>{
    const cardId = Number(request.params.id);
     dataMapper.getOneCard(cardId, (error2, result2)=> {
      if(error2){
        response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
      }
      else {
        const oneCard = result2.rows[0];
       
        response.render('card',{oneCard});
      }
     });
  }
};

module.exports = mainController;