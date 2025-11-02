import csv

with open('input.tsv', 'r', encoding='utf-8', newline='') as infile, \
     open('output.csv', 'w', encoding='utf-8', newline='') as outfile:
    reader = csv.reader(infile, delimiter='\t')
    writer = csv.writer(outfile, delimiter=',', quoting=csv.QUOTE_ALL)
    writer.writerows(reader)

print("✅ 変換完了！output.csv を確認してください。")
