import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Heart, Users, Globe, BookOpen, Stethoscope, Home,
  Menu, X, ArrowRight, Mail, Phone, MapPin,
  Facebook, Twitter, Instagram, Linkedin, Award,
} from 'lucide-react'
import heroImg from './assets/hero.png'
import './App.css'

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Programs', 'Impact', 'Contact']

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center shadow-md">
            <Heart className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-slate-800' : 'text-white'}`}>
            Hope<span className="text-amber-400">Reach</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`font-medium text-sm hover:text-amber-400 transition-colors ${
                scrolled ? 'text-slate-600' : 'text-white/85'
              }`}
            >
              {link}
            </a>
          ))}
          <a
            href="#donate"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-amber-300/50 hover:-translate-y-0.5"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-slate-700' : 'text-white'}`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-slate-600 font-medium border-b border-slate-50 hover:text-amber-500"
                >
                  {link}
                </a>
              ))}
              <a
                href="#donate"
                onClick={() => setIsOpen(false)}
                className="block mt-3 bg-amber-500 text-white font-semibold px-6 py-3 rounded-full text-center"
              >
                Donate Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-teal-900" />

      {/* Glow orbs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold px-4 py-2 rounded-full mb-7 uppercase tracking-widest"
            >
              <Heart className="w-3.5 h-3.5" fill="currentColor" />
              Making a difference since 2005
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Changing{' '}
              <span className="text-amber-400">Lives</span>,<br />
              Building{' '}
              <span className="text-teal-400">Futures</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-300/90 leading-relaxed mb-10 max-w-xl"
            >
              We empower communities through education, healthcare, and sustainable
              development. Every donation creates ripples of change that last for
              generations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#donate"
                className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-amber-900/40 hover:shadow-amber-500/40 hover:-translate-y-1"
              >
                Donate Today
                <Heart className="w-5 h-5 group-hover:scale-110" fill="white" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full border border-white/20 hover:-translate-y-1"
              >
                Our Story <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right — Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, type: 'spring', stiffness: 100 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl">
                <img
                  src={heroImg}
                  alt="Impact"
                  className="w-full h-60 object-cover rounded-2xl mb-6 shadow-lg"
                />
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Lives Touched', value: '50,000+', Icon: Heart, color: 'text-pink-400', bg: 'bg-pink-500/20' },
                    { label: 'Countries', value: '32', Icon: Globe, color: 'text-teal-400', bg: 'bg-teal-500/20' },
                    { label: 'Volunteers', value: '2,400+', Icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/20' },
                    { label: 'Projects Done', value: '180+', Icon: Award, color: 'text-amber-400', bg: 'bg-amber-500/20' },
                  ].map(s => (
                    <div key={s.label} className={`${s.bg} rounded-2xl p-4 backdrop-blur-sm`}>
                      <s.Icon className={`w-5 h-5 ${s.color} mb-1.5`} />
                      <div className="text-white font-bold text-xl">{s.value}</div>
                      <div className="text-slate-300 text-xs mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 bg-amber-500 rounded-2xl px-5 py-3 shadow-2xl shadow-amber-900/40"
              >
                <div className="text-white font-bold text-2xl leading-none">95%</div>
                <div className="text-amber-100 text-xs mt-0.5">To Programs</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 72L48 60C96 48 192 24 288 18C384 12 480 24 576 30C672 36 768 36 864 33C960 30 1056 24 1152 21C1248 18 1344 18 1392 18L1440 18V72H0Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  )
}

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ end, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 2200
    let start = null
    const step = ts => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * end))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, end])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// ─── Impact Stats ─────────────────────────────────────────────────────────────
function ImpactStats() {
  const stats = [
    { end: 50000, suffix: '+', label: 'Lives Transformed', Icon: Heart, bg: 'bg-pink-500' },
    { end: 32, suffix: '', label: 'Countries Reached', Icon: Globe, bg: 'bg-teal-500' },
    { end: 2400, suffix: '+', label: 'Active Volunteers', Icon: Users, bg: 'bg-blue-500' },
    { end: 180, suffix: '+', label: 'Projects Completed', Icon: Award, bg: 'bg-amber-500' },
  ]

  return (
    <section id="impact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {stats.map(s => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${s.bg} rounded-2xl shadow-lg mb-5`}>
                <s.Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-slate-800 mb-1">
                <Counter end={s.end} suffix={s.suffix} />
              </div>
              <div className="text-slate-500 font-medium text-sm">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── About / Mission ──────────────────────────────────────────────────────────
function About() {
  const pillars = [
    {
      Icon: BookOpen,
      title: 'Education for All',
      desc: 'We build schools, provide scholarships, and train teachers in underserved communities, ensuring every child has access to quality education.',
      bg: 'bg-blue-500',
      light: 'bg-blue-50',
      text: 'text-blue-600',
      ring: 'hover:ring-blue-200',
    },
    {
      Icon: Stethoscope,
      title: 'Community Health',
      desc: 'Mobile clinics, vaccination drives, and maternal health programs bring essential healthcare to the most vulnerable populations worldwide.',
      bg: 'bg-teal-500',
      light: 'bg-teal-50',
      text: 'text-teal-600',
      ring: 'hover:ring-teal-200',
    },
    {
      Icon: Home,
      title: 'Shelter & Safety',
      desc: 'We provide emergency housing, rebuild after disasters, and create safe spaces where families can rebuild their lives with dignity.',
      bg: 'bg-amber-500',
      light: 'bg-amber-50',
      text: 'text-amber-600',
      ring: 'hover:ring-amber-200',
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.2em]">Our Mission</span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Three Pillars of Change
          </h2>
          <p className="text-slate-500 leading-relaxed">
            For over two decades, HopeReach has addressed the root causes of poverty through
            targeted, sustainable interventions that transform entire communities.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map(p => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl ring-2 ring-transparent ${p.ring} transition-all duration-300 border border-slate-100`}
            >
              <div className={`w-14 h-14 ${p.bg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <p.Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{p.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-5">{p.desc}</p>
              <a
                href="#programs"
                className={`inline-flex items-center gap-1.5 ${p.text} font-semibold text-sm hover:gap-3 transition-all`}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Programs ─────────────────────────────────────────────────────────────────
function Programs() {
  const programs = [
    {
      title: 'Rural School Initiative',
      category: 'Education',
      desc: 'Building 50 schools in remote areas of South Asia and sub-Saharan Africa, giving over 10,000 children access to quality education annually.',
      gradient: 'from-blue-600 to-indigo-700',
      raised: 75,
    },
    {
      title: 'Clean Water Project',
      category: 'Health',
      desc: 'Installing water purification systems and teaching hygiene practices in villages without access to safe, clean drinking water.',
      gradient: 'from-teal-500 to-cyan-600',
      raised: 62,
    },
    {
      title: 'Women Empowerment Fund',
      category: 'Community',
      desc: 'Microfinance, vocational training, and mentorship programs helping women launch businesses and support their families independently.',
      gradient: 'from-amber-500 to-orange-600',
      raised: 88,
    },
  ]

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.2em]">What We Do</span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-slate-800 mt-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Active Programs
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {programs.map(prog => (
            <motion.div
              key={prog.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient header */}
              <div className={`h-48 bg-gradient-to-br ${prog.gradient} relative overflow-hidden`}>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {prog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-lg font-bold text-slate-800 mb-3">{prog.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{prog.desc}</p>

                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400 font-medium">Funding Progress</span>
                    <span className="font-bold text-slate-700">{prog.raised}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${prog.raised}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                    />
                  </div>
                </div>

                <a
                  href="#donate"
                  className="block w-full text-center bg-slate-50 hover:bg-amber-50 text-slate-600 hover:text-amber-700 font-semibold py-3 rounded-xl text-sm border border-slate-100 hover:border-amber-200 transition-all"
                >
                  Support This Program →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const stories = [
    {
      quote:
        'HopeReach built a school in our village. My daughter is now in university — the first in our family. I never thought this would be possible.',
      name: 'Fatima Al-Hassan',
      location: 'Mali, West Africa',
      initial: 'F',
      color: 'bg-teal-500',
    },
    {
      quote:
        'The clean water program changed everything for us. Children stopped getting sick, and mothers no longer walk 5 miles each day for water.',
      name: 'Ravi Kumar',
      location: 'Rajasthan, India',
      initial: 'R',
      color: 'bg-blue-500',
    },
    {
      quote:
        'With the microfinance loan, I started a tailoring business. Now I employ four women and my children eat three meals a day.',
      name: 'Grace Okonkwo',
      location: 'Lagos, Nigeria',
      initial: 'G',
      color: 'bg-amber-500',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-[0.2em]">Real Stories</span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mt-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Voices of Change
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {stories.map(s => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/12 transition-all"
            >
              <div className="text-amber-400 text-lg mb-5 tracking-wider">★★★★★</div>
              <p className="text-slate-200 leading-relaxed text-sm mb-8 italic">"{s.quote}"</p>
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 ${s.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {s.initial}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{s.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{s.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Donate ───────────────────────────────────────────────────────────────────
function Donate() {
  const [selected, setSelected] = useState(25)
  const [custom, setCustom] = useState('')
  const amounts = [10, 25, 50, 100]
  const displayAmount = custom || selected || 25

  return (
    <section id="donate" className="py-24 bg-amber-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-2xl shadow-xl shadow-amber-200 mb-6">
            <Heart className="w-8 h-8 text-white" fill="white" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Make a Difference Today
          </h2>
          <p className="text-slate-500 text-lg mb-12">
            95% of your donation goes directly to programs. Together, we can change the world.
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-amber-100 text-left">
            <p className="text-slate-500 font-medium text-sm mb-5 text-center">Choose an amount to give:</p>

            <div className="grid grid-cols-4 gap-3 mb-4">
              {amounts.map(amt => (
                <button
                  key={amt}
                  onClick={() => { setSelected(amt); setCustom('') }}
                  className={`py-4 rounded-2xl font-bold text-lg transition-all ${
                    selected === amt && !custom
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-200 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-600'
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            <div className="relative mb-6">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">$</span>
              <input
                type="number"
                placeholder="Custom amount"
                value={custom}
                min={1}
                onChange={e => { setCustom(e.target.value); setSelected(null) }}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50 rounded-2xl py-4 pl-10 pr-5 text-slate-700 text-lg outline-none transition-all"
              />
            </div>

            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-5 rounded-2xl text-lg shadow-xl shadow-amber-200 hover:shadow-amber-300 hover:-translate-y-0.5 flex items-center justify-center gap-3 transition-all">
              <Heart className="w-5 h-5" fill="white" />
              Donate ${displayAmount} Now
            </button>

            <p className="text-slate-400 text-xs text-center mt-5">
              🔒 Secure payment · Tax deductible · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const info = [
    { Icon: Mail, label: 'Email Us', value: 'hello@hoperaech.org' },
    { Icon: Phone, label: 'Call Us', value: '+1 (555) 234-5678' },
    { Icon: MapPin, label: 'Visit Us', value: '123 Hope Street, New York, NY 10001' },
  ]

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.2em]">Get In Touch</span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-slate-800 mt-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We'd Love to Hear from You
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Whether you want to volunteer, partner with us, or simply learn more about our
              work, we're here to help. Reach out and let's build a better world together.
            </p>
            <div className="space-y-6">
              {info.map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-amber-100">
                    <item.Icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700 text-sm">{item.label}</div>
                    <div className="text-slate-500 text-sm mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-teal-50 border border-teal-200 rounded-3xl p-12 text-center"
              >
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" fill="white" />
                </div>
                <h3 className="text-2xl font-bold text-teal-800 mb-2">Thank You!</h3>
                <p className="text-teal-600">We've received your message and will be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50 rounded-3xl p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {['First Name', 'Last Name'].map(field => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">{field}</label>
                      <input
                        type="text"
                        required
                        placeholder={field === 'First Name' ? 'John' : 'Doe'}
                        className="w-full border-2 border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50 rounded-xl py-3 px-4 text-slate-700 outline-none transition-all bg-white"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full border-2 border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50 rounded-xl py-3 px-4 text-slate-700 outline-none transition-all bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                  <select className="w-full border-2 border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50 rounded-xl py-3 px-4 text-slate-700 outline-none transition-all bg-white">
                    <option>General Inquiry</option>
                    <option>Volunteer</option>
                    <option>Partnership</option>
                    <option>Donation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can we help you?"
                    className="w-full border-2 border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50 rounded-xl py-3 px-4 text-slate-700 outline-none transition-all resize-none bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-100 hover:shadow-amber-200 hover:-translate-y-0.5 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const quickLinks = ['About Us', 'Our Programs', 'Impact Report', 'Volunteer', 'Partner With Us']
  const support = ['Donate', 'Fundraise', 'Corporate Giving', 'Legacy Giving', 'FAQs']

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Hope<span className="text-amber-400">Reach</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm mb-7">
              Empowering communities worldwide through education, healthcare, and sustainable
              development since 2005. Building a world where no one is left behind.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-xl flex items-center justify-center group transition-all"
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              {support.map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-slate-800/50 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div>
            <h4 className="text-white font-semibold mb-1">Stay in the loop</h4>
            <p className="text-slate-400 text-sm">Get monthly updates on our impact and how you can help.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 md:w-64 bg-slate-700 border border-slate-600 focus:border-amber-400 outline-none rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 transition-all"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-3 rounded-xl text-sm whitespace-nowrap transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2025 HopeReach Foundation. All rights reserved. Registered 501(c)(3) nonprofit.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <a key={link} href="#" className="text-slate-500 hover:text-amber-400 text-xs transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App Root ─────────────────────────────────────────────────────────────────
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImpactStats />
      <About />
      <Programs />
      <Testimonials />
      <Donate />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
