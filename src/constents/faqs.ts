export interface faq {
    id: number;
    question: string;
    answer: string;
    category: string;
    tip: {
        type: string;
        content: string;
    };
    bulletPoints: string[];
    icon: string;
}

export const faqs: faq[] = [
    {
        id: 5,
        question: "Is genius inherited, or can it be developed through environment?",
        answer: "Both matter — and they are inseparable. Think of a child as a seed. The genetic code sets certain possibilities, but the soil, sunlight, and water — the environment — determines whether that potential is fully realised. A child with a musical gene may develop remarkable ability in a home full of music, while another child with the same genetic potential may never discover that gift in a quieter household.",
        category: "Identifying Giftedness",
        tip: {
            type: "what_this_means",
            content: "You are both gardener and guide. Your role is to spot the particular strengths in your child and create the right conditions — not to squeeze them into society's idea of 'smart.' Every child's genius is unique: it might show as mathematical ability, musical sensitivity, emotional intelligence, or the gift of storytelling.",
        },
        bulletPoints: [],
        icon: "🔍",
    },
    {
        id: 8,
        question: "How do I balance academic challenge without putting too much pressure on the child?",
        answer: "The research is clear: pressure to reach 'full potential' can lead to anxiety, perfectionism, and burnout — especially when the child begins to define their entire identity around being 'the smart one.' True genius isn't about achieving a specific goal — it's about nurturing curiosity and creativity. History's greatest minds all had failures and setbacks.",
        category: "Learning & School",
        tip: {
            type: "growth_mindset",
            content: "Children who are taught that intelligence can grow through effort become more resilient learners. Praise 'I love how hard you worked on this' over 'You're so smart.' (Carol Dweck)",
        },
        bulletPoints: [
            "Focus on effort and curiosity, not outcomes and grades.",
            "Celebrate the process of learning, including mistakes and restarts.",
            "Encourage exploration across many domains — don't over-specialise too early.",
            "Protect time for unstructured creative play — it is not wasted time.",
        ],
        icon: "📚",
    },
    {
        id: 11,
        question: "How do asking questions help a child's development? How should I encourage this?",
        answer: "Questions are the engines of deep learning. They build brain connections that allow children to break down, combine, and evaluate information — what researchers call 'deep learning experiences.' True brilliance lies not in having all the answers but in knowing how to ask meaningful questions. Adults who model curiosity — openly admitting 'I don't know, let's find out together' — teach children that lifelong learning is an adventure.",
        category: "Learning & School",
        tip: {
            type: "from_the_book",
            content: "Back-and-forth conversations help the brain grow and improve the way children think through problems — and help them feel more confident sharing their ideas.",
        },
        bulletPoints: [
            "Ask open-ended questions that can't be answered with yes or no.",
            "When children ask something you don't know, explore it together first rather than immediately searching online.",
            "Respond to their questions with another question: 'What do you think might happen if...?'",
        ],
        icon: "📚",
    },
    {
        id: 16,
        question: "How do I build emotional intelligence (EQ) alongside intellectual development?",
        answer: "Emotional intelligence is not separate from genius — it is a core component of it. Children who understand feelings recover more easily from setbacks, adapt more readily, build stronger relationships, and are better equipped to seize opportunities. Children learn emotional skills through the adults around them. When parents and teachers show care, listen attentively, and talk openly about feelings, children absorb these skills by watching.",
        category: "Emotional Well-being",
        tip: {
            type: "research_2026",
            content: "After studying over 200 parent-child relationships, psychologists found that parents who regularly ask emotionally reflective questions raise children with greater emotional awareness, resilience, and empathy.",
        },
        bulletPoints: [
            "Create a safe space for emotions: let children know it's always okay to feel and that sharing feelings is welcomed.",
            "Practise emotion-naming daily: 'It sounds like you're frustrated. Is that right?'",
            "Use emotion cards with young children — matching faces to feelings makes it tangible.",
            "Talk about your own emotions: 'I felt nervous about that meeting today. Here's how I handled it.'",
            "Ask reflective questions: 'What do you think made you feel that way?'",
        ],
        icon: "💛",
    },
    {
        id: 22,
        question: "How do I teach my child to share, take turns, and get along with others?",
        answer: "Social skills are learnt, not innate — and every child moves at their own pace. Practical strategies at home are highly effective, especially when they are consistent and positive.",
        category: "Social Skills Development",
        tip: {
            type: "model_it",
            content: "How you interact with others sets the bar. Your child is watching how you handle disagreements, share, listen, and apologise. Behaviour is learnt by example far more than by instruction.",
        },
        bulletPoints: [
            "Positive reinforcement for sharing: Be specific and immediate — 'I'm so proud of you for sharing your snack just now. That was very kind.'",
            "Role-play social scenarios: Practise greetings, introductions, asking to join a group, and resolving disagreements.",
            "Empathy-based conversations after conflict: 'How do you think your friend felt when that happened?'",
            "Involve them in solving conflicts: 'What do you think we could do next time to avoid this problem?'",
            "Start small: Begin with one-on-one playdates before larger group settings.",
        ],
        icon: "🤝",
    },
    {
        id: 28,
        question: "How do I encourage my child's specific passion without pushing too hard?",
        answer: "Mozart's father recognised his son's musical potential early and nurtured it with care — creating one of history's most celebrated composers. But the key word is 'nurtured,' not 'forced.' When a child's passion comes from within, your role is to provide access, encouragement, and the right environment. When a child feels pushed toward a passion that is actually a parent's aspiration, the results are usually the opposite of what was hoped for.",
        category: "Home Environment & Screen Time",
        tip: {
            type: "",
            content: "",
        },
        bulletPoints: [
            "Follow the child's energy, not your ambition for them.",
            "Provide materials and opportunities without demanding outcomes: 'Here's a sketchbook — use it however you like.'",
            "Celebrate progress and effort, not performance or product.",
            "Allow them to change direction — exploring multiple passions is healthy, not wishy-washy.",
            "Protect time for unstructured exploration; over-scheduling kills intrinsic motivation.",
        ],
        icon: "🏡",
    },
    {
        id: 30,
        question: "How do I raise a child who is not just intelligent but also kind, balanced, and happy?",
        answer: "The ultimate measure of raising a genius child, as the book argues, is not the awards they receive or the praise they hear. It is how happy and at peace they are as they pursue what they love. A truly well-raised child combines academic ability with emotional intelligence, social skill, resilience, creativity, and a genuine love of learning. These qualities don't develop through pressure — they develop through a relationship of trust, curiosity, and unconditional support.",
        category: "Home Environment & Screen Time",
        tip: {
            type: "central_message",
            content: "Raising a genius child isn't about reaching a specific goal. It is about nurturing the curiosity and creativity that every child already has, allowing them to make their own unique mark on the world.",
        },
        bulletPoints: [
            "Value the whole child: Celebrate emotional milestones as enthusiastically as academic ones.",
            "Make room for joy: Learning should complement childhood joy, not overshadow it.",
            "Nurture character alongside capability: Kindness, empathy, and resilience are not soft skills — they are the architecture of a meaningful life.",
            "Build a relationship of trust: A child who feels known and loved for who they are is more likely to reach their full potential than one raised under pressure.",
        ],
        icon: "🏡",
    },
];