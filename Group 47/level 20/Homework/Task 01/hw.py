# დავალება 1:
# შექმენით სია სადაც ინაქბა სხვადასხვა ასეობი და მხოლოდ ხმოვნები დაითვალეთ

georgian_alphabet = ['ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ']

georgian_vowels=['ა', 'ე', 'ი', 'ო', 'უ']

only_vowels=[]

for i in georgian_alphabet:
    if i in georgian_vowels:
        only_vowels.append(i)
        
print('vowels',only_vowels) 