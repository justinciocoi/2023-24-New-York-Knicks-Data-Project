function fetchTeamAverages() {
    fetch(`/api/team-avgs`)
      .then(response => response.json())
      .then(data => {
        teamsAveragesTable.clear();
  
        data.logs.forEach(log => {
          teamsAveragesTable.row.add([
            log.Team,
            log.wins,
            log.losses,
            log.confRank,
            log.divRank,
            log.ORTG,
            log.DRTG,
            log.FG_Percent,
            log.FGM,
            log["3P_Percent"],
            log["3PM"],
            log.FT_Percent,
            log.FTM,
            log.APG,
            log.RPG,
            log.TOPG
          ]);
        });
  
        teamsAveragesTable.draw();
      })
      .catch(error => console.error('Error fetching team averages:', error));
  }

function KnickLogs() {
  
    
  const lastNameElement = document.getElementById('lastName');
  const lastName = lastNameElement ? lastNameElement.getAttribute('data-name') : '';
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  fetch(`/api/knicks-players/${lastName}?startDate=${startDate}&endDate=${endDate}`)
    .then(response => response.json())
    .then(data => {
      knicksPlayerTable.clear();

      data.logs.forEach( log => {
      knicksPlayerTable.row.add([
            log.Name,
            log.date,
            log.team,
            log.opponent,
            log.Location,
            log.Result,
            log.Starter,
            log.minutes,
            log.FGM,
            log.FG_Percent,
            log["3PM"],
            log["3P_Percent"],
            log.FTM,
            log.FT_Percent,
            log.PTS,
            log.AST,
            log.REB,
            log.STL,
            log.BLK,
            log.ORB,
            log.TOV,
            log.plusMinus
      ]);
    });
    knicksPlayerTable.draw();
    })
    .catch(error => console.error('Error fetching player logs:', error));  
}

function avgsFromLogs() {
  const lastNameElement = document.getElementById('lastName');
  const lastName = lastNameElement ? lastNameElement.getAttribute('data-name') : '';
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  fetch(`/api/avgs-from-logs/${lastName}?startDate=${startDate}&endDate=${endDate}`)
    .then(response => response.json())
    .then(data => {
      avgsFromLogsTable.clear();

      data.logs.forEach(log => {
        avgsFromLogsTable.row.add([
          log.Name,
          log.minutes,
          log.FGM,
          log.FG_Percent,
          log['3PM'],
          log['3P_Percent'],
          log.FTM,
          log.FT_Percent,
          log.PTS,
          log.AST,
          log.REB,
          log.STL,
          log.BLK,
          log.ORB,
          log.TOV,
          log.plusMinus
        ]);
      });
      avgsFromLogsTable.draw();
    })
    .catch(error => console.error('Error fetching player averages:', error));  
}

function teamAvgsFromLogs() {
  const teamElement = document.getElementById('teamName');
  const teamName = teamElement ? teamElement.getAttribute('data-name') : '';
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  fetch(`/api/team-log-averages/${teamName}?startDate=${startDate}&endDate=${endDate}`)
    .then(response => response.json())
    .then(data => {
      teamLogAveragesTable.clear();

      data.logs.forEach(log => {
        teamLogAveragesTable.row.add([
          log.PTS,
          log.oppPTS,
          log.FGM,
          log.FG_Percent,
          log['3PM'],
          log['3P_Percent'],
          log.FTM,
          log.FT_Percent,
          log.ORB,
          log.REB,
          log.AST,
          log.STL,
          log.BLK,
          log.TOV,
          log.FLS
        ]);
      });
      teamLogAveragesTable.draw();
    })
    .catch(error => console.error('Error fetching team averages from logs:', error));
}

function oppAvgsFromLogs() {
  const teamElement = document.getElementById('teamName');
  const teamName = teamElement ? teamElement.getAttribute('data-name') : '';
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  fetch(`/api/opp-log-averages/${teamName}?startDate=${startDate}&endDate=${endDate}`)
    .then(response => response.json())
    .then(data => {
      oppLogAveragesTable.clear();

      data.logs.forEach(log => {
        oppLogAveragesTable.row.add([
          log.FGM,
          log.FG_Percent,
          log['3PM'],
          log['3P_Percent'],
          log.FTM,
          log.FT_Percent,
          log.ORB,
          log.REB,
          log.AST,
          log.STL,
          log.BLK,
          log.TOV,
          log.FLS
        ]);
      });
      oppLogAveragesTable.draw();
    })
    .catch(error => console.error('Error fetching opponent averages from logs:', error));

}

function teamLogs() {
  const teamElement = document.getElementById('teamName');
  const teamName = teamElement ? teamElement.getAttribute('data-name') : '';
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  fetch(`/api/team-logs/${teamName}?startDate=${startDate}&endDate=${endDate}`)
    .then(response => response.json())
    .then(data => {
      teamLogsTable.clear();

      data.logs.forEach(log => {
        teamLogsTable.row.add([
          log.date,
          log.opponent,
          log.location,
          log.result,
          log.PTS,
          log.oppPTS,
          log.FGM,
          log.FG_Percent,
          log['3PM'],
          log['3P_Percent'],
          log.FTM,
          log.FT_Percent,
          log.ORB,
          log.REB,
          log.AST,
          log.STL,
          log.BLK,
          log.TOV,
          log.FLS
        ]);
      });
      teamLogsTable.draw();
    })
    .catch(error => console.error('Error fetching team logs:', error));  
}

function oppLogs() {
  const teamElement = document.getElementById('teamName');
  const teamName = teamElement ? teamElement.getAttribute('data-name') : '';
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  fetch(`/api/opp-logs/${teamName}?startDate=${startDate}&endDate=${endDate}`)
    .then(response => response.json())
    .then(data => {
      oppLogsTable.clear();

      data.logs.forEach(log => {
        oppLogsTable.row.add([
          log.date,
          log.result,
          log.oppFGM,
          log.oppFG_Percent,
          log['opp3PM'],
          log['opp3P_Percent'],
          log.oppFTM,
          log.oppFT_Percent,
          log.oppORB,
          log.oppREB,
          log.oppAST,
          log.oppSTL,
          log.oppBLK,
          log.oppTOV,
          log.oppFLS
        ]);
      });
      oppLogsTable.draw();
    })
    .catch(error => console.error('Error fetching opponent logs:', error));  

}

function playerAvgsByTeam() {
  const teamElement = document.getElementById('teamName');
  const teamName = teamElement ? teamElement.getAttribute('data-name') : '';

  fetch(`/api/team-player-stats/${teamName}`)
    .then(response => response.json())
    .then(data => {
      playerByTeamTable.clear();

      data.logs.forEach(log => {
        playerByTeamTable.row.add([
          log.Name,
          log.position,
          log.games,
          log.gamesStarted,
          log.PPG,
          log.APG,
          log.RPG,
          log.SPG,
          log.BPG,
          log.ORPG,
          log.TOPG,
          log.FG_Percent,
          log.FGM,
          log['3P_Percent'],
          log['3PM'],
          log.FT_Percent,
          log.FTM
        ]);
      });
      playerByTeamTable.draw();
    })
    .catch(error => console.error('Error Fetching Player Averages By Team:', error));
}

  function fetchKnicksPlayerLogs() {

    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    const lastNameElement = document.getElementById('lastName');
    const lastName = lastNameElement ? lastNameElement.getAttribute('data-name') : '';
  
    if (!lastName) {
      console.error('Player name is required');
      return;
    }

    fetch(url)
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => { throw new Error(err.error) });
        }
        return response.json();
      })
      .then(data => {
        const knicksPlayerLogsTable = $('#knicksPlayersLogsTable').DataTable();
        knicksPlayerLogsTable.clear();
  
        if (data.logs) {
          data.logs.forEach(log => {
            knicksPlayerLogsTable.row.add([
              log.Name,
              log.date,
              log.team,
              log.opponent,
              log.Location,
              log.Result,
              log.Starter,
              log.minutes,
              log.FGM,
              log.FG_Percent,
              log["3PM"],
              log["3P_Percent"],
              log.FTM,
              log.FT_Percent,
              log.PTS,
              log.AST,
              log.REB,
              log.STL,
              log.BLK,
              log.ORB,
              log.TOV,
              log.plusMinus
            ]).draw();
          });
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  
  async function testDatabaseConnection() {
    try {
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'NBA_Stats'
      });
      console.log('Connected to database');
  
      const [rows] = await connection.execute('SELECT * FROM team;');
      console.log('Query results:', rows);
  
      await connection.end();
    } catch (error) {
      console.error('Database error:', error);
    }
  }
  
  
  
