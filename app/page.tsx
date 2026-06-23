import React from "react";
import Image from "next/image";
import {
  BookOpen,
  Users,
  PencilLine,
  Target,
  BookText,
  Calculator,
  Heart,
  MapPin,
  Clock,
  Video,
  Award,
  CheckCircle,
} from "lucide-react";

import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import WhyCard from "@/components/WhyCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";

export default function ChloeTutoring() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center pt-16 bg-[#3E5F34]">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Chloe, a caring primary school teacher, working gently with a small group of happy young students in a bright nurturing environment"
            fill
            className="object-cover brightness-[0.78] saturate-[0.92]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3E5F34]/70 via-[#3E5F34]/55 to-[#3E5F34]/75" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-xs tracking-[1.5px] mb-5 font-medium border border-white/30">
              MUDGEERABA • GOLD COAST HINTERLAND
            </div>

            <h1 className="text-white text-balance tracking-[-1.6px] leading-none mb-5">
              Personalised Primary Tutoring<br className="hidden md:block" /> in Mudgeeraba
            </h1>

            <p className="text-[1.1rem] md:text-[1.25rem] text-white/90 max-w-2xl mx-auto leading-relaxed mb-9">
              Helping local children in Prep–Year 6 build confidence, master fundamentals, 
              and love learning with warm, tailored support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#contact" variant="primary" className="bg-white text-sage-dark hover:bg-warm-ivory text-[15px] px-9 py-[17px]">
                Book a Free Consultation
              </Button>
              <Button href="#services" variant="ghost" className="border-white/70 text-white hover:bg-white/10 hover:text-white text-[15px] px-8 py-[17px]">
                Explore How I Can Help
              </Button>
            </div>

            <p className="text-white/60 text-sm mt-8 tracking-wide">
              Qualified primary teacher • Queensland Curriculum aligned • In-person &amp; online
            </p>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-9 left-1/2 hidden md:block -translate-x-1/2 text-white/60 text-xs tracking-[3px]">
          SCROLL TO BEGIN
        </div>
      </section>

      {/* ========== ABOUT CHLOE ========== */}
      <section id="about" className="section max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-x-10 md:items-start">
          <div className="md:col-span-7">
            <div className="uppercase text-xs tracking-[2px] text-sage font-semibold mb-2">MEET CHLOE</div>
            <h2 className="mb-6">A qualified primary teacher who truly understands your child.</h2>

            <div className="prose prose-lg text-text-dark max-w-2xl">
              <p className="text-[17px] leading-relaxed text-balance">
                Hi, I&apos;m Chloe — a fully qualified primary school teacher based in Mudgeeraba 
                in the beautiful Gold Coast hinterland. I have classroom experience across Prep to Year 6 
                and a genuine passion for helping local children thrive.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-balance text-text-muted">
                I know the Queensland Curriculum inside out and understand how every child learns differently. 
                My approach is warm, patient, and personalised — meeting each student exactly where they are 
                and helping them grow in both skills and confidence.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-warm-sand" />
              <span className="text-xs uppercase tracking-widest text-sage font-medium">Gold Coast Hinterland</span>
            </div>
          </div>

          <div className="md:col-span-5 mt-10 md:mt-1">
            <div className="relative aspect-[4/3] md:aspect-[3/3.1] overflow-hidden rounded-2xl shadow-soft mb-5 md:mb-6">
              <Image
                src="/images/chloe-portrait.jpg"
                alt="Professional portrait of Chloe, a warm and approachable primary school teacher"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl p-7 md:p-8 card border border-warm-sand">
              <div className="text-sage-dark font-semibold mb-3.5">My teaching foundation</div>
              <ul className="space-y-2.5 text-[14.5px]">
                <li className="flex gap-3"><CheckCircle className="mt-0.5 text-sage flex-shrink-0" size={18} /> Fully qualified primary school teacher</li>
                <li className="flex gap-3"><CheckCircle className="mt-0.5 text-sage flex-shrink-0" size={18} /> Extensive classroom experience (Prep–Year 6)</li>
                <li className="flex gap-3"><CheckCircle className="mt-0.5 text-sage flex-shrink-0" size={18} /> Deep knowledge of the Queensland Curriculum</li>
                <li className="flex gap-3"><CheckCircle className="mt-0.5 text-sage flex-shrink-0" size={18} /> Local to Mudgeeraba — I understand our community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES / HOW I CAN HELP ========== */}
      <section id="services" className="section bg-warm-beige">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="How Chloe Can Help Your Child"
            subtitle="Personalised support tailored to your child’s needs and stage of learning"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={Users}
              title="1-on-1 Private Tutoring"
              description="Fully personalised sessions focused on your child’s specific goals, learning style, and pace. Ideal for building deep understanding and confidence."
            />
            <ServiceCard
              icon={Users}
              title="Small Group Sessions (2–4 students)"
              description="Supportive group learning at a similar level. Great value and a wonderful way for children to develop social confidence while progressing academically."
            />
            <ServiceCard
              icon={PencilLine}
              title="Homework Help & Assignment Support"
              description="Patient, structured assistance that reinforces classroom learning without creating stress. I help children develop independence and good habits."
            />
            <ServiceCard
              icon={Target}
              title="NAPLAN Preparation"
              description="Calm, targeted preparation that focuses on skills, strategies, and reducing anxiety. Familiarisation with the test format so children feel ready and capable."
            />
            <ServiceCard
              icon={BookText}
              title="Literacy Support"
              description="Reading fluency, comprehension, writing structure, spelling strategies, and phonics. Building the foundational skills that unlock all other learning."
            />
            <ServiceCard
              icon={Calculator}
              title="Numeracy Support"
              description="Number sense, place value, operations, problem-solving and mathematical reasoning. I make maths concrete, visual, and achievable for every learner."
            />
            <ServiceCard
              icon={Heart}
              title="Confidence & Study Habits"
              description="Beyond academics — I help children believe in themselves, develop resilience, organisation skills, and a positive attitude toward learning that lasts."
            />
          </div>

          <p className="text-center text-sm text-text-muted mt-9 max-w-md mx-auto">
            Sessions are available for Prep through to Year 6. All tutoring is aligned to the Australian Curriculum (Queensland).
          </p>
        </div>
      </section>

      {/* ========== WHY FAMILIES CHOOSE CHLOE ========== */}
      <section id="why-us" className="section max-w-5xl mx-auto px-6">
        <SectionHeading
          title="Why Families Choose Chloe"
          subtitle="What makes tutoring with a qualified local teacher different"
        />

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-9">
          <WhyCard
            icon={Award}
            title="Qualified Classroom Teacher"
            description="I’m not just a tutor — I’m a registered primary teacher with real classroom experience across multiple year levels and a strong understanding of how children actually learn at school."
          />
          <WhyCard
            icon={MapPin}
            title="Local to Mudgeeraba"
            description="I live and work right here in the Gold Coast hinterland. I know the local schools, the community, and the specific needs of families in Mudgeeraba, Worongary, Tallai and surrounding areas."
          />
          <WhyCard
            icon={Heart}
            title="Warm, Personalised Approach"
            description="Every child is different. I take the time to truly understand your child — their strengths, worries, and goals — and create a supportive, encouraging environment where they feel safe to grow."
          />
          <WhyCard
            icon={Video}
            title="Flexible In-Person + Online"
            description="Choose what works for your family: in-person at my Mudgeeraba location, at your home (within the local area), or via high-quality online sessions. Many families mix both."
          />
          <WhyCard
            icon={CheckCircle}
            title="Focus on Confidence & Results"
            description="Academic progress matters, but so does how your child feels about themselves as a learner. My students leave sessions feeling capable, proud, and more excited about school."
          />
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="What Parents Are Saying"
            subtitle="Real feedback from families in our local community"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Chloe has been incredible with our daughter. After just a few weeks her reading confidence improved dramatically and she now asks to do extra work at home. We are so grateful."
              name="Sarah M."
              detail="Parent of Year 3 student, Worongary"
              initials="SM"
            />
            <TestimonialCard
              quote="Our son struggled with maths anxiety. Chloe’s patient and visual approach completely changed how he feels about the subject. His NAPLAN results were above his target and, more importantly, he’s proud of himself."
              name="Michael & Priya K."
              detail="Parents of Year 5 student, Mudgeeraba"
              initials="MK"
            />
            <TestimonialCard
              quote="The small group sessions were perfect for our twins. They love going and have made lovely progress in both literacy and numeracy. Chloe really understands how to keep them engaged and challenged."
              name="Lisa T."
              detail="Parent of Year 1 & Year 2 students, Tallai"
              initials="LT"
            />
          </div>

          <p className="text-center text-xs text-text-muted mt-8 tracking-wide">
            {/* Sample testimonials below. Replace with real parent feedback for launch. */}
          </p>
        </div>
      </section>

      {/* ========== LOCATION & AVAILABILITY ========== */}
      <section id="location" className="section max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-x-12 items-start">
          <div className="lg:col-span-3">
            <div className="uppercase text-xs tracking-[2px] text-sage font-semibold mb-3">LOCATION & AVAILABILITY</div>
            <h2 className="mb-6">Based in Mudgeeraba, serving the Gold Coast hinterland.</h2>

            <div className="space-y-6 text-[15.2px] leading-relaxed text-text-dark">
              <p>
                I offer tutoring from my calm, well-equipped home studio in Mudgeeraba. 
                In-person sessions are also available at your home for families in Mudgeeraba, 
                Worongary, Tallai, Springbrook, and nearby suburbs (small travel fee may apply).
              </p>
              <p>
                Online sessions via Zoom or Google Meet are available for families anywhere 
                on the Gold Coast or further afield and work extremely well for most primary-aged children.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-warm-sand p-5 bg-warm-ivory">
                <div className="flex items-center gap-2 font-semibold text-sage-dark mb-2">
                  <MapPin size={18} /> In-person
                </div>
                <div className="text-sm text-text-muted">Mudgeeraba &amp; surrounding hinterland suburbs</div>
              </div>
              <div className="rounded-xl border border-warm-sand p-5 bg-warm-ivory">
                <div className="flex items-center gap-2 font-semibold text-sage-dark mb-2">
                  <Video size={18} /> Online
                </div>
                <div className="text-sm text-text-muted">Available to all Gold Coast families</div>
              </div>
              <div className="rounded-xl border border-warm-sand p-5 bg-warm-ivory">
                <div className="flex items-center gap-2 font-semibold text-sage-dark mb-2">
                  <Clock size={18} /> Flexible times
                </div>
                <div className="text-sm text-text-muted">Afternoons, early evenings &amp; weekend slots</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 mt-10 lg:mt-3 bg-white p-7 rounded-2xl card">
            <div className="font-semibold mb-3 text-lg">Availability</div>
            <ul className="text-sm space-y-[13px] text-text-dark">
              <li className="flex justify-between"><span>Weekday afternoons</span><span className="text-sage-dark font-medium">Most days</span></li>
              <li className="flex justify-between"><span>Weekday evenings (until 7pm)</span><span className="text-sage-dark font-medium">Available</span></li>
              <li className="flex justify-between"><span>Saturday mornings</span><span className="text-sage-dark font-medium">Limited spots</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-sage-dark font-medium">By request</span></li>
            </ul>
            <p className="text-xs mt-5 text-text-muted">
              I keep groups very small and availability changes quickly. The best way to secure a regular slot is to book a consultation soon.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CONTACT / BOOK ========== */}
      <section id="contact" className="section bg-warm-beige border-t border-warm-sand">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="uppercase tracking-[2px] text-sage text-xs font-semibold mb-3">LET&apos;S TALK</div>
            <h2 className="mb-3">Ready to support your child&apos;s learning journey?</h2>
            <p className="max-w-lg mx-auto text-text-muted">
              Book a free 20–30 minute initial consultation. We’ll discuss your child’s needs, 
              goals, and find the right fit — no obligation.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Side contact info + booking placeholder */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-7">
                <div className="text-sm font-semibold tracking-wide mb-4 text-sage-dark">DIRECT CONTACT</div>
                <div className="space-y-4 text-[15px]">
                  <div>
                    <div className="text-text-muted text-xs tracking-wide">PHONE</div>
                    <a href="tel:0400123456" className="font-medium text-lg hover:text-sage-dark">0400 123 456</a>
                    {/* TODO: Update to real phone */}
                  </div>
                  <div>
                    <div className="text-text-muted text-xs tracking-wide">EMAIL</div>
                    <a href="mailto:hello@chloestutoring.com.au" className="font-medium hover:text-sage-dark break-all">
                      hello@chloestutoring.com.au
                    </a>
                    {/* TODO: Update to real email */}
                  </div>
                  <div className="pt-1">
                    <div className="text-text-muted text-xs tracking-wide mb-1">BASED IN</div>
                    <div>Mudgeeraba, Gold Coast Hinterland<br />Queensland, Australia</div>
                  </div>
                </div>
              </div>

              {/* Booking / Calendar placeholder - ready for Calendly embed */}
              <div className="card p-7 border border-dashed border-sage/40 bg-white/60">
                <div className="uppercase text-[10px] tracking-[1.5px] font-semibold text-sage mb-2">EASY BOOKING</div>
                <div className="font-semibold mb-2 text-lg leading-none">Online booking calendar</div>
                <p className="text-sm text-text-muted mb-4">
                  View real-time availability and book your free consultation. Calendly integration coming shortly — use the form or call/email in the meantime.
                </p>
                <Button href="#contact" variant="secondary" className="w-full text-sm">
                  Use the form above for now
                </Button>
                <div className="text-[10px] text-center mt-4 text-text-muted">
                  Prefer to chat first? Call or email me directly.
                </div>
              </div>

              <div className="text-xs text-text-muted px-1">
                All enquiries are answered personally by Chloe within 1 business day.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
