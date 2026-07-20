
const BIO_PARAGRAPHS = [
    "Maruthi Ram Prasad is a distinguished academician with over three decades of experience in teaching, training, and administration. A tech-savvy professional, he has conducted numerous training sessions for students, teachers, and principals at regional, national, and international levels.",
    "Holding a Master’s degree in Zoology, a Master’s degree in Education, a Master’s Diploma in School Management, and a Postgraduate Diploma in Computer Applications, he has served in various capacities, including HOD, Vice Principal, Principal, and Academic Director in prestigious schools affiliated with CISCE, IPSC, and Cambridge International Education, such as The Hyderabad Public School, Ramadevi Public School, Delhi World Public School, and others.",
    "He has organised twinning programmes with schools like Unity Secondary School and Greenridge Secondary School in Singapore, as well as English Language Excellence Programmes with the Lewis School of English in Southampton, UK.",
    "He served as a Principal Coordinator for CISCE sports and games, conducted CISCE National Games, ASISC National Literacy Competitions, and acted as an inspector of schools for ICSE and ISC. He has also held key positions such as Joint Secretary, Secretary for ASISC in AP and Telangana States, Member, Vice President, and President for ASISC at the all-India level, and Member of the Council for Indian School Certificate Examinations (CISCE) in New Delhi. He was a commissioned officer with the NCC JD Army wing.",
    "A recipient of the International School Award (ISA) from the British Council, Maruthi Ram Prasad is currently the Director of Escuela Educational Consultancy LLP and has received the Indian Achievers’ Award for 2024-25 in recognition of outstanding professional achievement. He is also an International Educational Ambassador, an Accredited Teacher Trainer with Bestow Edutrex International in Mumbai, and a Lifetime Fellow Member of Eudoxia Research University in the USA.",
    "He is also Founder Principal and Academic Director of The Suraka School, Hyderabad. He has been recognised as one of the Top 100 Global Educational Leaders and a Visionary Leader by MC STEM Eduversity in India."
];

export default function AuthorBioSection() {

    return (
        <section
            className="relative w-full overflow-hidden py-16 md:py-12 px-6"
            aria-label="Author Biography"
        >
            <style>{`
                @keyframes bio-fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bio-orb1 { 
                    0%,100% { transform: translate(0,0) scale(1); } 
                    50% { transform: translate(18px,-12px) scale(1.06); } 
                }
                @keyframes bio-orb2 { 
                    0%,100% { transform: translate(0,0) scale(1); } 
                    50% { transform: translate(-14px,10px) scale(1.04); } 
                }
            `}</style>

            {/* Ambient glow orbs */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-10 -right-20 w-80 h-80 rounded-full"
                style={{
                    background: "radial-gradient(circle, color-mix(in oklch, var(--brand-crimson) 18%, transparent) 0%, transparent 70%)",
                    filter: "blur(60px)",
                    animation: "bio-orb1 10s ease-in-out infinite",
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-10 -left-20 w-80 h-80 rounded-full"
                style={{
                    background: "radial-gradient(circle, color-mix(in oklch, var(--brand-gold) 15%, transparent) 0%, transparent 70%)",
                    filter: "blur(55px)",
                    animation: "bio-orb2 12s ease-in-out infinite",
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto">
                <div
                    className="flex flex-col gap-6 text-[1.05rem] md:text-[1.15rem] leading-relaxed md:leading-[1.8] text-foreground/90 text-justify"
                >
                    {BIO_PARAGRAPHS.map((text, idx) => (
                        <p key={idx}>
                            {idx === 0 ? (
                                <>
                                    <span
                                        className="float-left text-5xl md:text-7xl font-black mr-4 mt-2 md:mt-1 leading-[0.8]"
                                        style={{
                                            background: "var(--gradient-brand)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                        }}
                                    >
                                        {text.charAt(0)}
                                    </span>
                                    {text.substring(1)}
                                </>
                            ) : (
                                text
                            )}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
