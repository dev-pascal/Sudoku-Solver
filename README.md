# Sodoku Solver

## Live Demo (use Google Chrome)
https://dev-pascal.github.io/Sudoku-Solver/


## About Sudoku
In sudoku, the objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid or blocks contain all of the digits from 1 to 9. The puzzle setter provides a partially completed grid, which for a well-posed puzzle has a single solution.

## Specifications

This light-weight web app can generate, play and visualize Sudokus.

In order to set new Sudoku puzzle, there are four board difficulty levels:
* Easy (= 45-50 empty cells)
* Normal (= 50-55 empty cells)
* Hard (= 55-60 empty cells)
* Legendary (= 60-65 empty cells)

A user can then decide to solve the board via algorithm or on her own. Regarding the former, there are currenlty four algorithms incl. solution time tracker implemented to solve a grid:
* Backtracking
* Best First Search
* Knuth's Dancing Links
* Simulated Annealing

To play the Sudoku grid via hand, several UI/UX elements have been integrated:
* Freeze Mode (= prevents any typing in board cells)
* Submission Button (= submits the (complete) user data)
* Solution Checker (= checks the solution for validity)
* Stopwatch (= tracks the time per game)

## Built with
* HTML
* CSS & Bootstrap 4
* Vanilla JavaScript
