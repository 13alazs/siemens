import React from "react";
import BarChart from "../chart/BarChart";
import { useSelector } from "react-redux";
import { Chart as ChartJS } from "chart.js/auto";
import { selectComments } from "./commentSlice";
import styles from "./CommentsChart.module.css";

function CommentsChart() {
  const comments = useSelector(selectComments);
  const commentData = {
    labels: comments.map((comment) => comment.id),
    datasets: [
      {
        label: "Number of words in a comment",
        data: comments.map((comment) => comment.count),
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        title: {
          display: true,
          text: "Comment Id",
          font: {
            size: 16,
          },
        },
      },
    },
  };

  return (
    <div className={styles.commentsChart}>
      {comments.length && (
        <BarChart chartData={commentData} options={options} />
      )}
    </div>
  );
}

export default CommentsChart;
