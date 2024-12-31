document.addEventListener("DOMContentLoaded", () => {

  const coordinates = [];
  const blackPieces = [];
  const whitePieces = [];

  const allElementsWithId = document.querySelectorAll("[id]");

  allElementsWithId.forEach(element => {
      if (element.classList.contains("square")) {
          coordinates.push(element);
      } else if (element.id.includes("black")) {
          blackPieces.push(element);
      } else if (element.id.includes("white")) {
          whitePieces.push(element);
      }
  });

  let turn = 'white'; 

  const pieceActions = {
      pawn: calculaPosicoesPawn,
      rook: calculaPosicoesRook,
      knight: calculaPosicoesKnight,
      bishop: calculaPosicoesBishop,
      king: calculaPosicoesKing,
      queen: calculaPosicoesQueen,
  };

  coordinates.forEach(square => {

    square.addEventListener("click", () => {
        resetBoardColors(coordinates); 

        const img = square.querySelector("img"); 
        if (img) {
          const pieceId = img.id.toLowerCase(); 

          if ((turn === 'white' && pieceId.includes("white")) || (turn === 'black' && pieceId.includes("black"))) {
            
            for (const [key, action] of Object.entries(pieceActions)) {
                if (pieceId.includes(key)) {
                    console.log(`Ativando ação para a peça: ${key}`);
                    action(square.id);
                    break; 
                }
            }
        }
      }
    });
 
});

});

function calculaPosicoesPawn(id){
  console.log(id);
  if(id[1] === '2'){
      const col = id[0]; 
      console.log(col);
      const move1 = document.getElementById(`${col}3`); 
      const move2 = document.getElementById(`${col}4`); 
      console.log('move1', move1);

      if (move1) {
          move1.style.backgroundColor = "green";

      }
      if (move2) {
          move2.style.backgroundColor = "green";

      }

}
}

function calculaPosicoesKnight(){
  console.log('09');
}

function calculaPosicoesBishop(){
  console.log('09');
}
function calculaPosicoesRook(){
  console.log('09');
}

function calculaPosicoesKing(){
  console.log('09');
}

function calculaPosicoesQueen(){
  console.log('09');
}

function resetBoardColors(coordinates) {
  coordinates.forEach(square => {
      square.style.backgroundColor = ""; 
  });
};