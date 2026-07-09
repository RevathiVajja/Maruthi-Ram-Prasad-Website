export interface ReviewData {
  id: number;
  name: string;
  role: string;
  initials: string;
  rating: number;
  tag: "parents" | "teachers";
  date: string;
  text: string;
  highlight: string | null;
}

export const reviewsData: ReviewData[] = [
  {
    id: 1,
    name: "Vaishnavi",
    role: "Canada",
    initials: "PM",
    rating: 5,
    tag: "parents",
    date: "June 2026",
    text: "I bought this book during a rough week when my 7-year-old was having daily meltdowns. Chapter 4 completely reset my approach — I stopped trying to fix the behaviour and started addressing the feeling underneath it. Within two weeks, the meltdowns were half as frequent.",
    highlight:
      "The author doesn't just tell you what to do — he explains why children feel what they feel. That understanding changed everything.",
  },
  {
    id: 2,
    name: "V.V.Ramana",
    role: "Kuwait",
    initials: "RS",
    rating: 5,
    tag: "teachers",
    date: "June 2026",
    text: "I've been a teacher for 11 years and I still learned things from Chapter 2 that I applied immediately. The idea that gifted children aren't always the quiet top-performers — some are the loud, disruptive ones who finished the work in 4 minutes — was something I'd sensed but never seen articulated so clearly.",
    highlight:
      "I now look for the child who is bored, not just the child who is achieving. That's the gift this book gave me.",
  },
  {
    id: 3,
    name: "Arjun",
    role: "USA",
    initials: "AR",
    rating: 5,
    tag: "parents",
    date: "June 2026",
    text: "Chapter 3 transformed our home without spending a single rupee. I moved our bookshelves to the living room, put a world map in my son's bedroom, and started letting him help me cook. He now asks questions at dinner that my husband and I have to Google together.",
    highlight:
      "The home-as-a-learning-space framework is genius in its simplicity. You already have everything you need.",
  },
  {
    id: 4,
    name: "Ms. Kavitha Iyer",
    role: "Senior Teacher & Parent · Mumbai",
    initials: "KI",
    rating: 5,
    tag: "teachers",
    date: "June 2026",
    text: "As both a teacher and a mother of a socially anxious child, Chapter 9 was deeply personal. The scripts for empathy-based discipline — asking 'how do you think she felt?' instead of assigning blame — work better than anything I've tried in 8 years of teaching.",
    highlight:
      "The role-play exercises for practising greetings and turn-taking at home are embarrassingly simple and embarrassingly effective.",
  },
  {
    id: 5,
    name: "Bharat",
    role: "Hyderabad - India",
    initials: "VN",
    rating: 5,
    tag: "parents",
    date: "June 2026",
    text: "I used to tidy up my daughter's creative chaos because it bothered me. This book made me realise I was dismantling her thinking in real time. Now I leave it. Her focus is extraordinary for a 4-year-old. I was the problem, not the mess.",
    highlight: null,
  },
  {
    id: 6,
    name: "Imran",
    role: "UK",
    initials: "SP",
    rating: 5,
    tag: "teachers",
    date: "June 2026",
    text: "From a professional standpoint, I was impressed by how well-researched this book is while remaining completely accessible. The nature vs nurture section correctly positions environment as the activator of genetic potential. I'll be recommending this to parents in my practice.",
    highlight:
      '"Genes set the canvas. Environment paints the masterpiece." — This single line is worth the book.',
  },
  {
    id: 7,
    name: "Akash Verma",
    role: "Stay-at-home dad · Pune",
    initials: "AV",
    rating: 5,
    tag: "parents",
    date: "July 2026",
    text: "As a stay-at-home dad I sometimes doubt whether I'm doing enough. Recognising that my 3-year-old's obsessive focus on trains isn't 'just a phase' but a genuine sign of deep interest — and knowing how to nurture it without over-scheduling him — was exactly what I needed.",
    highlight:
      "The reminder that every question they ask, every story they tell reveals their inner spark — I read this every morning.",
  },
  {
    id: 8,
    name: "Mr. Deepak Bose",
    role: "School Principal · Kolkata",
    initials: "DB",
    rating: 5,
    tag: "teachers",
    date: "July 2026",
    text: "I've recommended this to every teacher in our school and made it part of our professional development reading list. Maruthi Ram Prasad brings over 30 years of real school leadership — this isn't theoretical. The sections on identifying gifted students in mixed-ability classrooms are especially relevant.",
    highlight:
      "The statement that gifted children aren't always high achievers — some are the most disruptive students — is something every teacher needs to hear.",
  },
];