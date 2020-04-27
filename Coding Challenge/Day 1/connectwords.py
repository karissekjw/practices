# def find_duplicate(first_word, second_word, array):
#     duplicated_words = []
#     counter = 0
#     min_length = min(len(first_word), len(second_word))
#     max_length = max(len(first_word), len(second_word))
#     if len(first_word) == max_length:
#         first = first_word
#         second = second_word
#     else:
#         first = second_word
#         second = first_word
#     for i in range(max_length):
#         for j in range(min_length):
#             if first[i] == second[j]:
#                 counter += 1
#     array.append(counter)
#     return array

def connect_words(words):
    string = words[0]
    no_of_duplicated = []
    for i in range(1,len(words)):
        first_word = words[i-1]
        second_word = words[i]
        combine_words = first_word + second_word
        second_length = len(words[i])
        second_word_counter = 0
        first_word_counter = 0
        # no_of_duplicated = find_duplicate(first_word, second_word, no_of_duplicated)
        while first_word_counter != max(second_length, len(first_word))-1:
            print(first_word[first_word_counter], second_word[second_word_counter], first_word_counter, second_word_counter)
            if first_word[first_word_counter] != second_word[second_word_counter]:
                first_word_counter += 1
                # if second_word_counter > 0:
                #     second_word_counter = 0
                #     first_word_counter +=1
            else:
                first_word_counter += 1
                second_word_counter += 1
            # if first_word_counter == min(second_length, len(first_word)) and second_word_counter != len(second_word):
            #     first_word_counter = 0
            #     second_word_counter += 1
        no_of_duplicated.append(second_word_counter)
        string += second_word[second_word_counter:second_length+1]
    
    return [string, min(no_of_duplicated)]


print(connect_words(["people", "pleasure", "area"]))