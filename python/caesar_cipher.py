def caesar_cipher(str, shift):
    alpha= 'abcdefghijklmnopqrstuvwxyz'
    upper_alpha= list((alpha *2).upper())
    alpha= list(alpha *2)
    str_list= list(str)

    for i, letter in enumerate(str_list):
        if letter.isalpha() and letter.isupper():
            str_list[i] = upper_alpha[upper_alpha.index(str_list[i]) + shift] 
        elif letter.isalpha():
            str_list[i] = alpha[alpha.index(str_list[i]) + shift]
  
    return ''.join(str_list)
