// HTML模板生成器
export class HtmlGenerator {
  static generateGameHTML(
    title: string,
    gameLogic: string,
    canvasWidth: number = 800,
    canvasHeight: number = 400,
    backgroundColor: string = '#87CEEB'
  ): string {
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            background: #f0f0f0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        #gameContainer {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            text-align: center;
        }
        canvas {
            border: 2px solid #333;
            background: ${backgroundColor};
        }
        .controls {
            margin-top: 15px;
            font-size: 14px;
            color: #666;
        }
        .score {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div id="gameContainer">
        <div class="score">得分: <span id="score">0</span></div>
        <canvas id="gameCanvas" width="${canvasWidth}" height="${canvasHeight}"></canvas>
        <div class="controls">
            使用方向键控制游戏
        </div>
    </div>
    
    <script>
        ${gameLogic}
    </script>
</body>
</html>`;
  }
}