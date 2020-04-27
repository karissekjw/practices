def validate(ipv6_str):
    valid_ip = "0123456789abcdef:"
    if ipv6_str.count(":") > 7:
        return False
    else:
        array = ipv6_str.split(":")
        prev_zero = False
        consec_zero = False;
        # print(array)
        if array.count("") > 2:
            return False
        else:
            for ip in array:
                if len(ip) > 4:
                    return False
                if prev_zero == False and ip == "0":
                    prev_zero = True
                elif prev_zero == True and ip == "0":
                    return False
                else:
                    prev_zero = False
        
    string = ':'.join(array)
    for ch in string:
        if ch not in valid_ip:
            return False
    return True
                

print(validate("::1"))