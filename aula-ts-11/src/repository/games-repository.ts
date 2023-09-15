import { CreateGame, Game } from "../protocols/game-protocol";
import { connection } from "../database/database-connection";

//const games: Game[] = [];

async function getGames() {
  return connection.query<Game>(`
    SELECT * FROM games;
  `);
}

async function createGame(game: CreateGame) {
  return connection.query<CreateGame>(`
    INSERT INTO games (title, platform) VALUES ($1, $2);
  `, [game.title, game.platform])
}

async function getGameByTitleAndPlatform(game: Game) {
  const resultGame = await connection.query<Game>(`
    SELECT * FROM games 
    WHERE title = $1 AND platform = $2;
  `, [game.title, game.platform])

  //console.log(resultGame.rowCount)
  return resultGame.rows
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;