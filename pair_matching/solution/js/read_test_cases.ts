import { spawn } from 'child_process';

export function readTestCases() {
  return new Promise((resolve, reject) => {
    // cwdをpair_matchingディレクトリに設定
    const pythonProcess = spawn('python3', ['generate_test_cases.py'], {
      cwd: '/Users/hayashiakitora/Develop/AlgorithmStudy/pair_matching',
    });

    let data = '';
    pythonProcess.stdout.on('data', (chunk) => {
      data += chunk;
    });

    pythonProcess.stderr.on('data', (error) => {
      console.error(`エラー: ${error}`);
      reject(error);
    });

    pythonProcess.on('close', (code) => {
      if (code !== 0) {
        reject(`Pythonスクリプトがエラー終了しました。コード: ${code}`);
      } else {
        resolve(data.trim());
      }
    });
  });
}