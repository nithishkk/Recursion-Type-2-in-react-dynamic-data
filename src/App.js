import React from 'react';

const teamStracture = {
  name: "nithish",
  teams: [
    {
      name: "react",
      teams: [
        {
          name: "nithi",
          teams: []
        }
      ],
    },
    {
      name: "node js",
      teams: [],
    }
  ]
}

function getTeamDetaile(team) {
  if (team.teams.length === 0) {
    return null;
  } else {
    return (
      <ul>
        {team.teams.map((subTeam, index) => (
          <li key={index}>
            {subTeam.name}
            {getTeamDetaile(subTeam)}
          </li>
        ))}
      </ul>
    )
  }
}

function TeamStructure() {
  return (
    <div>
      <h2>Team Structure</h2>
      <ul>
        {teamStracture.teams.map((team, index) => (
          <li key={index}>
            {team.name}
            {getTeamDetaile(team)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamStructure;
;
