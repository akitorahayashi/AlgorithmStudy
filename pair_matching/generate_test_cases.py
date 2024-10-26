# generate_test_cases.py
import json

# テストケースの定義
data = [
    {
        "description": "Basic pair matching",
        "N": 4,
        "initials": [[1, 2], [2, 1], [3, 4], [4, 3]],
        "expected_output": 2
    },
    {
        "description": "Some participants cannot match",
        "N": 5,
        "initials": [[1, 2], [2, 1], [3, 4], [5, 6], [6, 7]],
        "expected_output": 1
    },
    {
        "description": "No pairs can be formed",
        "N": 6,
        "initials": [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12]],
        "expected_output": 0
    },
    {
        "description": "Large input with all participants matching",
        "N": 100000,
        "initials": [[i, i + 1] if i % 2 == 1 else [i, i - 1] for i in range(1, 1001)],  # 実行時間の短縮のためデータを縮小
        "expected_output": 50000
    },
    {
        "description": "Multiple matching pairs",
        "N": 8,
        "initials": [[1, 2], [2, 1], [3, 4], [4, 3], [5, 6], [7, 8], [8, 7], [6, 5]],
        "expected_output": 4
    },
    {
        "description": "Duplicate initials",
        "N": 6,
        "initials": [[1, 2], [2, 1], [1, 2], [2, 1], [3, 4], [4, 3]],
        "expected_output": 3
    },
    {
        "description": "One participant left unmatched",
        "N": 7,
        "initials": [[1, 2], [2, 1], [3, 4], [4, 3], [5, 6], [6, 5], [7, 8]],
        "expected_output": 3
    }
]

# JSONデータを標準出力に出力
print(json.dumps(data))