import { Game } from "../protocols/game-protocol";
import { connection } from "database/database-connection";

//const games: Game[] = [];

function getGames() {
  return connection.query<Game[]>(`
    SELECT * FROM games;
  `);
}

function createGame(game: Game) {
  return connection.query(`
    INSERT INTO games (title, platform) VALUES ($1, $2);
  `, [game.title, game.platform])
}

function getGameByTitleAndPlatform(game: Game) {
  return connection.query<Game>(`
    SELECT * FROM games 
    WHERE title = $1 AND platform = $2;
  `, [game.title, game.platform])
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;