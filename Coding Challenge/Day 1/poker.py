def three_of_a_kind(number_dict):
    return 3 in number_dict.values()

def four_of_a_kind(number_dict):
    return 4 in number_dict.values()

def num_of_pairs(number_dict):
    return len([k for k,v in number_dict.items() if v == 2])

def is_flush(suit_dict):
    return len(suit_dict) == 1
 
def is_straight(number_array):
    if 2 in number_array and 14 in number_array:
        index = number_array.index(14)
        number_array[index] = 1
    number_array.sort()
    for i in range(len(number_array)-1):
        if (number_array[i+1] - number_array[i] != 1):
            return False
    return True

def is_royal_flush(number_array, suit_dict):
    return is_straight(number_array) and is_flush(suit_dict) and number_array[0] == 10

def poker_combi(cards):
    suit_dict = {}
    number_dict = {}
    number_array = []
    big_cards_dict = {"J": 11, "Q": 12, "K": 13, "A": 14}
    for card in cards:
        suit = card[-1]
        number = card[0:len(card)-1]
        if number not in big_cards_dict:
            number = int(number)
        if suit in suit_dict:
            suit_dict[suit] += 1
        else:
            suit_dict[suit] = 1;
        
        if number in number_dict:
            number_dict[number] += 1
        else:
            number_dict[number] = 1;
            if number in big_cards_dict:
                number = big_cards_dict[number]
            number_array.append(number)
    
    if is_royal_flush(number_array, suit_dict):
        return "Royal Flush"
    elif is_straight(number_array) and is_flush(suit_dict):
        return "Straight Flush"
    elif four_of_a_kind(number_dict):
        return "Four of a Kind"
    elif three_of_a_kind(number_dict) and num_of_pairs(number_dict) == 1:
        return "Full House"
    elif is_flush(suit_dict) and not is_straight(number_array):
        return "Flush"
    elif len(number_array) == 5 and is_straight(number_array) and not is_flush(suit_dict):
        return "Straight"
    elif three_of_a_kind(number_dict):
        return "Three of a Kind"
    elif num_of_pairs(number_dict) == 2:
        return "Two Pair"
    elif num_of_pairs(number_dict) == 1:
        return "Pair"
    else:
        return "High Card"

print(poker_combi(["Ad", "2d", "3d", "4d", "5d"]))
