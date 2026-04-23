'use client'

const STUDENTS = [
  {
    name: 'Manav Dhir',
    company: 'BlackRock',
    salary: '22–24 LPA',
    photo: '/manav-dhir.jpg',
    ring: 'border-blue-500/90',
    badge: 'bg-blue-600 text-white',
  },
  {
    name: 'Naman',
    company: 'EPAM',
    salary: '8.5 LPA',
    photo: 'https://i.pravatar.cc/400?img=56',
    ring: 'border-teal-600/90',
    badge: 'bg-emerald-600 text-white',
  },
  {
    name: 'Jeet Bharti',
    company: 'PwC',
    salary: '7–8 LPA',
    photo: 'https://i.pravatar.cc/400?img=62',
    ring: 'border-amber-500/90',
    badge: 'bg-orange-500 text-white',
  },
  {
    name: 'Rahul Thakur',
    company: 'Berger',
    salary: '8.5 LPA',
    photo: 'https://i.pravatar.cc/400?img=68',
    ring: 'border-violet-600/90',
    badge: 'bg-violet-600 text-white',
  },
]

export default function StudentOutcomes() {
  return (
    <section id="outcomes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.35em] uppercase bg-gradient-to-r from-[#6C63FF] via-[#7C4DFF] to-[#F73AEE] bg-clip-text text-transparent mb-4">
            Real Outcomes
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
            Our Students Are Getting Real Offers
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {STUDENTS.map((student) => (
            <div key={student.name} className="bg-white border border-slate-200 rounded-[2rem] shadow-sm p-8 text-center overflow-hidden">
              <div className={`mx-auto mb-8 h-44 w-44 rounded-full border-8 overflow-hidden ${student.ring}`}>
                <img src={student.photo} alt={student.name} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-xl font-semibold text-slate-950">{student.name}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-600 uppercase tracking-[0.16em]">{student.company}</p>
                </div>
                <div className={`mx-auto w-full rounded-3xl px-8 py-4 text-sm font-semibold ${student.badge}`}>
                  {student.salary}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
