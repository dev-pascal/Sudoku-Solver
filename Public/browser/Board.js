const board = document.getElementById('sudokuBoard');
const btnboard = document.getElementById('button-board');

// Create standard board (hardcoded)
function createNine() {
  board.innerHTML = ``;
  board.innerHTML = `
    <table id="puzzle-grid">
      <tr>
        <td class="edit">
        </td>
        <td class="edit">        
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit"> 
        </td>
        <td class="edit">  
        </td>
      </tr>
      <tr>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
      </tr>
      <tr>
        <td class="edit b-bottom">
        </td>
        <td class="edit b-bottom">
        </td>
        <td class="edit b-bottom">
        </td>
        <td class="edit b-bottom b-left">
        </td>
        <td class="edit b-bottom">
        </td>
        <td class="edit b-bottom">
        </td>
        <td class="edit b-bottom b-left">
        </td>
        <td class="edit b-bottom">
        </td>
        <td class="edit b-bottom">
        </td>
      </tr>
      <tr>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
      </tr>
      <tr>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
      </tr>
      <tr>
        <td class="edit b-bottom">
        </td>
        <td class="edit b-bottom">
        </td>
        <td class="edit b-bottom">
        </td>
        <td class="edit b-bottom b-left">
        </td>
        <td class="edit b-bottom">
        </td>
        <td class="edit b-bottom">
        </td>
        <td class="edit b-bottom b-left">
        </td>
        <td class="edit b-bottom">
        </td>
        <td class="edit b-bottom">
        </td>
      </tr>
      <tr>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
      </tr>
      <tr>
        <td class="edit" >
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
      </tr>
      <tr>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
        <td class="edit b-left">
        </td>
        <td class="edit">
        </td>
        <td class="edit">
        </td>
      </tr>
    </table>`;
  board.style.gridTemplateColumns = "";
  board.style.gridTemplateColumns = "repeat(1, 9fr)";
  board.style.border = "";
  board.style.border = "4px solid black";
}