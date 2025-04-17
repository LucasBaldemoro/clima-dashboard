import { useEffect, useRef } from "react";
const WeatherChart = ({ data, width = 1092, height = 300 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx || !data.length) return;

    ctx.clearRect(0, 0, width, height);

    const maxTemp = Math.max(...data.map(d => d.temp));
    const minTemp = Math.min(...data.map(d => d.temp));
    const padding = 40;
    const stepX = (width - padding * 2) / (data.length - 1);
    const stepY = (height - padding * 2) / (maxTemp - minTemp);

    ctx.beginPath();
    ctx.moveTo(padding, height - padding - (data[0].temp - minTemp) * stepY);
    data.forEach((point, index) => {
      const x = padding + index * stepX;
      const y = height - padding - (point.temp - minTemp) * stepY;
      ctx.lineTo(x, y);
      ctx.fillText(point.day, x - 10, height - 10);
    });
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [data, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} style={{ border: "1px solid #ccc" }}></canvas>;
};


export default WeatherChart;
