def connect_words(words):
    string = words[0]
    no_of_duplicated = []
    for i in range(1,len(words)):
        first_word = words[i-1]
        second_word = words[i]
        second_length = len(words[i])
        substring = ""
        min_length = min(len(first_word), len(second_word))
        max_length = max(len(first_word), len(second_word))

        for j in range(min_length):
            substring += string[-1-j]
            new_sub = substring[::-1]
            if new_sub not in second_word:
                substring = new_sub[1:len(new_sub)]
                break
        
        index = second_word.find(substring)
        start_index = index + len(substring)
        string += second_word[start_index: len(second_word)]
        no_of_duplicated.append(len(substring))
    
    return [string, min(no_of_duplicated)]
print(connect_words(["Ilov", "ovollo", "ollo", "oohello", "lloelllo"]))