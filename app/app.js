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
                    action(square.id, turn);
                    break; 
                }
            }
        }
      }
    });
 
});

});

function calculaPosicoesPawn(id, turn) {

  const col = id[0]; 
  const line = parseInt(id[1], 10); 

  const nextCol = String.fromCharCode(col.charCodeAt(0) + 1); 
  const prevCol = String.fromCharCode(col.charCodeAt(0) - 1); 

  let move1, move2, move3, move4;

  if (turn === 'white') {
    move1 = document.getElementById(`${col}${line + 1}`); 
    if (line === 2) {
      move2 = document.getElementById(`${col}${line + 2}`);  
    }

    move3 = document.getElementById(`${nextCol}${line + 1}`); 
    move4 = document.getElementById(`${prevCol}${line + 1}`); 

    if (move3) {
      const img = move3.querySelector("img"); 
      if (img && img.id.toLowerCase().includes('black')) {
        move3.style.backgroundColor = "green";
      }
    }

    if (move4) {
      const img = move4.querySelector("img"); 
      if (img && img.id.toLowerCase().includes('black')) {
        move4.style.backgroundColor = "green";
      }
    }
  } else if (turn === 'black') {
    move1 = document.getElementById(`${col}${line - 1}`); 
    if (line === 7) {
      move2 = document.getElementById(`${col}${line - 2}`);  
    }

    move3 = document.getElementById(`${nextCol}${line - 1}`); 
    move4 = document.getElementById(`${prevCol}${line - 1}`); 

    if (move3) {
      const img = move3.querySelector("img"); 
      if (img && img.id.toLowerCase().includes('white')) {
        move3.style.backgroundColor = "green";
      }
    }

    if (move4) {
      const img = move4.querySelector("img"); 
      if (img && img.id.toLowerCase().includes('white')) {
        move4.style.backgroundColor = "green";
      }
    }
  }

  if (move1) move1.style.backgroundColor = "green";

  if (move2) move2.style.backgroundColor = "green";
  
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