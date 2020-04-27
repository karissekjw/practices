def shorten(ipv6_str):
    array = ipv6_str.split(":")
    new_array = []
    for i in range(len(array)):
        ip = array[i]
        counter = 1
        while ip[0] == "0":
            ip = array[i][counter:len(array)]
            counter += 1
            if len(ip) == 1 and ip[0] == "0":
                break
            
        new_array.append(ip)
    # print(new_array)
    prev_zero = False
    consec_zero = False
    final_array = []
    for i in range(len(new_array)):
        if new_array[i] != "0":
            final_array.append(new_array[i])
        else:
            if consec_zero == True:
                final_array.append("0")
            else:   
                if i+1 > len(new_array) -1:
                    final_array.append(new_array[i])
                elif prev_zero == True and new_array[i+1] != "0":
                    final_array.append("")
                    prev_zero = False
                    consec_zero = True
                else:
                    prev_zero = True
    
    string = ':'.join(final_array)
    if string[0] == ":":
        string = ":" + string
    return string


# print(shorten("2001:0db8:0000:0000:0000:ff00:0042:8329"))
print(shorten("2001:0db8:0000:0000:0042:8329:0000:0000"))
print(shorten("0000:0000:0000:0120:0000:0000:0000:0001"))
print(shorten("1029:9183:81AE:0000:0000:0AC1:2143:019B"))