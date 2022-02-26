# leetcode-question-repo

General Notes:/
/
Sliding window structure:
Expand window until you don't meet criteria anymore, have while loop to shink window until criteria is met again.\

e.g.\
```python
def sliding_window(s: string, k: int):
  l = 0
  res = 0
  # k is our criterion
  for (r in range(0, len(s)): # this expands window with r+=1
  #
  while(r-l+1 > k): # this contracts window based on criteria inside while
    l+=1
  
  candidate = value(s[l:r+1], k) # for generic value function
  
    # check if you update local maximum etc res = max(res, candidate)
  
  return res
```
