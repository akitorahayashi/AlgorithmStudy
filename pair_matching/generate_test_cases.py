import json

# テストケースの定義
def generate_large_test_case():
    description = "Large input with all participants matching"
    N = 100000
    initials = "\n".join([f"{i} {i+1}" if i % 2 == 1 else f"{i} {i-1}" for i in range(1, 1001)])
    expected_output = 50000
    return f"""\n    {description}\n    {N}\n    {initials}\n    {expected_output}\n    """

# 生成した文字列を他のテストケースと合わせてリストに追加
test_cases = [
    """
    Basic pair matching
    4
    1 2
    2 1
    3 4
    4 3
    2
    """,
    """
    Some participants cannot match
    5
    1 2
    2 1
    3 4
    5 6
    6 7
    1
    """,
    """
    No pairs can be formed
    6
    1 2
    3 4
    5 6
    7 8
    9 10
    11 12
    0
    """,
    generate_large_test_case(),  # 動的に生成された大規模テストケース
    """
    Multiple matching pairs
    8
    1 2
    2 1
    3 4
    4 3
    5 6
    7 8
    8 7
    6 5
    4
    """,
    """
    Duplicate initials
    6
    1 2
    2 1
    1 2
    2 1
    3 4
    4 3
    3
    """,
    """
    One participant left unmatched
    7
    1 2
    2 1
    3 4
    4 3
    5 6
    6 5
    7 8
    3
    """
]

# テストケースをJSONとして出力
print(json.dumps(test_cases))
