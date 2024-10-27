import { readTestCases } from './read_test_cases';
import { solution } from './solution';

readTestCases()
  .then((testCases: string[]) => {
    console.log("取得したテストケースデータ:", testCases);

    testCases.forEach((testCase, index) => {
      const result = solution(testCase);

      if (result) {
        console.log(`テストケース ${index + 1}: Success - Well done!`);
      } else {
        console.log(`テストケース ${index + 1}: Failure - Try again!`);
      }
    });
  })
  .catch((error: unknown) => {
    console.error("エラーが発生しました:", error);
  });