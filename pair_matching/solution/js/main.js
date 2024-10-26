import { readTestCases } from './read_test_cases.js';

// Pythonデータを取得して使用する
readTestCases()
  .then((formattedData) => {
    console.log("取得した結合済みテストケースデータ:\n", formattedData);
  })
  .catch((error) => {
    console.error("エラーが発生しました:", error);
  });