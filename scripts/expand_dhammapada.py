import json

# Chapter data with authentic information
chapters_info = [
    {"id": 1, "name_pali": "Yamaka Vagga", "name_en": "The Pairs", "verses": 20, "summary": "This chapter explores the fundamental duality of mental states and their consequences. It emphasizes how our thoughts shape our reality and determine our happiness or suffering."},
    {"id": 2, "name_pali": "Appamāda Vagga", "name_en": "Heedfulness", "verses": 12, "summary": "This chapter emphasizes the critical importance of mindfulness and diligence on the path to enlightenment. Heedfulness is portrayed as the path to the deathless, while heedlessness leads to suffering."},
    {"id": 3, "name_pali": "Citta Vagga", "name_en": "The Mind", "verses": 11, "summary": "This chapter focuses on the nature of the mind and the necessity of training and purifying it. The mind is described as difficult to guard but essential to master for achieving liberation."},
    {"id": 4, "name_pali": "Puppha Vagga", "name_en": "Flowers", "verses": 16, "summary": "Using the imagery of flowers, this chapter illustrates the transient nature of existence and encourages the pursuit of spiritual progress with wisdom and mindfulness."},
    {"id": 5, "name_pali": "Bāla Vagga", "name_en": "The Fool", "verses": 16, "summary": "This chapter explores the characteristics of foolish persons and the negative consequences of ignorance, warning against association with those who lead one astray."},
    {"id": 6, "name_pali": "Paṇḍita Vagga", "name_en": "The Wise", "verses": 14, "summary": "This chapter describes the qualities of wise persons and emphasizes the importance of associating with noble companions who guide one toward enlightenment."},
    {"id": 7, "name_pali": "Arahanta Vagga", "name_en": "The Arahant", "verses": 10, "summary": "This chapter details the qualities of Arahants—those who have achieved complete enlightenment and liberation from all suffering and attachments."},
    {"id": 8, "name_pali": "Sahassa Vagga", "name_en": "The Thousands", "verses": 16, "summary": "This chapter highlights the value of quality over quantity, emphasizing that one meaningful word or act of self-mastery is worth more than thousands of meaningless ones."},
    {"id": 9, "name_pali": "Pāpa Vagga", "name_en": "Evil", "verses": 13, "summary": "This chapter discusses the consequences of unwholesome actions and urges practitioners to hasten toward good while restraining the mind from evil."},
    {"id": 10, "name_pali": "Daṇḍa Vagga", "name_en": "Violence", "verses": 17, "summary": "This chapter addresses the consequences of causing harm to others and emphasizes non-violence, compassion, and the universal desire for happiness and freedom from suffering."},
    {"id": 11, "name_pali": "Jarā Vagga", "name_en": "Old Age", "verses": 11, "summary": "This chapter reflects on the impermanence of life, the inevitability of aging and death, and the urgency of spiritual practice while one still has the opportunity."},
    {"id": 12, "name_pali": "Atta Vagga", "name_en": "The Self", "verses": 10, "summary": "This chapter deals with self-control, self-respect, and the importance of being one's own refuge through diligent practice and ethical conduct."},
    {"id": 13, "name_pali": "Loka Vagga", "name_en": "The World", "verses": 12, "summary": "This chapter explores the nature of the world as filled with attachment and illusion, teaching that through mindfulness and right view, one can transcend worldly suffering."},
    {"id": 14, "name_pali": "Buddha Vagga", "name_en": "The Buddha", "verses": 18, "summary": "This chapter praises the qualities and teachings of the Buddha, describing the path to awakening and the characteristics of those who follow the Buddha's way."},
    {"id": 15, "name_pali": "Sukha Vagga", "name_en": "Happiness", "verses": 12, "summary": "This chapter reveals the true nature of happiness beyond material possessions, teaching that genuine joy comes from freedom from hatred, health, contentment, and ultimately, Nibbāna."},
    {"id": 16, "name_pali": "Piya Vagga", "name_en": "Affection", "verses": 12, "summary": "This chapter explores the nature of affection and attachment, warning about the sorrow that arises from excessive attachment to loved ones and pleasant things."},
    {"id": 17, "name_pali": "Kodha Vagga", "name_en": "Anger", "verses": 14, "summary": "This chapter addresses the destructive nature of anger and teaches the cultivation of patience, loving-kindness, and the abandonment of resentment."},
    {"id": 18, "name_pali": "Mala Vagga", "name_en": "Impurity", "verses": 21, "summary": "Using the metaphor of rust and stains, this chapter discusses various mental impurities that hinder spiritual progress and emphasizes purification through wisdom and effort."},
    {"id": 19, "name_pali": "Dhammaṭṭha Vagga", "name_en": "The Just", "verses": 17, "summary": "This chapter explores the nature of true justice and righteousness, teaching that wisdom comes not from speaking much but from living peacefully and fearlessly in accordance with truth."},
    {"id": 20, "name_pali": "Magga Vagga", "name_en": "The Path", "verses": 17, "summary": "This chapter provides guidance on the Noble Eightfold Path, emphasizing its role as the way to purification, the cessation of suffering, and the attainment of Nibbāna."},
    {"id": 21, "name_pali": "Pakiṇṇaka Vagga", "name_en": "Miscellaneous", "verses": 16, "summary": "This chapter contains various teachings on different aspects of the Dhamma, including the nature of happiness, mindfulness, and the conduct of those seeking liberation."},
    {"id": 22, "name_pali": "Niraya Vagga", "name_en": "Hell", "verses": 14, "summary": "This chapter describes the consequences of evil deeds that lead to states of woe, warning against lying, denial of wrongdoing, and immoral conduct."},
    {"id": 23, "name_pali": "Nāga Vagga", "name_en": "The Elephant", "verses": 14, "summary": "Using the elephant as a metaphor for strength and training, this chapter teaches about endurance, self-control, and the taming of one's mind and senses."},
    {"id": 24, "name_pali": "Taṇhā Vagga", "name_en": "Craving", "verses": 26, "summary": "This chapter is devoted entirely to the theme of craving (taṇhā), teaching that it is the root of suffering and must be completely eradicated for liberation to be achieved."},
    {"id": 25, "name_pali": "Bhikkhu Vagga", "name_en": "The Monk", "verses": 23, "summary": "This chapter describes the ideal conduct and qualities of a Buddhist monk, emphasizing restraint, mindfulness, contentment, and the pursuit of liberation."},
    {"id": 26, "name_pali": "Brāhmaṇa Vagga", "name_en": "The Brāhmaṇa", "verses": 41, "summary": "This final chapter describes the highest spiritual attainment, using the term 'Brāhmaṇa' in a spiritual sense to denote one who has achieved complete purification and liberation."}
]

# Load existing Chapter 1 data
with open('dhammapada.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Keep Chapter 1 as is (it has full content)
chapter_1 = data['chapters'][0]

# Create new chapters array
new_chapters = [chapter_1]

# Add chapters 2-26 with placeholder verses
for chapter_info in chapters_info[1:]:  # Skip chapter 1
    chapter = {
        "id": chapter_info["id"],
        "name_pali": chapter_info["name_pali"],
        "name_en": chapter_info["name_en"],
        "summary": chapter_info["summary"],
        "verses": []
    }
    
    # Calculate starting verse number
    start_verse = sum(c["verses"] for c in chapters_info[:chapter_info["id"]-1]) + 1
    
    # Add placeholder verses
    for i in range(chapter_info["verses"]):
        verse_num = start_verse + i
        verse = {
            "verse_number": verse_num,
            "pali": "[To be added]",
            "translation": "[To be added]",
            "commentary": "[To be added]",
            "story": {
                "title": "[To be added]",
                "content": "[To be added]"
            }
        }
        chapter["verses"].append(verse)
    
    new_chapters.append(chapter)

# Create final data structure
final_data = {"chapters": new_chapters}

# Write to file
with open('dhammapada.json', 'w', encoding='utf-8') as f:
    json.dump(final_data, f, ensure_ascii=False, indent=4)

print(f"✓ Successfully created {len(new_chapters)} chapters")
print(f"✓ Total verses: {sum(len(c['verses']) for c in new_chapters)}")
print(f"✓ Chapter 1: {len(chapter_1['verses'])} verses (complete)")
print(f"✓ Chapters 2-26: {sum(len(c['verses']) for c in new_chapters[1:])} verses (placeholders)")
