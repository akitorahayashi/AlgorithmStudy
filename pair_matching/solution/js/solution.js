function solution(testCase)  {
    // テストケースを行単位に分割
    const lines = testCase.trim().split("\n");
    let index = 0;
  
    // 各テストケースの説明
    const description = lines[index++].trim();
  
    // 参加者数
    const N = parseInt(lines[index++].trim(), 10);
    const initialsMap = new Map();
    let pairsCount = 0;
  
    // 参加者のイニシャルペアを処理
    for (let i = 0; i < N; i++) {
      const [A, B] = lines[index++].trim().split(" ").map(Number);
      const pair = `${A},${B}`;
      const reversePair = `${B},${A}`;
  
      // 逆のペアが存在するか確認
      if (initialsMap.has(reversePair)) {
        pairsCount++;
        initialsMap.set(reversePair, initialsMap.get(reversePair) - 1);
        if (initialsMap.get(reversePair) === 0) initialsMap.delete(reversePair);
      } else {
        // 新しいペアをマップに追加
        initialsMap.set(pair, (initialsMap.get(pair) || 0) + 1);
      }
    }
  
    // 期待される出力行
    const expectedOutput = parseInt(lines[index++].trim(), 10);
  
    // 結果の一致確認と返り値
    return pairsCount === expectedOutput;
  }