import React, { Component } from "react";
import "./index.css";

class Display extends Component {
  componentDidCatch(error, info) {
    // Display fallback UI
  }
  render() {
    const scores1 = " ";
    const scores2 = " ";

    var timeStamp = Math.floor(Date.now());
    const result =
      this.props.matchStatus === "completed"
        ? this.props.matchResult
        : this.props.matchStatus === "upcoming"
        ? Math.max(
            0,
            Math.floor((this.props.startDate - timeStamp) / 60000)
          ) === 0
          ? "Toss Done"
          : Math.floor((this.props.startDate - timeStamp) / 60000) +
            " minutes to toss"
        : "Match is Running";

    return (
      <center>
        <br />
        <table>
          <thead>
            <tr>
              <th className="centerText">{this.props.seriesName}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <center>
                <td>
                  {this.props.matchNumber}.{this.props.venue}
                </td>{" "}
              </center>
            </tr>
          </tbody>
          <tr>
            <center>
              <td>
                Team 1: {this.props.homeTeamName} {scores1}{" "}
              </td>{" "}
            </center>
          </tr>
          <tr>
            <center>
              {" "}
              <td>
                Team 2: {this.props.awayTeamName} {scores2}{" "}
              </td>
            </center>
          </tr>
          <br />
          <tr>
            <td className="centerText backgroundYellow">{result}</td>
          </tr>
        </table>
      </center>
    );
  }
}
export default Display;
