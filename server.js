const express = require('express');
const connect = require('./database');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.use(express.static('public'));

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
  console.log(`Dream Big.`);
});


// Endpoint to fetch team averages
app.get('/api/team-avgs', async (req, res) => {
  const connection = await connect();
  try {
    const individualQuery = `SELECT 
      CONCAT(city, ' ', teamName) as Team,
      wins,
      losses,
      confRank,
      divRank,
      ORTG,
      DRTG,
      FG_Percent,
      FGM,
      3P_Percent,
      3PM,
      FT_Percent,
      FTM,
      APG,
      RPG,
      TOPG
      FROM Team;`;
    const [logs] = await connection.execute(individualQuery);
    res.json({ logs });
  } catch (error) {
    console.error('Server Error', error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint to fetch player logs
app.get('/api/knicks-players/:lastName', async (req, res) => {
  const { lastName } = req.params;
  const {startDate, endDate} = req.query;
  const connection = await connect();

  try {
    let logsQuery = `SELECT
      CONCAT(firstName, ' ', lastName) as Name,
      date,
      team,
      opponent,
      CASE WHEN isHome=1 THEN 'Home' ELSE 'Away' END AS Location,
      CASE WHEN isWin=1 THEN "W" ELSE "L" END AS Result,
      CASE WHEN isStarter=1 THEN 'Yes' ELSE 'No' END AS Starter,
      minutes,
      FGM,
      FG_Percent,
      3PM,
      3P_Percent,
      FTM,
      FT_Percent,
      PTS,
      AST,
      REB,
      STL,
      BLK,
      ORB,
      TOV,
      plusMinus
      FROM GameByPlayer WHERE lastName = ?
      AND minutes IS NOT NULL`;
    const queryParams = [lastName];

    if(startDate && endDate){
      logsQuery+= ' AND date BETWEEN ? AND ?';
      queryParams.push(startDate, endDate);
    }

    const [logs] = await connection.execute(logsQuery, queryParams);
    res.json({ logs });
    await connection.end();
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/avgs-from-logs/:lastName', async (req, res) => {
  const {lastName} = req.params;
  const {startDate, endDate} = req.query;
  const connection = await connect();
  

  try {
    let avgsQuery = `SELECT
      CONCAT(firstName, ' ', lastName) AS Name,
      AVG(minutes) AS minutes,
      AVG(FGM) AS FGM,
      AVG(FG_Percent) AS FG_Percent,
      AVG(3PM) AS 3PM,
      AVG(3P_Percent) AS 3P_Percent,
      AVG(FTM) AS FTM,
      AVG(FT_Percent) AS FT_Percent,
      AVG(PTS) AS PTS,
      AVG(AST) AS AST,
      AVG(REB) AS REB,
      AVG(STL) AS STL,
      AVG(BLK) AS BLK,
      AVG(ORB) AS ORB,
      AVG(TOV) AS TOV,
      AVG(plusMinus) AS plusMinus
      FROM GameByPlayer
      WHERE lastName = ?
      AND minutes IS NOT NULL`;

    const queryParams = [lastName];

    if(startDate && endDate){
      avgsQuery+= ' AND date BETWEEN ? AND ?';
      queryParams.push(startDate, endDate);
    }

    avgsQuery+= ' GROUP BY firstName, lastName';

    const [logs] = await connection.execute(avgsQuery, queryParams);
    res.json({ logs });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/team-logs/:teamName', async (req, res) => {
  const {teamName} = req.params;
  const {startDate, endDate} = req.query;
  const connection = await connect();

  try {
    let logsQuery = `SELECT
    date,
    opponent,
    CASE WHEN isHome=1 THEN "Home" ELSE "Away" END AS location,
    CASE WHEN isWin=1 THEN "W" ELSE "L" END AS result,
    PTS,
    oppPTS,
    FGM,
    FG_Percent,
    3PM,
    3P_Percent,
    FTM,
    FT_Percent,
    ORB,
    REB,
    AST,
    STL,
    BLK,
    TOV,
    FLS
    FROM GameByTeam WHERE teamName = ?`;
    const queryParams = [teamName];

    if(startDate && endDate){
      logsQuery+= ' AND date BETWEEN ? AND ?';
      queryParams.push(startDate, endDate);
    }
    const [logs] = await connection.execute(logsQuery, queryParams);
    res.json({ logs });
    await connection.end();
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Internal Server Error');
  }
})

app.get(`/api/opp-logs/:teamName`, async (req, res) => {
  const {teamName} = req.params;
  const {startDate, endDate} = req.query;
  const connection = await connect();

  try {
    let logsQuery = `SELECT
    date,
    CASE WHEN isWin=1 THEN "L" ELSE "W" END AS result,
    oppFGM,
    oppFG_Percent,
    opp3PM,
    opp3P_Percent,
    oppFTM,
    oppFT_Percent,
    oppORB,
    oppREB,
    oppAST,
    oppSTL,
    oppBLK,
    oppTOV,
    oppFLS
    FROM GameByTeam WHERE teamNAME = ?`;
    const queryParams = [teamName];

    if(startDate && endDate){
      logsQuery+= ' AND date BETWEEN ? AND ?';
      queryParams.push(startDate, endDate);
    }

    const [logs] = await connection.execute(logsQuery, queryParams);
    res.json({ logs });
    await connection.end();
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Internal Server Error');
  }
})

app.get(`/api/team-log-averages/:teamName`, async (req, res) => {
  const {teamName} = req.params;
  const {startDate, endDate} = req.query;
  const connection = await connect();

  try {
    let avgsQuery = `SELECT
    AVG(PTS) AS PTS,
    AVG(oppPTS) AS oppPTS,
    AVG(FGM) AS FGM,
    AVG(FG_PERCENT) AS FG_Percent,
    AVG(3PM) AS 3PM,
    AVG(3P_Percent) AS 3P_Percent,
    AVG(FTM) AS FTM,
    AVG(FT_Percent) AS FT_Percent,
    AVG(ORB) AS ORB,
    AVG(REB) AS REB,
    AVG(AST) AS AST,
    AVG(STL) AS STL,
    AVG(BLK) AS BLK,
    AVG(TOV) AS TOV,
    AVG(FLS) AS FLS
    FROM GameByTeam where teamName = ?`;
    const queryParams = [teamName];

    if(startDate && endDate){
      avgsQuery+=` AND date BETWEEN ? AND ?`;
      queryParams.push(startDate, endDate);
    }

    avgsQuery+=` GROUP BY teamName`;

    const [logs] = await connection.execute(avgsQuery, queryParams);
    res.json({ logs });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Internal Server Error');
  }
})

app.get(`/api/opp-log-averages/:teamName`, async (req, res) => {
  const {teamName} = req.params;
  const {startDate, endDate} = req.query;
  const connection = await connect();

  try {
    let avgsQuery = `SELECT
    AVG(oppFGM) AS FGM,
    AVG(oppFG_PERCENT) AS FG_Percent,
    AVG(opp3PM) AS 3PM,
    AVG(opp3P_Percent) AS 3P_Percent,
    AVG(oppFTM) AS FTM,
    AVG(oppFT_Percent) AS FT_Percent,
    AVG(oppORB) AS ORB,
    AVG(oppREB) AS REB,
    AVG(oppAST) AS AST,
    AVG(oppSTL) AS STL,
    AVG(oppBLK) AS BLK,
    AVG(oppTOV) AS TOV,
    AVG(oppFLS) AS FLS
    FROM GameByTeam where teamName = ?`;
    const queryParams = [teamName];

    if(startDate && endDate){
      avgsQuery+=` AND date BETWEEN ? AND ?`;
      queryParams.push(startDate, endDate);
    }

    avgsQuery+=` GROUP BY teamName`;

    const [logs] = await connection.execute(avgsQuery, queryParams);
    res.json({ logs });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Internal Server Error');
  }
})

app.get(`/api/team-player-stats/:teamName`, async (req, res) => {
  const {teamName} = req.params;
  const connection = await connect();

  try {
    let playersQuery = `SELECT
    CONCAT(firstName, ' ', lastName) AS Name,
    position,
    games,
    gamesStarted,
    PPG,
    APG,
    RPG,
    SPG,
    BPG,
    ORPG,
    TOPG,
    FG_Percent,
    FGM,
    3P_Percent,
    3PM,
    FT_Percent,
    FTM
    from player
    WHERE Team = ?`;
    const queryParams = [teamName];


    const [logs] = await connection.execute(playersQuery, queryParams);
    res.json({ logs });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Internal Server Error');
  }

})

