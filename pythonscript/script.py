import pandas as pd

f = pd.read_csv("CardList.csv")

f.to_json(path_or_buf="j.json", orient='records')
    