import React from "react";
import "./index.css";

const Display = props => {
  const scores1 =
    props.matchStatus !== "upcoming"
      ? props.matchScore[0].teamScore[0].runsScored +
        " / " +
        props.matchScore[0].teamScore[0].wickets
      : "0/0";
  const scores2 =
    props.matchStatus !== "upcoming"
      ? props.matchScore[1].teamScore[0].runsScored +
        " / " +
        props.matchScore[1].teamScore[0].wickets
      : "0/0";

  var timeStamp = Math.floor(Date.now());
  const result =
    props.matchStatus === "completed"
      ? props.matchResult
      : Math.max(0, Math.floor((props.startDate - timeStamp) / 60000)) === 0
      ? props.matchScore.length === 2
        ? props.matchScore[1].teamScore[0].battingTeam + " is Batting "
        : props.matchScore[0].teamScore[0].battingTeam + " is Batting "
      : Math.max(0, Math.floor((props.startDate - timeStamp) / 60000)) +
        " minutes to toss";
  return (
    <center>
      <br />
      <table>
        <thead>
          <tr>
            <th className="centerText">{props.seriesName}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {props.matchNumber}.{props.venue}
            </td>
          </tr>
        </tbody>
        <tr>
          <td>
            {props.homeTeamName} - {scores1}{" "}
          </td>
        </tr>
        <tr>
          <td>
            {props.awayTeamName} - {scores2}{" "}
          </td>
        </tr>
        <tr>
          <td className="centerText backgroundYellow">{result}</td>
        </tr>
      </table>
    </center>
  );
};
export default Display;
