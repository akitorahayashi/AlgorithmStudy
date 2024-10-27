import { spawn, ChildProcessWithoutNullStreams } from 'child_process';

export function readTestCases(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const pythonProcess: ChildProcessWithoutNullStreams = spawn('python3', ['generate_test_cases.py'], {
      cwd: '/Users/hayashiakitora/Develop/AlgorithmStudy/pair_matching',
    });

    let data = '';

    // 標準出力を取得
    pythonProcess.stdout.on('data', (chunk: Buffer) => {
      data += chunk.toString();
    });

    // 標準エラー出力を取得
    pythonProcess.stderr.on('data', (error: Buffer) => {
      console.error(`エラー: ${error.toString()}`);
      reject(error.toString());
    });

    // プロセス終了時の処理
    pythonProcess.on('close', (code: number) => {
      if (code !== 0) {
        reject(`Pythonスクリプトがエラー終了しました。コード: ${code}`);
      } else {
        try {
          // データをJSON形式としてパースし、string[]として返す
          const testCases: string[] = JSON.parse(data.trim());
          resolve(testCases);
        } catch (parseError: any) {
          reject(`デコード中にエラーが発生しました: ${parseError.message}`);
        }
      }
    });
  });
}
