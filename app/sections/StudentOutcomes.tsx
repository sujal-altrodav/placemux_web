'use client'

import { useState, useEffect, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight, FiBriefcase, FiMapPin, FiTrendingUp } from 'react-icons/fi'

const STUDENTS = [
  { name: 'Arjun Mehta', college: 'VIT Vellore', company: 'Google', role: 'SDE-1', salary: '32 LPA', track: 'Full Stack MERN', photo: 'https://i.pravatar.cc/200?img=11' },
  { name: 'Priya Sharma', college: 'SRM Chennai', company: 'Microsoft', role: 'ML Engineer', salary: '28 LPA', track: 'AI/ML Engineering', photo: 'https://i.pravatar.cc/200?img=5' },
  { name: 'Rahul Verma', college: 'BITS Pilani', company: 'Amazon', role: 'SDE-2', salary: '42 LPA', track: 'Full Stack MERN', photo: 'https://i.pravatar.cc/200?img=12' },
  { name: 'Sneha Patel', college: 'NIT Trichy', company: 'Flipkart', role: 'Android Dev', salary: '22 LPA', track: 'Android/iOS Dev', photo: 'https://i.pravatar.cc/200?img=9' },
  { name: 'Karthik Nair', college: 'IIIT Hyderabad', company: 'Swiggy', role: 'Data Analyst', salary: '18 LPA', track: 'Data Analytics', photo: 'https://i.pravatar.cc/200?img=33' },
  { name: 'Ananya Das', college: 'Manipal University', company: 'Netflix', role: 'Full Stack Dev', salary: '38 LPA', track: 'Full Stack MERN', photo: 'https://i.pravatar.cc/200?img=23' },
  { name: 'Vikram Singh', college: 'DTU Delhi', company: 'Atlassian', role: 'DevOps Engineer', salary: '26 LPA', track: 'DevOps Engineering', photo: 'https://i.pravatar.cc/200?img=53' },
  { name: 'Riya Gupta', college: 'PES Bangalore', company: 'Razorpay', role: 'ML Engineer', salary: '24 LPA', track: 'AI/ML Engineering', photo: 'https://i.pravatar.cc/200?img=25' },
  { name: 'Aditya Kumar', college: 'KIIT Bhubaneswar', company: 'PhonePe', role: 'Android Dev', salary: '20 LPA', track: 'Android/iOS Dev', photo: 'https://i.pravatar.cc/200?img=60' },
  { name: 'Meera Joshi', college: 'Amity Noida', company: 'Uber', role: 'Data Scientist', salary: '35 LPA', track: 'Data Analytics', photo: 'https://i.pravatar.cc/200?img=32' },
  { name: 'Siddharth Rao', college: 'DSCE Bangalore', company: 'Zomato', role: 'Backend Dev', salary: '16 LPA', track: 'Full Stack MERN', photo: 'https://i.pravatar.cc/200?img=57' },
  { name: 'Deepika Menon', college: 'LPU Punjab', company: 'Paytm', role: 'Cloud Engineer', salary: '19 LPA', track: 'DevOps Engineering', photo: 'https://i.pravatar.cc/200?img=44' },
]

const TESTIMONIALS = [
  { name: 'Arjun Mehta', text: 'Placemux completely transformed my career trajectory. The structured curriculum and MAANG mentors gave me the confidence to crack Google interviews. The bidding event was an incredible experience.', company: 'Google', photo: 'https://i.pravatar.cc/200?img=11', role: 'SDE-1', salary: '32 LPA' },
  { name: 'Priya Sharma', text: 'I was skeptical at first, but the hands-on ML projects and weekly mentor sessions made all the difference. I went from zero ML knowledge to landing a role at Microsoft in just 3 months.', company: 'Microsoft', photo: 'https://i.pravatar.cc/200?img=5', role: 'ML Engineer', salary: '28 LPA' },
  { name: 'Sneha Patel', text: 'The mobile development track was incredibly well-structured. The mentors from top companies provided insights that you simply cannot get from online courses. Best investment I ever made.', company: 'Flipkart', photo: 'https://i.pravatar.cc/200?img=9', role: 'Android Dev', salary: '22 LPA' },
  { name: 'Ananya Das', text: 'What sets Placemux apart is the placement event. Having 100+ companies competing to hire you is a surreal experience. I received 5 offers and chose Netflix. Life-changing!', company: 'Netflix', photo: 'https://i.pravatar.cc/200?img=23', role: 'Full Stack Dev', salary: '38 LPA' },
]

function getTrackColor(track: string): string {
  const map: Record<string, string> = {
    'AI/ML Engineering': 'bg-violet-100 text-violet-700',
    'Data Analytics': 'bg-blue-100 text-blue-700',
    'Full Stack MERN': 'bg-green-100 text-green-700',
    'Android/iOS Dev': 'bg-orange-100 text-orange-700',
    'DevOps Engineering': 'bg-teal-100 text-teal-700',
  }
  return map[track] || 'bg-gray-100 text-gray-700'
}

export default function StudentOutcomes() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [visibleStart, setVisibleStart] = useState(0)
  const cardsPerView = 4

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [nextTestimonial])

  const scrollStudents = (dir: 'left' | 'right') => {
    setVisibleStart((prev) => {
      if (dir === 'left') return Math.max(0, prev - 1)
      return Math.min(STUDENTS.length - cardsPerView, prev + 1)
    })
  }

  const t = TESTIMONIALS[currentTestimonial]

  return (
    <section id="outcomes" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#4A5FE7] mb-3">Success Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Student Outcomes</h2>
            <p className="text-gray-500 mt-3 max-w-xl">Real results from real students. See where our graduates are working today.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => scrollStudents('left')} disabled={visibleStart === 0} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-gray-700">
              <FiChevronLeft size={18} />
            </button>
            <button onClick={() => scrollStudents('right')} disabled={visibleStart >= STUDENTS.length - cardsPerView} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-gray-700">
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Student cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STUDENTS.slice(visibleStart, visibleStart + cardsPerView).map((s) => (
            <div key={s.name} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              {/* Photo area */}
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-bold text-base">{s.name}</p>
                  <p className="text-white/70 text-xs flex items-center gap-1">
                    <FiMapPin size={10} /> {s.college}
                  </p>
                </div>
              </div>

              {/* Info area */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FiBriefcase size={14} className="text-gray-400" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{s.company}</p>
                      <p className="text-xs text-gray-400">{s.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiTrendingUp size={12} className="text-[#4CAF50]" />
                    <span className="text-lg font-bold font-mono text-[#4A5FE7]">{s.salary}</span>
                  </div>
                </div>
                <div className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-semibold ${getTrackColor(s.track)}`}>
                  {s.track}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll controls */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
          <button onClick={() => scrollStudents('left')} disabled={visibleStart === 0} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 text-gray-700">
            <FiChevronLeft size={18} />
          </button>
          <span className="text-xs text-gray-400">{visibleStart + 1}-{Math.min(visibleStart + cardsPerView, STUDENTS.length)} of {STUDENTS.length}</span>
          <button onClick={() => scrollStudents('right')} disabled={visibleStart >= STUDENTS.length - cardsPerView} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 text-gray-700">
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 relative">
            <div className="text-5xl text-[#4A5FE7]/20 mb-4 font-serif leading-none">&ldquo;</div>
            {t && (
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed mb-4 italic">{t.text}</p>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role} at {t.company} - <span className="font-semibold text-[#4A5FE7]">{t.salary}</span></p>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={() => setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600">
                <FiChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-2 h-2 rounded-full transition-colors ${i === currentTestimonial ? 'bg-[#4A5FE7]' : 'bg-gray-300'}`} />
                ))}
              </div>
              <button onClick={nextTestimonial} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600">
                <FiChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
