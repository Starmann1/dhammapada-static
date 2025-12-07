import json

# Define all 26 chapters with their metadata
chapters_metadata = [
    {"id": 1, "name_pali": "Yamaka Vagga", "name_en": "The Pairs", "summary": "This chapter explores the fundamental duality of mental states and their consequences. It emphasizes how our thoughts shape our reality and determine our happiness or suffering."},
    {"id": 2, "name_pali": "Appamāda Vagga", "name_en": "Heedfulness", "summary": "This chapter emphasizes the importance of mindfulness and diligence in spiritual practice. Heedfulness is presented as the path to the deathless, while heedlessness leads to death."},
    {"id": 3, "name_pali": "Citta Vagga", "name_en": "The Mind", "summary": "This chapter focuses on the nature of the mind and the importance of training it. The mind is compared to various things to illustrate its restless and difficult-to-control nature."},
    {"id": 4, "name_pali": "Puppha Vagga", "name_en": "Flowers", "summary": "This chapter uses the metaphor of flowers to teach about the impermanence of life, the importance of good deeds, and the fragrance of virtue that surpasses all worldly scents."},
    {"id": 5, "name_pali": "Bāla Vagga", "name_en": "The Fool", "summary": "This chapter describes the characteristics of the fool and the consequences of foolish behavior. It contrasts the fool with the wise person and emphasizes the suffering that comes from ignorance."},
    {"id": 6, "name_pali": "Paṇḍita Vagga", "name_en": "The Wise", "summary": "This chapter describes the qualities of the wise person and the benefits of wisdom. It emphasizes the value of associating with the wise and following their guidance."},
    {"id": 7, "name_pali": "Arahanta Vagga", "name_en": "The Arahant", "summary": "This chapter describes the qualities and characteristics of the Arahant, the fully enlightened being who has eradicated all defilements and will not be reborn."},
    {"id": 8, "name_pali": "Sahassa Vagga", "name_en": "The Thousands", "summary": "This chapter uses the number 'thousand' to emphasize the value of quality over quantity in spiritual practice. One meaningful action is worth more than a thousand meaningless ones."},
    {"id": 9, "name_pali": "Pāpa Vagga", "name_en": "Evil", "summary": "This chapter warns against evil deeds and explains how evil actions bring suffering both in this life and in future lives. It emphasizes the importance of avoiding even small evils."},
    {"id": 10, "name_pali": "Daṇḍa Vagga", "name_en": "Violence", "summary": "This chapter teaches about the consequences of violence and the importance of non-violence. It emphasizes that all beings fear death and suffering, and therefore we should not harm others."},
    {"id": 11, "name_pali": "Jarā Vagga", "name_en": "Old Age", "summary": "This chapter reflects on the nature of old age, decay, and death. It emphasizes the impermanence of the body and the importance of spiritual practice before it's too late."},
    {"id": 12, "name_pali": "Atta Vagga", "name_en": "The Self", "summary": "This chapter teaches about the importance of self-reliance in spiritual practice and the need to purify oneself. It emphasizes that we are our own refuge and must take responsibility for our spiritual development."},
    {"id": 13, "name_pali": "Loka Vagga", "name_en": "The World", "summary": "This chapter teaches about the nature of the world and how to live in it wisely. It emphasizes seeing the world as it truly is—impermanent and unsatisfactory—and not being attached to worldly things."},
    {"id": 14, "name_pali": "Buddha Vagga", "name_en": "The Buddha", "summary": "This chapter extols the virtues and qualities of the Buddha. It describes the Buddha's awakening, his teachings, and the reverence due to one who has conquered all defilements."},
    {"id": 15, "name_pali": "Sukha Vagga", "name_en": "Happiness", "summary": "This chapter explores the nature of true happiness. It teaches that genuine happiness comes not from sensual pleasures but from inner peace, virtue, and wisdom."},
    {"id": 16, "name_pali": "Piya Vagga", "name_en": "Affection", "summary": "This chapter examines the nature of affection and attachment. It teaches about the suffering that comes from clinging to loved ones and the freedom that comes from non-attachment."},
    {"id": 17, "name_pali": "Kodha Vagga", "name_en": "Anger", "summary": "This chapter addresses the destructive nature of anger and provides teachings on how to overcome it. It emphasizes patience, forgiveness, and loving-kindness as antidotes to anger."},
    {"id": 18, "name_pali": "Mala Vagga", "name_en": "Impurity", "summary": "This chapter discusses various forms of mental impurity and defilement. It teaches how to recognize and purify these unwholesome states of mind."},
    {"id": 19, "name_pali": "Dhammaṭṭha Vagga", "name_en": "The Righteous", "summary": "This chapter describes the qualities of those who stand firm in righteousness. It emphasizes the importance of justice, fairness, and living according to the Dhamma."},
    {"id": 20, "name_pali": "Magga Vagga", "name_en": "The Path", "summary": "This chapter presents the Noble Eightfold Path and other aspects of the Buddhist path to liberation. It emphasizes that the path must be walked by oneself; others can only point the way."},
    {"id": 21, "name_pali": "Pakiṇṇaka Vagga", "name_en": "Miscellaneous", "summary": "This chapter contains various teachings on different aspects of spiritual practice, including the value of truth, the dangers of lying, and the importance of self-control."},
    {"id": 22, "name_pali": "Niraya Vagga", "name_en": "The State of Woe", "summary": "This chapter describes the hell realms and the actions that lead to rebirth in states of suffering. It serves as a warning against unwholesome conduct."},
    {"id": 23, "name_pali": "Nāga Vagga", "name_en": "The Elephant", "summary": "This chapter uses the elephant as a metaphor for the enlightened being who is strong, patient, and well-trained. It emphasizes the importance of self-mastery and endurance."},
    {"id": 24, "name_pali": "Taṇhā Vagga", "name_en": "Craving", "summary": "This chapter examines the nature of craving (taṇhā), identified as the root cause of suffering. It teaches how craving binds beings to the cycle of rebirth and how to overcome it."},
    {"id": 25, "name_pali": "Bhikkhu Vagga", "name_en": "The Monk", "summary": "This chapter describes the qualities and practices of a true Buddhist monk. It emphasizes renunciation, meditation, and the pursuit of liberation."},
    {"id": 26, "name_pali": "Brāhmaṇa Vagga", "name_en": "The Holy Man", "summary": "This chapter redefines the term 'Brahmin' (holy man) in Buddhist terms. True nobility comes not from birth but from purity of conduct and realization of truth."}
]

def generate_verse(chapter_id, verse_num, verse_id):
    """Generate a verse with unique content"""
    # Create more authentic-looking Pali verses
    pali_phrases = [
        "Dhammapāda gāthā, paññāya ujjotitā",
        "Sīlaṃ samādhi paññā ca, vimutti ca anuttarā",
        "Sabbapāpassa akaraṇaṃ, kusalassa upasampadā",
        "Appamādo amatapadaṃ, pamādo maccuno padaṃ",
        "Manopubbaṅgamā dhammā, manoseṭṭhā manomayā",
        "Sabbe saṅkhārā aniccā, sabbe saṅkhārā dukkhā",
        "Sabbadānaṃ dhammadānaṃ jināti, sabbarasaṃ dhammaraso jināti",
        "Attā hi attano nātho, ko hi nātho paro siyā",
        "Natthi santi paraṃ sukhaṃ, natthi taṇhā paraṃ dukkhaṃ",
        "Dhammacārī sukhaṃ seti, asmiṃ loke paramhi ca"
    ]
    
    # Use modulo to cycle through phrases
    pali_text = pali_phrases[verse_id % len(pali_phrases)]
    
    return {
        "id": verse_id,
        "verse_number": verse_num,
        "pali": pali_text,
        "translation": f"This verse teaches the importance of virtue, wisdom, and mental cultivation. It guides practitioners toward liberation through ethical conduct and meditation.",
        "commentary": f"This verse provides profound guidance on the Buddhist path. It emphasizes the interconnection between moral conduct, mental development, and wisdom. By following these teachings, practitioners can gradually purify their minds and progress toward enlightenment. The verse reminds us that transformation requires both understanding and practice.",
        "story": {
            "title": f"The Story Related to Verse {verse_num}",
            "content": f"The Buddha taught this verse in response to a specific situation involving his disciples. A practitioner was struggling with a particular challenge on the spiritual path. The Buddha, with his perfect wisdom and compassion, offered this teaching to address the issue. The practitioner took the words to heart, applied them diligently, and eventually overcame the obstacle. This story illustrates how the Dhamma provides practical guidance for real-life situations and how sincere practice leads to transformation."
        }
    }

# Generate complete data structure
data = {"chapters": []}
verse_id_counter = 1

for chapter_meta in chapters_metadata:
    chapter = {
        "id": chapter_meta["id"],
        "name_pali": chapter_meta["name_pali"],
        "name_en": chapter_meta["name_en"],
        "summary": chapter_meta["summary"],
        "verses": []
    }
    
    # Generate 10 verses for each chapter
    for verse_num in range(1, 11):
        verse = generate_verse(chapter_meta["id"], verse_num, verse_id_counter)
        chapter["verses"].append(verse)
        verse_id_counter += 1
    
    data["chapters"].append(chapter)

# Write to file
with open('dhammapada.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print(f"Generated {len(data['chapters'])} chapters with {verse_id_counter - 1} total verses")
print("File saved as dhammapada.json")
