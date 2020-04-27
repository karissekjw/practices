def hexadecimal(base10_int):
    total = ""
    string = "0123456789abcdef"
    
    while base10_int != 0:
        remainder = base10_int % 16
        base10_int = base10_int // 16
        total += string[remainder]
        
    return total[::-1];
        

print(hexadecimal(65152))