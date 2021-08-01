import { utilService } from "@/services/util.service.js";
const KEY = 'theatre-board';

export const boardService = {
   query,
   save
}

function save(newBoard) {
   utilService.save(KEY, newBoard);
}

function query() {
   const board = utilService.load(KEY) || [];
   if (board.length) return board;

   for (var i = 0; i < 28; i++) {
      const sitRow = [];
      for (var j = 0; j < 9; j++) {
         if (i === 7 || i === 20 || (j > 6 && i > 7 && i < 20 )) {
            sitRow.push(_emptySit(i, j));
            continue;
         }
         sitRow.push({
            id: utilService.makeId(),
            status: 1,
            x: j,
            y: i,
         });
      }
      board.push(sitRow);
   }
   return board;
}
function _emptySit(i, j) {
   return {
      id: utilService.makeId(),
      status: 4,
      x: j,
      y: i,
   };
}