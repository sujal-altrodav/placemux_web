'use client'

import { useState } from 'react'
import { FiCheck, FiLoader } from 'react-icons/fi'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'

interface FormData {
  fullName: string
  email: string
  phone: string
  college: string
  graduationYear: string
  currentYear: string
  preferredTrack: string
  referralSource: string
  message: string
  consent: boolean
}

interface FormErrors {
  [key: string]: string
}

export default function EnrollmentForm() {
  const [form, setForm] = useState<FormData>({
    fullName: '', email: '', phone: '', college: '',
    graduationYear: '', currentYear: '', preferredTrack: '',
    referralSource: '', message: '', consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => { const n = { ...prev }; delete n[field]; return n })
  }

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) e.phone = 'Enter 10-digit number'
    if (!form.college.trim()) e.college = 'College is required'
    if (!form.graduationYear) e.graduationYear = 'Select graduation year'
    if (!form.currentYear) e.currentYear = 'Select current year'
    if (!form.preferredTrack) e.preferredTrack = 'Select a track'
    if (!form.consent) e.consent = 'Consent is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <section id="enroll" className="py-24">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <FiCheck className="text-green-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Application Submitted!</h3>
            <p className="text-gray-400 mb-6">Thank you, {form.fullName}. We have received your application. Our team will reach out within 24 hours to discuss next steps.</p>
            <button onClick={() => { setIsSubmitted(false); setForm({ fullName: '', email: '', phone: '', college: '', graduationYear: '', currentYear: '', preferredTrack: '', referralSource: '', message: '', consent: false }) }} className="text-sm text-[#7B93FF] hover:text-[#00BCD4] transition-colors">
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="enroll" className="py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#7B93FF] mb-3">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Enroll Now</h2>
          <p className="text-gray-400 mt-3">Take the first step toward your dream career. Fill out the form below.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1.5 block">Full Name *</label>
              <input placeholder="John Doe" value={form.fullName} onChange={(e) => update('fullName', e.target.value)} className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4A5FE7]/50 transition-colors ${errors.fullName ? 'border-red-500' : 'border-white/10'}`} />
              {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1.5 block">Email *</label>
              <input type="email" placeholder="john@example.com" value={form.email} onChange={(e) => update('email', e.target.value)} className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4A5FE7]/50 transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'}`} />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1.5 block">Phone *</label>
              <input type="tel" placeholder="9876543210" value={form.phone} onChange={(e) => update('phone', e.target.value)} className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4A5FE7]/50 transition-colors ${errors.phone ? 'border-red-500' : 'border-white/10'}`} />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1.5 block">College *</label>
              <input placeholder="VIT Vellore" value={form.college} onChange={(e) => update('college', e.target.value)} className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4A5FE7]/50 transition-colors ${errors.college ? 'border-red-500' : 'border-white/10'}`} />
              {errors.college && <p className="text-xs text-red-400 mt-1">{errors.college}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1.5 block">Year of Graduation *</label>
              <select value={form.graduationYear} onChange={(e) => update('graduationYear', e.target.value)} className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5FE7]/50 transition-colors ${errors.graduationYear ? 'border-red-500' : 'border-white/10'}`}>
                <option value="" className="bg-[#0B0D1A]">Select year</option>
                {['2025', '2026', '2027', '2028'].map((y) => <option key={y} value={y} className="bg-[#0B0D1A]">{y}</option>)}
              </select>
              {errors.graduationYear && <p className="text-xs text-red-400 mt-1">{errors.graduationYear}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1.5 block">Current Year *</label>
              <select value={form.currentYear} onChange={(e) => update('currentYear', e.target.value)} className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5FE7]/50 transition-colors ${errors.currentYear ? 'border-red-500' : 'border-white/10'}`}>
                <option value="" className="bg-[#0B0D1A]">Select year</option>
                {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((y) => <option key={y} value={y} className="bg-[#0B0D1A]">{y}</option>)}
              </select>
              {errors.currentYear && <p className="text-xs text-red-400 mt-1">{errors.currentYear}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1.5 block">Preferred Track *</label>
              <select value={form.preferredTrack} onChange={(e) => update('preferredTrack', e.target.value)} className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5FE7]/50 transition-colors ${errors.preferredTrack ? 'border-red-500' : 'border-white/10'}`}>
                <option value="" className="bg-[#0B0D1A]">Select track</option>
                {['AI/ML Engineering', 'Data Analytics', 'Full Stack MERN', 'Android/iOS Dev', 'DevOps Engineering'].map((t) => <option key={t} value={t} className="bg-[#0B0D1A]">{t}</option>)}
              </select>
              {errors.preferredTrack && <p className="text-xs text-red-400 mt-1">{errors.preferredTrack}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1.5 block">How did you hear about us?</label>
              <select value={form.referralSource} onChange={(e) => update('referralSource', e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5FE7]/50 transition-colors">
                <option value="" className="bg-[#0B0D1A]">Select source</option>
                {['Social Media', 'College Placement Cell', 'Friend/Referral', 'Google Search', 'YouTube', 'Other'].map((s) => <option key={s} value={s} className="bg-[#0B0D1A]">{s}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300 mb-1.5 block">Message (Optional)</label>
            <textarea placeholder="Any questions or specific requirements..." value={form.message} onChange={(e) => update('message', e.target.value)} rows={3} className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4A5FE7]/50 transition-colors resize-none" />
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" id="consent" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#4A5FE7] focus:ring-[#4A5FE7]" />
            <label htmlFor="consent" className="text-sm text-gray-400 leading-relaxed cursor-pointer">
              I agree to receive communications from Placemux regarding program updates, events, and career opportunities. *
            </label>
          </div>
          {errors.consent && <p className="text-xs text-red-400">{errors.consent}</p>}

          <button onClick={handleSubmit} disabled={isSubmitting} className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white hover:opacity-90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 text-sm">
            {isSubmitting ? (
              <><FiLoader className="animate-spin" size={16} /> Submitting...</>
            ) : (
              <><HiOutlineRocketLaunch size={16} /> Submit Application</>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
