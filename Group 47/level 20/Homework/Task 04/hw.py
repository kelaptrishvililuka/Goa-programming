# შექმნით რომბი
#  ******
#   ******
#    ******


n = 6

for i in range(n):
    print(' ' * i + '*' * (n - i))

for i in range(1, n):
    print(' ' * (n - i - 1) + '*' * (i + 1))