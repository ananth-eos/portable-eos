import type { Author, Book, Genre, GenreInfo, Idea } from "./types";

export const genres: GenreInfo[] = [
  { slug: "business", name: "Business & Strategy", description: "Strategy, management, leadership, and how organizations work." },
  { slug: "psychology", name: "Psychology & Mind", description: "Cognition, behavior, decision-making, and the mechanics of mind." },
  { slug: "self", name: "Self-improvement", description: "Habits, productivity, learning, and the practical work of changing yourself." },
  { slug: "science", name: "Science & Tech", description: "Physics, biology, computing, and the world the sciences describe." },
  { slug: "history", name: "History & Society", description: "Long-arc histories of people, ideas, and institutions." },
  { slug: "biography", name: "Biography & Memoir", description: "Lives examined — by their subjects or by their close observers." },
  { slug: "philosophy", name: "Philosophy", description: "Ethics, metaphysics, mind, and the questions that don't go away." },
  { slug: "fiction", name: "Fiction", description: "Novels and stories worth knowing the arguments of." },
];

export const genreCounts: Record<Genre, number> = {
  business: 218,
  psychology: 186,
  self: 241,
  science: 152,
  history: 163,
  biography: 94,
  philosophy: 128,
  fiction: 76,
};

export const authors: Author[] = [
  {
    slug: "james-clear",
    name: "James Clear",
    bio: "Writer and speaker focused on habits, decision-making, and continuous improvement. Atomic Habits grew out of a weekly newsletter that, by 2018, had become one of the most widely read habit-related publications online.",
  },
  {
    slug: "charles-duhigg",
    name: "Charles Duhigg",
    bio: "Pulitzer Prize–winning reporter, formerly at The New York Times. Writes about how organizations, individuals, and societies form patterns of behavior — and what it takes to break them.",
  },
  {
    slug: "bj-fogg",
    name: "BJ Fogg",
    bio: "Behavior scientist at Stanford, founder of the Behavior Design Lab. His Tiny Habits method has been taught to tens of thousands and underlies many of the design patterns used in modern habit apps.",
  },
  {
    slug: "cal-newport",
    name: "Cal Newport",
    bio: "Computer-science professor at Georgetown and author of seven books on the relationship between technology, focus, and meaningful work. Best known for arguing — early and persistently — that attention is the scarce resource.",
  },
  {
    slug: "daniel-kahneman",
    name: "Daniel Kahneman",
    bio: "Psychologist and Nobel laureate in economics for his work on judgment and decision-making with Amos Tversky. Thinking, Fast and Slow is the popular synthesis of four decades of research on the two systems that produce human thought.",
  },
  {
    slug: "naval-ravikant",
    name: "Naval Ravikant",
    bio: "Founder of AngelList and one of the most quoted figures in Silicon Valley's late-2010s cultural turn toward stoicism, leverage, and long-term thinking. The Almanack collects a decade of his tweets, interviews, and essays.",
  },
];

const atomicHabitsIdeas: Idea[] = [
  {
    slug: "compound-interest-of-self-improvement",
    text: "Habits are the compound interest of self-improvement. 1% better every day is roughly 37× better in a year; 1% worse every day, near zero.",
    bookSlug: "atomic-habits",
    chapterRef: "Ch. 1",
    readMin: 2,
    position: 1,
    tags: ["compounding", "habits", "consistency"],
    whyItMatters:
      "Most behavior-change advice fails because it underestimates how small the daily increment can be while still working — and overestimates how visible the early returns will be. Clear's reframing is mathematical: a 1% daily improvement compounds. The arithmetic is what gives the discipline of small consistent action its weight.\n\nThe implication is psychological more than practical. If results compound, then the early returns feel disappointingly small relative to the effort — what Clear calls the Plateau of Latent Potential. Quitting a habit because it isn't 'working yet' is, in this framing, simply quitting before the curve bends.",
    distilled:
      "The size of any single action is irrelevant. The slope of the line you're on is everything. Choose the slope, repeat, ignore early flatness.",
    whereElse:
      "The idea isn't original to Clear — it's a popularization of older threads. Stephen Covey called it 'sharpening the saw.' Charlie Munger has said it for decades about compounding in any domain, including character. Will Durant, paraphrasing Aristotle: 'we are what we repeatedly do; excellence is not an act, but a habit.' Clear's contribution is the 1% framing, which makes the idea concrete enough to act on tomorrow morning.",
    howToUse:
      "Pick one behavior. Reduce it until it is laughably small — small enough that 'I didn't have time' is obviously false. Do it. Tomorrow, do it again. Don't optimize for the size of the action; optimize only for the consistency of the slope.",
    relatedIdeaSlugs: ["habit-loop", "tiny-habits-anchor", "sharpening-the-saw"],
  },
  {
    slug: "systems-over-goals",
    text: "You don't rise to the level of your goals; you fall to the level of your systems. Goals set direction; systems produce results.",
    bookSlug: "atomic-habits",
    chapterRef: "Ch. 1",
    readMin: 1,
    position: 2,
    tags: ["systems", "goals", "process"],
    whyItMatters:
      "Goals tell you where to point. They don't tell you what to do at 7am on a Tuesday. The same goal — 'get fit' — produces wildly different outcomes depending on whether you have a system of going to the gym at the same hour or a system of negotiating with yourself each morning.\n\nClear's deeper point is that winners and losers often share the same goals. The differentiator is the daily structure. Systems are also where the only real decisions live — once a system is in place, the goal mostly takes care of itself.",
    distilled:
      "Goals are a vector. Systems are the actual mechanism. Stop optimizing the vector; optimize the mechanism.",
    relatedIdeaSlugs: ["compound-interest-of-self-improvement", "deep-work-rule"],
  },
  {
    slug: "identity-based-habits",
    text: "Identity-based change beats outcome-based change. Don't ask 'how do I run more?' — ask 'what would a runner do?' and do that.",
    bookSlug: "atomic-habits",
    chapterRef: "Ch. 2",
    readMin: 2,
    position: 3,
    tags: ["identity", "habits", "change"],
    whyItMatters:
      "Outcome-based change asks you to do something you don't yet identify with — and then quietly punishes you when you fall short. Identity-based change inverts the problem: you decide who you want to be, and then small daily evidence accumulates to confirm that identity.\n\nThis matters because identity is sticky in a way that goals are not. 'I'm trying to quit smoking' has different psychology from 'I'm not a smoker.' One is a struggle; the other is a fact.",
    distilled:
      "Decide who you want to be, then collect small daily votes for that person. Habits are how identity becomes evidence.",
    howToUse:
      "Pick the identity you'd like to inhabit a year from now. Write it as 'I am the kind of person who…' and list the smallest daily action that earns one vote.",
    relatedIdeaSlugs: ["systems-over-goals", "tiny-habits-anchor"],
  },
  {
    slug: "habit-loop",
    text: "Every habit follows the loop: cue → craving → response → reward. If any link breaks, the habit doesn't form.",
    bookSlug: "atomic-habits",
    chapterRef: "Ch. 3",
    readMin: 1,
    position: 4,
    tags: ["mechanics", "habits", "behavior"],
    whyItMatters:
      "The loop is descriptive, not prescriptive — it's the model that lets you diagnose why a habit isn't sticking. If the cue is invisible, the loop never starts. If the reward is delayed or unfelt, the loop doesn't close. Most failed habits fail at one of these four points, and the diagnosis tells you which lever to pull.",
    distilled:
      "All four links must close, every time, for the loop to harden. Find the broken link.",
    relatedIdeaSlugs: ["four-laws", "habit-loop-duhigg"],
  },
  {
    slug: "four-laws",
    text: "The four laws of behavior change: make it obvious, make it attractive, make it easy, make it satisfying. To break a habit, invert each.",
    bookSlug: "atomic-habits",
    chapterRef: "Ch. 4",
    readMin: 2,
    position: 5,
    tags: ["framework", "habits", "design"],
    whyItMatters:
      "The four laws are Clear's operationalization of the habit loop. Each law maps to one of the four parts of the loop — cue (obvious), craving (attractive), response (easy), reward (satisfying) — and gives you concrete moves for each.\n\nIt's also the first behavior-change framework that's symmetric: to build a habit, satisfy all four; to break one, violate all four. Most prior frameworks were one-sided.",
    distilled:
      "Four levers, mapped to four parts of the loop. Pull each forward to build, each backward to break.",
    relatedIdeaSlugs: ["habit-loop", "two-minute-rule", "environment-design"],
  },
  {
    slug: "environment-design",
    text: "Environment beats willpower. The simplest behavior change is to change what's within reach.",
    bookSlug: "atomic-habits",
    chapterRef: "Ch. 6",
    readMin: 1,
    position: 6,
    tags: ["environment", "willpower"],
    whyItMatters:
      "Willpower is depletable; environment is constant. Putting the fruit on the counter and the cookies in a high cabinet is a one-time act that pays off every hour of every day. Most people who appear to have great self-discipline have, on closer inspection, simply arranged a life where the high-discipline option is the default option.",
    distilled:
      "Don't out-discipline a bad environment. Out-design it.",
    relatedIdeaSlugs: ["four-laws", "tiny-habits-anchor"],
  },
  {
    slug: "two-minute-rule",
    text: "The two-minute rule: scale any new habit down until it takes less than two minutes to start. The hard part isn't doing it — it's starting.",
    bookSlug: "atomic-habits",
    chapterRef: "Ch. 13",
    readMin: 1,
    position: 7,
    tags: ["starting", "habits", "friction"],
    whyItMatters:
      "Habit formation breaks at the moment of initiation, not the moment of execution. Once you've started running, finishing the run is rarely the issue. The two-minute rule attacks the only step that matters: getting into motion. 'Read before bed' becomes 'open the book.' 'Run three miles' becomes 'put on shoes.'\n\nThe move is to ratchet down the entry cost until 'I don't have time' becomes obviously false.",
    distilled:
      "Reduce the habit until starting is the only thing required. Starting is the entire battle.",
    relatedIdeaSlugs: ["four-laws", "tiny-habits-anchor"],
  },
  {
    slug: "never-miss-twice",
    text: "Never miss twice. One slip is an accident; two is the start of a pattern.",
    bookSlug: "atomic-habits",
    chapterRef: "Ch. 16",
    readMin: 1,
    position: 8,
    tags: ["consistency", "recovery", "habits"],
    whyItMatters:
      "Perfectionists abandon habits the first time they break the streak — which is precisely the wrong move. The damage of one missed day is small. The damage of treating that miss as a verdict on your character is the actual habit-killer.\n\nThe rule is asymmetric: don't aim for perfect, aim for 'never two in a row.' This produces the resilience that long habits actually require.",
    distilled:
      "The streak is not the point. Returning the next day is the point.",
    relatedIdeaSlugs: ["compound-interest-of-self-improvement"],
  },
];

const powerOfHabitIdeas: Idea[] = [
  {
    slug: "habit-loop-duhigg",
    text: "A habit is a three-part loop — cue, routine, reward — and changing the routine while keeping the cue and reward is the only reliable way to change a habit.",
    bookSlug: "the-power-of-habit",
    chapterRef: "Ch. 1",
    readMin: 2,
    position: 1,
    tags: ["habits", "mechanics", "change"],
    whyItMatters:
      "Duhigg's Golden Rule of habit change: don't try to extinguish a habit — replace its middle. The cue (3pm slump) and reward (a moment of relief) are doing real work in your life; you can't simply remove them. But you can route them through a different routine, and that's where habit change actually happens.",
    distilled:
      "Keep the cue. Keep the reward. Swap the routine. That's the surgery.",
    relatedIdeaSlugs: ["habit-loop", "four-laws"],
  },
  {
    slug: "keystone-habits",
    text: "Some habits matter more than others. Keystone habits trigger cascades — change one, and others change with it.",
    bookSlug: "the-power-of-habit",
    chapterRef: "Ch. 4",
    readMin: 2,
    position: 2,
    tags: ["leverage", "habits", "cascade"],
    whyItMatters:
      "Not every habit produces equal returns. A keystone habit — exercise, family dinner, daily writing — reorganizes the rest of your day around it, and downstream behaviors shift without conscious effort. Identifying yours is high-leverage; trying to fix every habit one at a time is not.",
    distilled:
      "Find the one habit that drags the others. Change that one.",
    relatedIdeaSlugs: ["systems-over-goals", "compound-interest-of-self-improvement"],
  },
  {
    slug: "willpower-as-muscle",
    text: "Willpower is a muscle. It fatigues with use, but it also strengthens with training — and a habit, once formed, costs none of it.",
    bookSlug: "the-power-of-habit",
    chapterRef: "Ch. 5",
    readMin: 2,
    position: 3,
    tags: ["willpower", "habits", "automation"],
    whyItMatters:
      "Roy Baumeister's research, which Duhigg synthesizes, shows willpower as a finite daily resource. The implication is counterintuitive: the goal isn't to use more willpower, it's to use less. Habits are the offload mechanism — once a behavior is automatic, willpower isn't required for it at all.",
    distilled:
      "The point of a habit is to spend the willpower exactly once.",
    relatedIdeaSlugs: ["environment-design", "four-laws"],
  },
  {
    slug: "small-wins-organizational",
    text: "Organizations change by stacking small wins. Big transformations are almost always assembled from sequences of unambiguous, achievable steps.",
    bookSlug: "the-power-of-habit",
    chapterRef: "Ch. 4",
    readMin: 2,
    position: 4,
    tags: ["organizations", "change", "small-wins"],
    whyItMatters:
      "Duhigg's account of Paul O'Neill at Alcoa is the canonical case study: O'Neill set a single keystone habit — worker safety — and used the small wins it produced to remake an industrial giant. The lesson scales: organizations don't change by mandate, they change by accumulating evidence of success in some small, visible domain.",
    distilled:
      "A culture changes when the early wins make the new behavior look obvious in hindsight.",
    relatedIdeaSlugs: ["keystone-habits"],
  },
  {
    slug: "belief-in-change",
    text: "Belief is the missing ingredient. People change habits more reliably when they're part of a community that believes change is possible.",
    bookSlug: "the-power-of-habit",
    chapterRef: "Ch. 3",
    readMin: 1,
    position: 5,
    tags: ["belief", "community", "change"],
    whyItMatters:
      "AA's effectiveness, Duhigg argues, comes less from its specific 12-step content than from the belief structure it provides — and the community that holds the belief in place. The same finding shows up in cardiac rehabilitation, in addiction recovery, in any domain where willpower fatigues. Community is the scaffolding on which willpower rests.",
    distilled:
      "Habits change inside relationships, not inside individuals.",
    relatedIdeaSlugs: ["willpower-as-muscle"],
  },
];

const tinyHabitsIdeas: Idea[] = [
  {
    slug: "tiny-habits-anchor",
    text: "Anchor a new habit to an existing one. The 'after I [existing], I [new]' formula is more reliable than any motivation hack.",
    bookSlug: "tiny-habits",
    chapterRef: "Ch. 4",
    readMin: 2,
    position: 1,
    tags: ["anchoring", "habits", "formula"],
    whyItMatters:
      "Fogg's central insight is that new habits don't need novel cues — they need existing ones. Your morning coffee, your bathroom break, your phone unlocking: these are dozens of ironclad cues you already have. Bolting a tiny new behavior onto one of them gives you the cue infrastructure for free.",
    distilled:
      "Don't invent new cues. Borrow the ones already running.",
    relatedIdeaSlugs: ["habit-loop", "two-minute-rule"],
  },
  {
    slug: "celebration-as-reward",
    text: "Behavior wires in faster when you celebrate it — even briefly, even silently. Emotion is what cements the loop.",
    bookSlug: "tiny-habits",
    chapterRef: "Ch. 6",
    readMin: 1,
    position: 2,
    tags: ["reward", "habits", "emotion"],
    whyItMatters:
      "Most habit advice ignores the moment immediately after the action. Fogg's research suggests this moment matters disproportionately: a small felt celebration ('nice') closes the loop and accelerates the wiring. The reward needn't be external; what matters is the emotional acknowledgment.",
    distilled:
      "The moment after the action is the moment that matters. Mark it.",
    relatedIdeaSlugs: ["four-laws", "habit-loop"],
  },
  {
    slug: "motivation-is-unreliable",
    text: "Motivation is unreliable. Design behaviors so that motivation isn't required.",
    bookSlug: "tiny-habits",
    chapterRef: "Ch. 2",
    readMin: 1,
    position: 3,
    tags: ["motivation", "design", "habits"],
    whyItMatters:
      "Fogg's behavior model — B = MAP (motivation × ability × prompt) — implies that the easier the behavior, the less motivation it needs. Build for the trough days, not the peaks. If a behavior requires you to feel motivated, it will fail half the time.",
    distilled:
      "Design for the version of you that doesn't feel like it.",
    relatedIdeaSlugs: ["two-minute-rule", "environment-design"],
  },
  {
    slug: "shrink-not-stretch",
    text: "When a habit isn't sticking, shrink it. Don't try harder; try smaller.",
    bookSlug: "tiny-habits",
    chapterRef: "Ch. 3",
    readMin: 1,
    position: 4,
    tags: ["habits", "shrinking", "starting"],
    whyItMatters:
      "The intuition is to push through when a habit falters. Fogg's counterintuition is the opposite: make the behavior smaller until it's so trivial that resistance evaporates. Two pushups. One sentence. Ten seconds of meditation. The size will grow on its own once the loop is wired.",
    distilled:
      "If a habit fails, the answer is almost always 'smaller,' not 'more committed.'",
    relatedIdeaSlugs: ["two-minute-rule", "motivation-is-unreliable"],
  },
];

const deepWorkIdeas: Idea[] = [
  {
    slug: "deep-work-rule",
    text: "Deep work — focused, undistracted work on a cognitively demanding task — is becoming both more valuable and more rare. The arbitrage is enormous.",
    bookSlug: "deep-work",
    chapterRef: "Ch. 1",
    readMin: 2,
    position: 1,
    tags: ["focus", "work", "value"],
    whyItMatters:
      "Newport's argument has two halves: deep work is the only path to producing genuinely valuable knowledge work, and almost no one is doing it because the modern attention environment is engineered against it. Both trends are accelerating. The economic implication is that depth is a moat — which means the people who can sustain it are paid disproportionately.",
    distilled:
      "Depth is rare, valuable, and trainable. Most people don't bother.",
    relatedIdeaSlugs: ["systems-over-goals", "shallow-work-tax"],
  },
  {
    slug: "shallow-work-tax",
    text: "Shallow work — logistical, easily replicable, often performed while distracted — pays the bills but builds no career. Track it; minimize it.",
    bookSlug: "deep-work",
    chapterRef: "Ch. 4",
    readMin: 1,
    position: 2,
    tags: ["work", "focus", "shallow"],
    whyItMatters:
      "Most knowledge workers underestimate how much of their day is shallow because shallow work feels productive. The cure is measurement: write down, in 30-minute blocks, what fraction of your day is deep vs. shallow. The number is almost always lower than you'd guess. Once visible, it's actionable.",
    distilled:
      "What gets measured gets managed. Measure the depth ratio.",
    relatedIdeaSlugs: ["deep-work-rule"],
  },
  {
    slug: "deliberate-attention-residue",
    text: "Switching tasks leaves attention residue — your brain doesn't fully arrive at the new task for 15+ minutes. A day full of switches is a day at half attention.",
    bookSlug: "deep-work",
    chapterRef: "Ch. 2",
    readMin: 2,
    position: 3,
    tags: ["focus", "switching", "attention"],
    whyItMatters:
      "Sophie Leroy's research, which Newport draws on, shows that when you switch from Task A to Task B, a non-trivial fraction of your cognitive resources is still parked on A. The implication is that 'multitasking' is a misnomer — you're operating Task B with reduced capacity. The fix isn't willpower; it's batching, so you cross fewer task boundaries per day.",
    distilled:
      "Every switch costs minutes you don't get back. Batch.",
    relatedIdeaSlugs: ["deep-work-rule", "shallow-work-tax"],
  },
  {
    slug: "rituals-and-rules",
    text: "Depth doesn't happen because you decide to be deep. It happens because you have rituals and rules that make it the default.",
    bookSlug: "deep-work",
    chapterRef: "Ch. 4",
    readMin: 1,
    position: 4,
    tags: ["rituals", "habits", "depth"],
    whyItMatters:
      "Newport's prescription is structural: a fixed location, a fixed time, a fixed ritual of starting. Once these are in place, depth requires no daily decision — and so isn't subject to daily willpower fluctuations. This is the intersection point with Clear and Fogg: depth is a habit problem, and habit problems yield to environmental design.",
    distilled:
      "Make depth the default. The decision is one-time; the payoff is daily.",
    relatedIdeaSlugs: ["environment-design", "systems-over-goals"],
  },
  {
    slug: "embrace-boredom",
    text: "If you can't sit with boredom, you can't sit with deep work. Train the ability to be bored without reaching for a phone.",
    bookSlug: "deep-work",
    chapterRef: "Ch. 3",
    readMin: 1,
    position: 5,
    tags: ["boredom", "focus", "training"],
    whyItMatters:
      "Newport's claim is that the modern attention environment trains an intolerance for boredom, and that intolerance leaks into work. Every moment of mild discomfort during a hard task triggers a reach for the phone. The cure is not abstaining from phones during work but tolerating boredom in non-work moments — the queue, the elevator, the walk — so the reflex doesn't form.",
    distilled:
      "The reflex to escape boredom is the same reflex that breaks deep work. Train it elsewhere.",
    relatedIdeaSlugs: ["deliberate-attention-residue"],
  },
  {
    slug: "quit-social-media-tactically",
    text: "Don't ask if a tool has any value. Ask if its value clears the bar — and whether you'd miss it if it were gone.",
    bookSlug: "deep-work",
    chapterRef: "Rule 3",
    readMin: 1,
    position: 6,
    tags: ["social-media", "tools", "evaluation"],
    whyItMatters:
      "Most tool decisions use the 'any-benefit' standard: if it helps at all, keep it. Newport proposes the craftsman standard: keep it only if its benefits substantially outweigh its costs to your time and attention. By that bar, most social media doesn't survive — for most knowledge workers.",
    distilled:
      "Default to removal. Make tools earn their place.",
    relatedIdeaSlugs: ["embrace-boredom", "shallow-work-tax"],
  },
];

const thinkingFastSlowIdeas: Idea[] = [
  {
    slug: "two-systems",
    text: "Your mind runs two systems: fast, intuitive, automatic (System 1) and slow, effortful, deliberate (System 2). Most thinking is System 1; we mistake it for System 2.",
    bookSlug: "thinking-fast-and-slow",
    chapterRef: "Ch. 1",
    readMin: 2,
    position: 1,
    tags: ["cognition", "systems", "intuition"],
    whyItMatters:
      "The two-system model is a useful fiction — Kahneman is explicit about that — but it's a productive one. It explains why we make confident judgments we can't justify, why fatigue degrades decisions, and why the right move is often to slow the question down rather than to think harder.",
    distilled:
      "Most of your 'reasoning' is pattern-matching dressed up as reasoning. Know which mode you're in.",
    relatedIdeaSlugs: ["anchoring", "wysiati"],
  },
  {
    slug: "anchoring",
    text: "Numbers presented before a judgment bias the judgment, even when the numbers are obviously irrelevant.",
    bookSlug: "thinking-fast-and-slow",
    chapterRef: "Ch. 11",
    readMin: 2,
    position: 2,
    tags: ["bias", "anchoring", "judgment"],
    whyItMatters:
      "The classic experiment: spin a wheel, then ask people to estimate the percentage of African nations in the UN. The wheel's number — random, irrelevant, visibly so — biases the answer. The effect is robust, large, and resistant to warnings. Anywhere a negotiation begins with a number, the number is doing more work than the participants think.",
    distilled:
      "Whoever names the first number sets the gravitational center of the conversation.",
    relatedIdeaSlugs: ["two-systems", "wysiati"],
  },
  {
    slug: "loss-aversion",
    text: "Losses feel about twice as bad as equivalent gains feel good. Most people will not accept a 50/50 bet of −$100 / +$100; they need closer to +$200.",
    bookSlug: "thinking-fast-and-slow",
    chapterRef: "Ch. 26",
    readMin: 2,
    position: 3,
    tags: ["bias", "risk", "loss-aversion"],
    whyItMatters:
      "Loss aversion is the empirical heart of Kahneman and Tversky's prospect theory — the discovery that overturned classical utility theory and won the Nobel. It explains the endowment effect, the status quo bias, and a hundred negotiation behaviors. Once you see it, you can't unsee it in your own decisions.",
    distilled:
      "We are not rational about gains and losses. We are loss-averse, and we always have been.",
    relatedIdeaSlugs: ["anchoring", "wysiati"],
  },
  {
    slug: "wysiati",
    text: "What You See Is All There Is. The mind builds the most coherent story it can from the evidence at hand — and then trusts the story.",
    bookSlug: "thinking-fast-and-slow",
    chapterRef: "Ch. 7",
    readMin: 2,
    position: 4,
    tags: ["bias", "cognition", "evidence"],
    whyItMatters:
      "WYSIATI is Kahneman's name for one of System 1's most consequential moves: it never asks 'what evidence am I missing?' — only 'does this fit?' The result is overconfidence in narratives built from incomplete information, which is most narratives. The remedy is structural: explicitly ask, before deciding, what evidence would change your mind.",
    distilled:
      "Coherence feels like truth. It isn't.",
    relatedIdeaSlugs: ["two-systems", "anchoring"],
  },
  {
    slug: "regression-to-mean",
    text: "Extreme performances are usually followed by less extreme ones — not because of any cause, but because of statistics.",
    bookSlug: "thinking-fast-and-slow",
    chapterRef: "Ch. 17",
    readMin: 2,
    position: 5,
    tags: ["statistics", "judgment", "regression"],
    whyItMatters:
      "Praise a great quarter, the next is worse. Punish a bad quarter, the next is better. Most managers conclude that punishment works and praise doesn't. The truth is mostly regression to the mean. Failing to see it makes you wrong about cause and effect across most of your professional life.",
    distilled:
      "Before attributing change to a cause, check whether the change is just statistics.",
    relatedIdeaSlugs: ["wysiati"],
  },
  {
    slug: "experiencing-vs-remembering",
    text: "The remembering self and the experiencing self are different. We choose, plan, and judge from memory — but we live in the experience.",
    bookSlug: "thinking-fast-and-slow",
    chapterRef: "Ch. 35",
    readMin: 2,
    position: 6,
    tags: ["happiness", "memory", "experience"],
    whyItMatters:
      "Kahneman's most uncomfortable finding: the memory of an experience is dominated by its peak and its end, not its duration. A short bad experience and a long bad experience that tapers can produce the same memory. We then plan future experiences to please the remembering self — which is not the self that actually has them.",
    distilled:
      "What you'll remember and what you'll experience are not the same thing. You usually optimize the wrong one.",
    relatedIdeaSlugs: ["wysiati"],
  },
];

const almanackIdeas: Idea[] = [
  {
    slug: "leverage-types",
    text: "There are three kinds of leverage: labor, capital, and products with zero marginal cost (code and media). The new leverage is the only one that doesn't require permission.",
    bookSlug: "almanack-of-naval-ravikant",
    chapterRef: "Wealth · I",
    readMin: 2,
    position: 1,
    tags: ["leverage", "wealth", "internet"],
    whyItMatters:
      "Naval's framing splits leverage into the two old kinds — people working for you, money working for you — and a third kind that emerged with the internet: media and software that work for you while you sleep. The first two require permission (someone has to hire your team, lend you the capital). The third does not. For the first time in history, smart people without capital or organizational power can deploy enormous leverage.",
    distilled:
      "Labor and capital need permission. Code and media don't. Build accordingly.",
    relatedIdeaSlugs: ["specific-knowledge", "play-long-term-games"],
  },
  {
    slug: "specific-knowledge",
    text: "Specific knowledge is what can't be trained — what feels like play to you and like work to others. It's the only durable advantage in the leverage age.",
    bookSlug: "almanack-of-naval-ravikant",
    chapterRef: "Wealth · II",
    readMin: 2,
    position: 2,
    tags: ["specific-knowledge", "wealth", "advantage"],
    whyItMatters:
      "If knowledge can be trained, it can be commoditized. Specific knowledge is, by definition, the part of your skill set that didn't come from a curriculum — the idiosyncratic intersection of your obsessions, history, and natural inclinations. It's also the only thing AI and outsourcing can't easily replicate.",
    distilled:
      "Find what you do for fun that others find tedious. That's the seed.",
    relatedIdeaSlugs: ["leverage-types", "play-long-term-games"],
  },
  {
    slug: "play-long-term-games",
    text: "Play long-term games with long-term people. Almost all returns — financial, intellectual, relational — come from compounding inside a small number of long relationships.",
    bookSlug: "almanack-of-naval-ravikant",
    chapterRef: "Wealth · III",
    readMin: 2,
    position: 3,
    tags: ["compounding", "relationships", "long-term"],
    whyItMatters:
      "The math of compounding — financial or relational — punishes resets. Every time you switch teams, partners, or fields, you reset the curve. The non-obvious move is to identify the small number of people whose company you find generative, and bind your trajectory to theirs over decades. Reputation, trust, and shared context all compound only inside continuity.",
    distilled:
      "Compounding rewards staying. The world rewards leaving. Resist.",
    relatedIdeaSlugs: ["compound-interest-of-self-improvement", "leverage-types"],
  },
  {
    slug: "happiness-is-a-skill",
    text: "Happiness is a skill, not a circumstance. It's the absence of desire, not the satisfaction of it.",
    bookSlug: "almanack-of-naval-ravikant",
    chapterRef: "Happiness · I",
    readMin: 2,
    position: 4,
    tags: ["happiness", "stoicism", "skill"],
    whyItMatters:
      "Naval's view is closer to Buddhism and Stoicism than to modern positive psychology: happiness isn't produced by acquiring things you want, it's produced by reducing the volume of wanting. The skill, then, is recognizing desires as choices and choosing fewer of them. The frame transfers responsibility from the world to the self — uncomfortable but actionable.",
    distilled:
      "Every desire is a deliberate choice you've made to be unhappy. Choose fewer.",
    relatedIdeaSlugs: [],
  },
  {
    slug: "read-what-you-love",
    text: "Read what you love until you love to read. The point of reading isn't to finish books — it's to become someone for whom reading is the default.",
    bookSlug: "almanack-of-naval-ravikant",
    chapterRef: "Wisdom · II",
    readMin: 1,
    position: 5,
    tags: ["reading", "learning", "habit"],
    whyItMatters:
      "The mistake people make with reading is treating it like school: a list of books they 'should' read, abandoned in shame when boring. Naval's inversion: read whatever holds you, even if it's trash, until reading itself becomes a habit. Then upgrade the input. The order matters — reading the hard book before you love reading is the surest way to stop reading.",
    distilled:
      "Build the reflex first. Optimize the inputs second.",
    relatedIdeaSlugs: [],
  },
];

const sharpeningTheSawIdea: Idea = {
  slug: "sharpening-the-saw",
  text: "Sharpening the saw — daily renewal across body, mind, heart, and spirit — compounds. Without it, the same effort yields less and less.",
  bookSlug: "the-7-habits",
  chapterRef: "Habit 7",
  readMin: 2,
  position: 1,
  tags: ["renewal", "compounding", "habits"],
  whyItMatters:
    "Covey's 'sharpening the saw' is the proto-version of Clear's 1% framing. The metaphor is a woodcutter who's too busy sawing to sharpen the blade — and gets steadily worse output for steadily more effort. The discipline of renewal is what keeps the curve compounding instead of decaying.",
  distilled:
    "Effort without renewal is a slow downgrade.",
  relatedIdeaSlugs: ["compound-interest-of-self-improvement"],
};

export const ideas: Idea[] = [
  ...atomicHabitsIdeas,
  ...powerOfHabitIdeas,
  ...tinyHabitsIdeas,
  ...deepWorkIdeas,
  ...thinkingFastSlowIdeas,
  ...almanackIdeas,
  sharpeningTheSawIdea,
];

export const books: Book[] = [
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    subtitle: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    authorSlug: "james-clear",
    year: 2018,
    publisher: "Avery",
    pages: 320,
    rating: 4.8,
    genre: "self",
    tags: ["Habits", "Productivity", "Systems"],
    framing:
      "The bestselling productivity book of the last decade. Clear's argument is simple and well-evidenced: small repeated actions, governed by good systems and aligned with the identity you want to inhabit, compound into outsized results. The reason you've heard the ideas before is that he didn't invent them — he packaged them better than anyone else.",
    thesis:
      "You don't change by setting goals — you change by designing the smallest possible system that nudges you, every day, toward the kind of person who already does the thing.",
    ideaSlugs: atomicHabitsIdeas.map((i) => i.slug),
    relatedBookSlugs: ["the-power-of-habit", "tiny-habits", "deep-work"],
    relatedNotes: {
      "the-power-of-habit":
        "The same cue–routine–reward loop, framed for organizations and societies as much as individuals.",
      "tiny-habits":
        "A different lens on the same problem: tiny habits anchored to existing routines, with celebration as the reward.",
      "deep-work":
        "Where Clear focuses on what to start, Newport focuses on what to stop — and on protecting the time good work requires.",
    },
  },
  {
    slug: "the-power-of-habit",
    title: "The Power of Habit",
    subtitle: "Why We Do What We Do in Life and Business",
    authorSlug: "charles-duhigg",
    year: 2012,
    publisher: "Random House",
    pages: 400,
    rating: 4.6,
    genre: "psychology",
    tags: ["Habits", "Psychology", "Organizations"],
    framing:
      "The book that put habit science into the mainstream business conversation. Duhigg, a Pulitzer-winning reporter, weaves cognitive research with case studies — Alcoa, Procter & Gamble, AA — to argue that the habit loop operates the same way in individuals, organizations, and societies.",
    thesis:
      "Almost all behavior — yours, your company's, your country's — is a habit loop. Diagnose the loop, replace its middle, and you've changed the behavior.",
    ideaSlugs: powerOfHabitIdeas.map((i) => i.slug),
    relatedBookSlugs: ["atomic-habits", "tiny-habits", "thinking-fast-and-slow"],
    relatedNotes: {
      "atomic-habits":
        "Clear inherits Duhigg's loop and operationalizes it into the four laws.",
      "tiny-habits":
        "Where Duhigg explains the mechanism, Fogg gives the smallest possible installation procedure.",
      "thinking-fast-and-slow":
        "Kahneman provides the cognitive substrate that makes habit-based behavior possible at all.",
    },
  },
  {
    slug: "tiny-habits",
    title: "Tiny Habits",
    subtitle: "The Small Changes That Change Everything",
    authorSlug: "bj-fogg",
    year: 2018,
    publisher: "Harvest",
    pages: 320,
    rating: 4.5,
    genre: "self",
    tags: ["Habits", "Behavior Design"],
    framing:
      "Twenty years of Stanford behavior-design research, condensed into a method anyone can apply this afternoon. Fogg's claim is that the way most habit advice fails is by setting the bar too high; his method sets it ridiculously low and lets the loop wire itself in.",
    thesis:
      "Make the behavior tiny, anchor it to something you already do, and celebrate the moment after — those three moves do more than any amount of motivation.",
    ideaSlugs: tinyHabitsIdeas.map((i) => i.slug),
    relatedBookSlugs: ["atomic-habits", "the-power-of-habit"],
    relatedNotes: {
      "atomic-habits":
        "Clear's Two-Minute Rule is the spiritual successor to Fogg's tiny habits.",
      "the-power-of-habit":
        "Fogg's behavior model fills in the moment-by-moment mechanism Duhigg describes from the outside.",
    },
  },
  {
    slug: "deep-work",
    title: "Deep Work",
    subtitle: "Rules for Focused Success in a Distracted World",
    authorSlug: "cal-newport",
    year: 2016,
    publisher: "Grand Central",
    pages: 304,
    rating: 4.7,
    genre: "business",
    tags: ["Focus", "Productivity", "Knowledge work"],
    framing:
      "Newport's argument was unfashionable when he made it and is now obvious: the ability to focus without distraction on a cognitively demanding task is becoming both rarer and more valuable, and most knowledge workers spend their days in shallow work that doesn't build a career.",
    thesis:
      "Treat focus as the scarce resource it is. Build rituals and rules so that depth happens by default, not by daily decision.",
    ideaSlugs: deepWorkIdeas.map((i) => i.slug),
    relatedBookSlugs: ["atomic-habits", "almanack-of-naval-ravikant"],
    relatedNotes: {
      "atomic-habits":
        "Both books agree: the lever is structural design, not willpower.",
      "almanack-of-naval-ravikant":
        "Naval's leverage thesis assumes Newport's depth — without depth, the leverage compounds nothing.",
    },
  },
  {
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    authorSlug: "daniel-kahneman",
    year: 2011,
    publisher: "Farrar, Straus and Giroux",
    pages: 499,
    rating: 4.6,
    genre: "psychology",
    tags: ["Cognition", "Bias", "Decision-making"],
    framing:
      "The popular synthesis of forty years of research on judgment and decision-making, by the Nobel laureate who, with Amos Tversky, dismantled the assumption of human rationality at the foundation of classical economics. Long, dense, and worth it.",
    thesis:
      "You think you're reasoning. Mostly, you're pattern-matching. The patterns are biased in predictable ways, and the only defense is structural — slow the question down, or design the decision so the bias doesn't apply.",
    ideaSlugs: thinkingFastSlowIdeas.map((i) => i.slug),
    relatedBookSlugs: ["the-power-of-habit", "almanack-of-naval-ravikant"],
    relatedNotes: {
      "the-power-of-habit":
        "Kahneman provides the cognitive substrate; Duhigg shows the substrate playing out in habits.",
      "almanack-of-naval-ravikant":
        "Naval's mental-models project is a direct descendant of Kahneman's two-system framing.",
    },
  },
  {
    slug: "almanack-of-naval-ravikant",
    title: "The Almanack of Naval Ravikant",
    subtitle: "A Guide to Wealth and Happiness",
    authorSlug: "naval-ravikant",
    year: 2020,
    publisher: "Magrathea",
    pages: 244,
    rating: 4.7,
    genre: "biography",
    tags: ["Wealth", "Leverage", "Stoicism"],
    framing:
      "Eric Jorgenson's compilation of Naval Ravikant's tweets, podcasts, and essays, organized into two arcs: how to build wealth without permission, and how to be happy without circumstance. Free online; influential out of proportion to its length.",
    thesis:
      "The internet broke the old monopolies on leverage. The combination of specific knowledge, code or media, and long-term relationships is the new path to outsized outcomes — and to a happiness that doesn't depend on any of them.",
    ideaSlugs: almanackIdeas.map((i) => i.slug),
    relatedBookSlugs: ["deep-work", "thinking-fast-and-slow"],
    relatedNotes: {
      "deep-work":
        "Naval's leverage thesis is empty without Newport's depth — they're complements.",
      "thinking-fast-and-slow":
        "Naval's mental-models project is Kahneman applied to personal decision-making.",
    },
  },
];

// helpers

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function getIdea(slug: string): Idea | undefined {
  return ideas.find((i) => i.slug === slug);
}

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getGenre(slug: string): GenreInfo | undefined {
  return genres.find((g) => g.slug === slug);
}

export function ideasForBook(bookSlug: string): Idea[] {
  return ideas
    .filter((i) => i.bookSlug === bookSlug)
    .sort((a, b) => a.position - b.position);
}

export function booksByAuthor(authorSlug: string): Book[] {
  return books.filter((b) => b.authorSlug === authorSlug);
}

export function booksInGenre(genreSlug: Genre): Book[] {
  return books.filter((b) => b.genre === genreSlug);
}

export function relatedIdeas(slugs: string[]): Idea[] {
  return slugs
    .map((s) => ideas.find((i) => i.slug === s))
    .filter((i): i is Idea => Boolean(i));
}

export function relatedBooksFor(book: Book): Book[] {
  return book.relatedBookSlugs
    .map((s) => books.find((b) => b.slug === s))
    .filter((b): b is Book => Boolean(b));
}
