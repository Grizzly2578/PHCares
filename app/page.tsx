"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  Heart,
  Users,
  Shield,
  Phone,
  Mail,
  MessageCircle,
  Activity,
  BookOpen,
  Home,
  Dumbbell,
  Sunrise,
  TreePine,
  Brain,
  Zap,
  UserX,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Cloud,
  Puzzle,
  Link,
  TrendingDown,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  ArrowLeft,
} from "lucide-react"

export default function DrugPreventionSite() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [expandedDanger, setExpandedDanger] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [viewingAlbumIndex, setViewingAlbumIndex] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
    albumTitle: string
    albumIndex: number
  } | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleDanger = (id: string) => {
    setExpandedDanger(expandedDanger === id ? null : id)
  }

  const handleMobileNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDownloadPoster = () => {
    const link = document.createElement("a")
    link.href = "/images/drug-prevention-poster.jpg"
    link.download = "strong-minds-say-no-poster.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const galleryAlbums = [
    {
      id: "vegetable-planting-1",
      title: "Vegetable Planting Project Morning Team",
      description:
        "Our community coming together to grow healthy food and healthy futures, Led by our very capable team leader: Mr. Roland Bersabe!",
      coverImage: "https://i.imgur.com/LO1CPkV.jpeg",
      images: [
        {
          src: "https://i.imgur.com/spXiIHW.jpeg",
          alt: "Garden before clean-up",
        },
        {
          src: "https://i.imgur.com/G68zjYG.jpeg",
          alt: "Garden after clean-up",
        },
        {
          src: "https://i.imgur.com/A7NoOPT.jpeg",
          alt: "Ms. Duanne Joie planting a yellow ginger.",
        },
        {
          src: "https://i.imgur.com/LO1CPkV.jpeg",
          alt: "📸 by Ms. Duanne, Meet our Morning Shift team: Jumgo-as Duanne Joie B., Culanag Vince Aeron, Sitoy Norberto Noah, Jumgo-as Dunnikah Jhoy B., Martos Joshli Faith, Lalisan John Mark Ryan, Valenzuela Raven, Bersabe Rolan",
        },
        {
          src: "https://i.imgur.com/17NQESt.jpeg",
          alt: "📸 by Ms. Duanne, Meet our Morning Shift team: Jumgo-as Duanne Joie B., Culanag Vince Aeron, Sitoy Norberto Noah, Jumgo-as Dunnikah Jhoy B., Martos Joshli Faith, Lalisan John Mark Ryan, Valenzuela Raven, Bersabe Rolan",
        },
        {
          src: "https://i.imgur.com/udMbKxs.jpeg",
          alt: "Joshli Faith Martos a very happy member on the project.",
        },
        {
          src: "https://i.imgur.com/BWs5wRq.jpeg",
          alt: "Cleaning the area.",
        },
        {
          src: "https://i.imgur.com/4zCran3.jpeg",
          alt: "Soil Tilling",
        },
        {
          src: "/images/watering-plants.jpg",
          alt: "Community members watering vegetables",
        },
        {
          src: "/images/garden-bed-setup.jpg",
          alt: "Garden bed setup",
        },
        {
          src: "/images/planting-close-up.jpg",
          alt: "Plant Close-up",
        },
        {
          src: "https://i.imgur.com/z9xI24K.jpeg",
          alt: "Preparing for some miryenda!",
        },
        {
          src: "https://i.imgur.com/I1BcG5x.jpeg",
          alt: "Preparing for some miryenda!",
        },
        {
          src: "https://i.imgur.com/PrxZRYI.jpeg",
          alt: "Miryenda!",
        },
      ],
      date: "October 5, 2025",
    },
    {
      id: "vegetable-planting-2",
      title: "Vegetable Planting Project Aftrernoon Team",
      description:
        "Continuation of our program coming together to grow healthy food and healthy futures, Led by our very capable team leader: Mr. Roland Bersabe!",
      coverImage: "https://i.imgur.com/a2S6ENX.jpeg",
      images: [
        {
          src: "https://i.imgur.com/IsEWZLJ.jpeg",
          alt: "Afternoon planting team",
        },
        {
          src: "https://i.imgur.com/a2S6ENX.jpeg",
          alt: "Afternoon planting team",
        },
        {
          src: "https://i.imgur.com/Pzc4pLu.jpeg",
          alt: "Planting",
        },
        {
          src: "https://i.imgur.com/7poTRCk.jpeg",
          alt: "Afternoon team expanded the planting area",
        },
        {
          src: "https://i.imgur.com/52yDYc7.jpegg",
          alt: "Cleaning the area",
        },
        {
          src: "https://i.imgur.com/JgPYXr0.jpeg",
          alt: "Cleaning the area",
        },
        {
          src: "https://i.imgur.com/aVrjGm1.jpeg",
          alt: "😎",
        },
        {
          src: "https://i.imgur.com/pCB6ovx.jpeg",
          alt: "Area expansion",
        },
        {
          src: "https://i.imgur.com/lCKtewd.jpeg",
          alt: "Area expansion",
        },
        {
          src: "https://i.imgur.com/x1MjvNw.jpeg",
          alt: "Area Cleaning",
        },
        {
          src: "https://i.imgur.com/8epMSXG.jpeg",
          alt: "Area Cleaning",
        },
        {
          src: "https://i.imgur.com/H0mzA8Z.jpeg",
          alt: "Cleaning",
        },
        {
          src: "https://i.imgur.com/hq3sV61.jpeg",
          alt: "Cleaning",
        },
        {
          src: "https://i.imgur.com/ekZLo22.jpeg",
          alt: "Cleaning",
        },
        {
          src: "https://i.imgur.com/LRlujaV.jpeg",
          alt: "Area after clean-up",
        },
        {
          src: "https://i.imgur.com/huZztkj.jpeg",
          alt: "Soil tilling",
        },
        {
          src: "https://i.imgur.com/GTPIqSO.jpeg",
          alt: "Boss nangangamote ka ah!",
        },
        {
          src: "https://i.imgur.com/G6J9NkK.jpeg",
          alt: "Area after clean-up",
        },
        {
          src: "https://i.imgur.com/RvjlIHb.jpeg",
          alt: "Area after clean-up",
        },
      ],
      date: "October 5, 2025",
    },
  ]

  const openLightbox = (albumIndex: number, imageIndex: number) => {
    const album = galleryAlbums[albumIndex]
    setSelectedImage({
      src: album.images[imageIndex].src,
      alt: album.images[imageIndex].alt,
      albumTitle: album.title,
      albumIndex: albumIndex,
    })
    setCurrentImageIndex(imageIndex)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return
    const album = galleryAlbums[selectedImage.albumIndex]
    let newIndex = currentImageIndex
    if (direction === "prev") {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : album.images.length - 1
    } else {
      newIndex = currentImageIndex < album.images.length - 1 ? currentImageIndex + 1 : 0
    }
    setCurrentImageIndex(newIndex)
    setSelectedImage({
      src: album.images[newIndex].src,
      alt: album.images[newIndex].alt,
      albumTitle: album.title,
      albumIndex: selectedImage.albumIndex,
    })
  }

  const openAlbumGrid = (albumIndex: number) => {
    setViewingAlbumIndex(albumIndex)
  }

  const closeAlbumGrid = () => {
    setViewingAlbumIndex(null)
  }

  const FloatingParticles = ({ count = 20 }) => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float-${i % 4}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ["#1ABC9C", "#2ECC71", "#E67E22", "#3498DB"][i % 4],
              opacity: 0.6,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    )
  }

  const dangerTopics = [
    {
      id: "mental-health",
      title: "Mental Health Risks",
      icon: <Brain className="w-6 h-6" />,
      illustration: <Cloud className="w-16 h-16 text-gray-400" />,
      shortDesc: "Depression, anxiety, paranoia, and mood disorders",
      fullDesc:
        "Substance abuse significantly impacts mental health, often leading to depression, anxiety disorders, paranoia, and severe mood swings. These effects can persist long after substance use stops, affecting daily life, relationships, and overall well-being.",
      stats: "75% of people with substance abuse also experience mental health disorders",
      hope: "Mental health support and therapy can help restore emotional balance and provide coping strategies for lasting recovery.",
    },
    {
      id: "physical-health",
      title: "Physical Health Risks",
      icon: <Activity className="w-6 h-6" />,
      illustration: <Zap className="w-16 h-16 text-red-400" />,
      shortDesc: "Brain, lung, heart, and liver damage",
      fullDesc:
        "Drug abuse causes serious damage to vital organs including the brain, heart, lungs, and liver. This can lead to cardiovascular disease, respiratory problems, cognitive impairment, and organ failure that may require lifelong medical care.",
      stats: "Drug-related health complications affect over 1.8 million Filipinos annually",
      hope: "With proper medical care and lifestyle changes, many physical health effects can be managed and improved over time.",
    },
    {
      id: "social-consequences",
      title: "Social Consequences",
      icon: <UserX className="w-6 h-6" />,
      illustration: <Puzzle className="w-16 h-16 text-blue-400" />,
      shortDesc: "Isolation, broken relationships, loss of trust",
      fullDesc:
        "Substance abuse often leads to damaged relationships with family and friends, social isolation, and loss of trust from loved ones. This can create a cycle of loneliness that makes recovery more challenging.",
      stats: "60% of people with addiction report significant relationship problems",
      hope: "Rebuilding relationships takes time, but with commitment and support, trust can be restored and new, healthy connections formed.",
    },
    {
      id: "academic-career",
      title: "Academic & Career Impact",
      icon: <GraduationCap className="w-6 h-6" />,
      illustration: <TrendingDown className="w-16 h-16 text-orange-400" />,
      shortDesc: "Poor performance, dropout, lost opportunities",
      fullDesc:
        "Drug abuse significantly impacts academic performance and career prospects, leading to poor grades, increased absenteeism, dropout rates, and missed job opportunities. This can have long-lasting effects on future earning potential and life goals.",
      stats: "Students with substance abuse are 5x more likely to drop out of school",
      hope: "Educational support programs and career counseling can help individuals get back on track and pursue their goals.",
    },
    {
      id: "addiction-dependence",
      title: "Addiction & Dependence",
      icon: <Link className="w-6 h-6" />,
      illustration: (
        <div className="w-16 h-16 border-4 border-gray-400 rounded-full relative">
          <div className="absolute inset-2 border-2 border-gray-300 rounded-full"></div>
        </div>
      ),
      shortDesc: "Cravings, withdrawal, cycle of relapse",
      fullDesc:
        "Addiction creates powerful physical and psychological dependence, leading to intense cravings, painful withdrawal symptoms, and cycles of relapse. The brain's reward system becomes hijacked, making it extremely difficult to stop without professional help.",
      stats: "Addiction affects brain chemistry and can develop within weeks of regular use",
      hope: "Addiction is a treatable medical condition. With proper treatment, support, and time, recovery is absolutely possible.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#1ABC9C] to-[#2ECC71] rounded-full flex items-center justify-center">
              <Sunrise className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">PH Care</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-[#1ABC9C] transition-colors">
              About
            </a>
            <a href="#dangers" className="text-gray-700 hover:text-[#1ABC9C] transition-colors">
              Dangers
            </a>
            <a href="#prevention" className="text-gray-700 hover:text-[#1ABC9C] transition-colors">
              Prevention
            </a>
            <a href="#song" className="text-gray-700 hover:text-[#1ABC9C] transition-colors">
              Our Song
            </a>
            <a href="#poster" className="text-gray-700 hover:text-[#1ABC9C] transition-colors">
              Our Poster
            </a>
            <a href="#projects" className="text-gray-700 hover:text-[#1ABC9C] transition-colors">
              Projects
            </a>
            <a href="#support" className="text-gray-700 hover:text-[#1ABC9C] transition-colors">
              Support
            </a>
          </nav>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-[#1ABC9C]">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#1ABC9C] to-[#2ECC71] rounded-full flex items-center justify-center">
                    <Sunrise className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-800">PH Care</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-6 mt-8">
                <button
                  onClick={() => handleMobileNavClick("#about")}
                  className="text-left text-lg text-gray-700 hover:text-[#1ABC9C] transition-colors py-2"
                >
                  About
                </button>
                <button
                  onClick={() => handleMobileNavClick("#dangers")}
                  className="text-left text-lg text-gray-700 hover:text-[#1ABC9C] transition-colors py-2"
                >
                  Dangers
                </button>
                <button
                  onClick={() => handleMobileNavClick("#prevention")}
                  className="text-left text-lg text-gray-700 hover:text-[#1ABC9C] transition-colors py-2"
                >
                  Prevention
                </button>
                <button
                  onClick={() => handleMobileNavClick("#song")}
                  className="text-left text-lg text-gray-700 hover:text-[#1ABC9C] transition-colors py-2"
                >
                  Our Song
                </button>
                <button
                  onClick={() => handleMobileNavClick("#poster")}
                  className="text-left text-lg text-gray-700 hover:text-[#1ABC9C] transition-colors py-2"
                >
                  Our Poster
                </button>
                <button
                  onClick={() => handleMobileNavClick("#projects")}
                  className="text-left text-lg text-gray-700 hover:text-[#1ABC9C] transition-colors py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => handleMobileNavClick("#support")}
                  className="text-left text-lg text-gray-700 hover:text-[#1ABC9C] transition-colors py-2"
                >
                  Support
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1ABC9C] via-[#2ECC71] to-[#3498DB] animate-gradient-x"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <FloatingParticles count={30} />

        <div
          className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-balance">Choose Life, Choose Hope, Choose</h1>
            <div className="text-6xl md:text-8xl font-black text-white animate-pulse relative">
              <span className="absolute inset-0 bg-gradient-to-r from-[#E67E22] via-[#1ABC9C] to-[#2ECC71] bg-clip-text text-transparent">
                CARE
              </span>
              <span className="text-white drop-shadow-2xl">CARE</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-pretty">
            Together we can prevent drug abuse and support recovery.
          </p>
          <Button
            size="lg"
            className="bg-[#E67E22] hover:bg-[#1ABC9C] text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => window.open("https://findahelpline.com/countries/ph/topics/substance-use", "_blank")}
          >
            Get Support
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 opacity-20">
            <TreePine className="w-32 h-32 text-[#2ECC71] animate-bounce" style={{ animationDuration: "3s" }} />
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <TreePine className="w-24 h-24 text-[#1ABC9C] animate-pulse" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-block p-6 bg-gradient-to-r from-[#1ABC9C]/10 to-[#2ECC71]/10 rounded-2xl border-2 border-[#1ABC9C]/20">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">About Our Mission</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#1ABC9C] to-[#2ECC71] mx-auto mb-3"></div>
              </div>
            </div>

            <div className="mb-12 p-8 bg-gradient-to-br from-[#ECF0F1] to-white rounded-3xl shadow-lg">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1ABC9C] to-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Dumbbell className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Sports</span>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2ECC71] to-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Education</span>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3498DB] to-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Art</span>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E67E22] to-[#1ABC9C] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Community</span>
                </div>
              </div>
              <p className="text-lg text-gray-600 text-pretty">
                We believe in the power of care, community, and positive choices. PH Care's mission is to raise
                awareness about drug abuse prevention while promoting healthy lifestyles and supporting those on their
                recovery journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1ABC9C] to-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600">
                  Building strong, supportive communities that uplift and encourage positive choices.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2ECC71] to-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Prevention</h3>
                <p className="text-gray-600">
                  Educating and empowering individuals with knowledge and tools for prevention.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#3498DB] to-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Recovery</h3>
                <p className="text-gray-600">
                  Supporting recovery journeys with compassion, resources, hope, and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dangers Section */}
      <section id="dangers" className="py-20 bg-[#ECF0F1] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-red-400 to-orange-400 rounded-lg transform rotate-12 animate-pulse"></div>
          </div>
          <div className="absolute bottom-10 left-10 w-24 h-24 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-red-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-6 bg-white rounded-2xl shadow-lg border-2 border-[#1ABC9C]/20">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Understanding the Risks</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#E67E22] to-[#1ABC9C] mx-auto mb-3"></div>
                <p className="text-gray-600">Knowledge empowers better choices and opens paths to healing</p>
              </div>
            </div>

            {/* Infographic Overview */}
            <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Impact Overview</h3>
              <div className="grid md:grid-cols-5 gap-6">
                {dangerTopics.map((topic, index) => (
                  <div key={topic.id} className="text-center group">
                    <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-red-500">{topic.illustration}</div>
                    </div>
                    <h4 className="font-medium text-gray-800 text-sm mb-1">{topic.title}</h4>
                    <p className="text-xs text-gray-600">{topic.shortDesc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1ABC9C]/10 to-[#2ECC71]/10 px-6 py-3 rounded-full">
                  <Heart className="w-5 h-5 text-[#1ABC9C]" />
                  <span className="text-gray-700 font-medium">Recovery is possible with the right support</span>
                </div>
              </div>
            </div>

            {/* Detailed Accordion Cards */}
            <div className="space-y-4">
              {dangerTopics.map((topic, index) => (
                <Card
                  key={topic.id}
                  className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleDanger(topic.id)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              index === 0
                                ? "bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600"
                                : index === 1
                                  ? "bg-gradient-to-br from-red-100 to-pink-100 text-red-600"
                                  : index === 2
                                    ? "bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600"
                                    : index === 3
                                      ? "bg-gradient-to-br from-orange-100 to-yellow-100 text-orange-600"
                                      : "bg-gradient-to-br from-gray-100 to-slate-100 text-gray-600"
                            }`}
                          >
                            {topic.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
                            <p className="text-gray-600">{topic.shortDesc}</p>
                          </div>
                        </div>
                        <div className="text-gray-400">
                          {expandedDanger === topic.id ? (
                            <ChevronUp className="w-6 h-6" />
                          ) : (
                            <ChevronDown className="w-6 h-6" />
                          )}
                        </div>
                      </div>
                    </button>

                    {expandedDanger === topic.id && (
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="grid md:grid-cols-3 gap-6 mt-6">
                          <div className="md:col-span-2">
                            <h4 className="font-semibold text-gray-800 mb-3">Detailed Impact</h4>
                            <p className="text-gray-700 mb-4 leading-relaxed">{topic.fullDesc}</p>

                            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg mb-4">
                              <div className="flex items-center space-x-2 mb-2">
                                <Activity className="w-4 h-4 text-red-500" />
                                <span className="font-medium text-red-700">Key Statistic</span>
                              </div>
                              <p className="text-red-600 text-sm">{topic.stats}</p>
                            </div>

                            <div className="bg-gradient-to-r from-[#1ABC9C]/10 to-[#2ECC71]/10 p-4 rounded-lg">
                              <div className="flex items-center space-x-2 mb-2">
                                <Heart className="w-4 h-4 text-[#1ABC9C]" />
                                <span className="font-medium text-[#1ABC9C]">Hope & Recovery</span>
                              </div>
                              <p className="text-gray-700 text-sm">{topic.hope}</p>
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
                              <div className="mb-4 flex justify-center">{topic.illustration}</div>
                              <p className="text-sm text-gray-600 italic">
                                {index === 0 && "Storm clouds represent the emotional turmoil"}
                                {index === 1 && "Lightning symbolizes sudden health impacts"}
                                {index === 2 && "Broken puzzle pieces show fractured relationships"}
                                {index === 3 && "Declining trend shows lost opportunities"}
                                {index === 4 && "Chains represent the cycle of dependence"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Remember: You're Not Alone</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Understanding these risks is the first step toward making informed choices. If you or someone you know
                  is struggling, help is available 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-[#1ABC9C] hover:bg-[#E67E22] text-white px-8 py-3 transition-all duration-300"
                    onClick={() => window.open("https://findahelpline.com/countries/ph/topics/substance-use", "_blank")}
                  >
                    Get Help Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#1ABC9C] text-[#1ABC9C] hover:bg-[#1ABC9C] hover:text-white px-8 py-3 transition-all duration-300 bg-transparent"
                    onClick={() =>
                      window.open("https://ddb.gov.ph/preventive-education-and-advocacy-programs", "_blank")
                    }
                  >
                    Learn Prevention
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section
        id="prevention"
        className="py-20 bg-gradient-to-br from-[#3498DB]/10 to-[#2ECC71]/10 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#3498DB]/20 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#2ECC71]/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#1ABC9C]/20 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-[#E67E22]/30 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-[#3498DB]/20">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Prevention Strategies</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#3498DB] to-[#2ECC71] mx-auto mb-3"></div>
                <p className="text-gray-600">Building bridges to a healthier future</p>
              </div>
            </div>

            <div className="mb-12 text-center">
              <div className="relative inline-block">
                <div className="w-64 h-64 mx-auto relative">
                  {/* Tree trunk */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-32 bg-gradient-to-t from-[#E67E22] to-[#1ABC9C] rounded-t-lg"></div>
                  {/* Tree branches */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-[#2ECC71] to-[#1ABC9C] rounded-full opacity-80"></div>
                  {/* Labels on branches */}
                  <div className="absolute top-12 left-8 bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-700">
                    Family
                  </div>
                  <div className="absolute top-20 right-8 bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-700">
                    Education
                  </div>
                  <div className="absolute top-32 left-12 bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-700">
                    Health
                  </div>
                  <div className="absolute top-32 right-12 bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-700">
                    Community
                  </div>
                </div>
                <p className="text-gray-600 mt-4">Strong roots create lasting growth</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1ABC9C] to-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Dumbbell className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Stay Active</h3>
                  <p className="text-gray-600 text-sm">
                    Regular exercise and sports build confidence and provide healthy outlets for stress.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2ECC71] to-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>
                  <p className="text-gray-600 text-sm">
                    Knowledge about risks and consequences empowers better decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3498DB] to-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Family Support</h3>
                  <p className="text-gray-600 text-sm">
                    Open communication and strong family bonds create protective environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E67E22] to-[#1ABC9C] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Community</h3>
                  <p className="text-gray-600 text-sm">
                    Positive peer groups and community involvement foster healthy relationships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Song Section */}
      <section id="song" className="py-20 bg-gradient-to-br from-[#E67E22]/10 to-[#1ABC9C]/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#E67E22]/20 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-400/20 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-[#3498DB]/30 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E67E22] to-white rounded-full flex items-center justify-center mr-3 animate-pulse">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800">Our Song</h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-[#E67E22] to-[#1ABC9C] mx-auto mb-3"></div>
                <p className="text-gray-600">A message of hope through music</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">"Say No to Drugs"</h3>
                <p className="text-gray-600 italic">(to the tune of The Wheels on the Bus)</p>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-[#E67E22]/10 to-[#1ABC9C]/10 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed text-center">
                    The drugs on the street can hurt your life,
                    <br />
                    Hurt your life, hurt your life.
                    <br />
                    The drugs on the street can hurt your life,
                    <br />
                    <span className="font-semibold text-[#E67E22]">So let's say no!</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#1ABC9C]/10 to-[#2ECC71]/10 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed text-center">
                    The friends who care will help you stay,
                    <br />
                    Help you stay, help you stay.
                    <br />
                    The friends who care will help you stay,
                    <br />
                    <span className="font-semibold text-[#1ABC9C]">Drug-free each day!</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#2ECC71]/10 to-[#3498DB]/10 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed text-center">
                    The choices we make can keep us strong,
                    <br />
                    Keep us strong, keep us strong.
                    <br />
                    The choices we make can keep us strong,
                    <br />
                    <span className="font-semibold text-[#2ECC71]">Say no to drugs!</span>
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#E67E22]/20 to-[#1ABC9C]/20 px-6 py-3 rounded-full">
                  <Heart className="w-5 h-5 text-[#E67E22]" />
                  <span className="text-gray-700 font-medium">Music brings us together in hope and healing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Poster Section */}
      <section
        id="poster"
        className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-400/20 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-blue-300/30 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-white rounded-full flex items-center justify-center mr-3 animate-pulse">
                    <Shield className="w-6 h-6 text-blue-900" />
                  </div>
                  <h2 className="text-4xl font-bold text-white">Our Poster</h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-white mx-auto mb-3"></div>
                <p className="text-blue-100">Strong minds say no - visual inspiration for change</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">"Say No Before It Says Yes to You."</h3>

                  <div className="space-y-6">
                    <div className="bg-blue-800/50 p-6 rounded-lg border border-blue-400/30">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                          <Heart className="w-4 h-4 text-blue-900" />
                        </div>
                        <h4 className="text-xl font-semibold text-white">Choose a Brighter Future</h4>
                      </div>
                      <p className="text-blue-100">
                        Every choice you make today shapes the person you become tomorrow. Choose paths that lead to
                        growth, health, and happiness.
                      </p>
                    </div>

                    <div className="bg-blue-800/50 p-6 rounded-lg border border-blue-400/30">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                          <Users className="w-4 h-4 text-blue-900" />
                        </div>
                        <h4 className="text-xl font-semibold text-white">Protect Your Dreams</h4>
                      </div>
                      <p className="text-blue-100">
                        Too many dreams have been shattered by drugs. Your aspirations, goals, and future are worth
                        protecting. Don't let substances steal your potential.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600/50 to-blue-500/50 p-6 rounded-lg border border-blue-300/30">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center mr-3">
                          <Brain className="w-4 h-4 text-blue-900" />
                        </div>
                        <h4 className="text-xl font-semibold text-white">Strong Minds Say NO!</h4>
                      </div>
                      <p className="text-blue-100">
                        True strength comes from making difficult but right choices. Your mind is powerful - use it to
                        build a life you're proud of.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-white/20 rounded-2xl blur-lg"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                    <img
                      src="/images/drug-prevention-poster.jpg"
                      alt="Strong Minds Say No - Drug Prevention Poster showing supportive figures with the message 'Say No Before It Says Yes to You'"
                      className="w-full h-auto rounded-lg shadow-2xl"
                    />
                  </div>

                  {/* Floating elements around the poster */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                  <div className="absolute -top-2 -right-6 w-6 h-6 bg-white rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute -bottom-4 -left-2 w-10 h-10 bg-blue-400 rounded-full animate-bounce delay-300 opacity-70"></div>
                  <div className="absolute -bottom-2 -right-4 w-4 h-4 bg-blue-300 rounded-full animate-ping opacity-80"></div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Share This Message</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Help spread awareness by sharing our poster and message with friends, family, and your community.
                  Together, we can create a network of support and prevention.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-blue-500 hover:bg-white hover:text-blue-900 text-white px-8 py-3 transition-all duration-300 shadow-lg"
                    onClick={handleDownloadPoster}
                  >
                    Download Poster
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 transition-all duration-300 bg-transparent"
                  >
                    Share Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-[#2ECC71]/10 to-[#1ABC9C]/10 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#2ECC71]/20 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#1ABC9C]/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#3498DB]/20 rounded-full animate-bounce delay-300"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-[#2ECC71]/20">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2ECC71] to-[#1ABC9C] rounded-full flex items-center justify-center mr-3 animate-pulse">
                    <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800">Our Projects</h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C] mx-auto mb-3"></div>
                <p className="text-gray-600">Building community through positive action</p>
              </div>
            </div>

            {/* Dynamic Gallery Grid - centered and larger for single album, grid for multiple */}
            <div
              className={`grid gap-8 ${
                galleryAlbums.length === 1
                  ? "grid-cols-1 max-w-4xl mx-auto"
                  : galleryAlbums.length === 2
                    ? "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {galleryAlbums.map((album, albumIndex) => (
                <Card
                  key={album.id}
                  className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-0">
                    {/* Album Cover */}
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={album.coverImage || "/placeholder.svg"}
                        alt={album.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">{album.images.length} photos</p>
                      </div>
                    </div>

                    {/* Album Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#1ABC9C] font-medium">{album.date}</span>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <ImageIcon className="w-4 h-4" />
                          <span className="text-sm">{album.images.length}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{album.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{album.description}</p>

                      {/* Photo Grid Preview */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {album.images.slice(0, 3).map((image, imageIndex) => (
                          <button
                            key={imageIndex}
                            onClick={() => openLightbox(albumIndex, imageIndex)}
                            className="relative aspect-square overflow-hidden rounded-lg group/img"
                          >
                            <img
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-300"></div>
                          </button>
                        ))}
                      </div>

                      <Button
                        className="w-full bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C] hover:from-[#1ABC9C] hover:to-[#2ECC71] text-white transition-all duration-300"
                        onClick={() => openAlbumGrid(albumIndex)}
                      >
                        View Album
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coming Soon Message */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#2ECC71]/20">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <ImageIcon className="w-5 h-5 text-[#2ECC71]" />
                  <span className="font-medium">More project albums coming soon!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {viewingAlbumIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto" onClick={closeAlbumGrid}>
          <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="flex items-center justify-between mb-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <button
                  onClick={closeAlbumGrid}
                  className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Projects</span>
                </button>
                <button
                  onClick={closeAlbumGrid}
                  className="text-white hover:text-gray-300 transition-colors bg-black/30 rounded-full p-2 backdrop-blur-sm"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Album Info */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6 border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-2">{galleryAlbums[viewingAlbumIndex].title}</h2>
                <p className="text-gray-300 mb-2">{galleryAlbums[viewingAlbumIndex].description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{galleryAlbums[viewingAlbumIndex].date}</span>
                  <span>•</span>
                  <span>{galleryAlbums[viewingAlbumIndex].images.length} photos</span>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryAlbums[viewingAlbumIndex].images.map((image, imageIndex) => (
                  <button
                    key={imageIndex}
                    onClick={() => {
                      openLightbox(viewingAlbumIndex, imageIndex)
                      closeAlbumGrid()
                    }}
                    className="group/photo relative aspect-square overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white text-xs line-clamp-2">{image.alt}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/30 rounded-full p-2 backdrop-blur-sm"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Image Preview */}
          <div className="absolute left-4 flex items-center gap-4 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("prev")
              }}
              className="text-white hover:text-gray-300 transition-colors bg-black/30 rounded-full p-3 backdrop-blur-sm hover:bg-black/50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            {galleryAlbums[selectedImage.albumIndex].images[
              currentImageIndex > 0 ? currentImageIndex - 1 : galleryAlbums[selectedImage.albumIndex].images.length - 1
            ] && (
              <div
                className="hidden md:block w-24 h-24 rounded-lg overflow-hidden opacity-50 hover:opacity-75 transition-opacity cursor-pointer border-2 border-white/30"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage("prev")
                }}
              >
                <img
                  src={
                    galleryAlbums[selectedImage.albumIndex].images[
                      currentImageIndex > 0
                        ? currentImageIndex - 1
                        : galleryAlbums[selectedImage.albumIndex].images.length - 1
                    ].src || "/placeholder.svg"
                  }
                  alt="Previous"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Next Image Preview */}
          <div className="absolute right-4 flex items-center gap-4 z-10">
            {galleryAlbums[selectedImage.albumIndex].images[
              currentImageIndex < galleryAlbums[selectedImage.albumIndex].images.length - 1 ? currentImageIndex + 1 : 0
            ] && (
              <div
                className="hidden md:block w-24 h-24 rounded-lg overflow-hidden opacity-50 hover:opacity-75 transition-opacity cursor-pointer border-2 border-white/30"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage("next")
                }}
              >
                <img
                  src={
                    galleryAlbums[selectedImage.albumIndex].images[
                      currentImageIndex < galleryAlbums[selectedImage.albumIndex].images.length - 1
                        ? currentImageIndex + 1
                        : 0
                    ].src || "/placeholder.svg"
                  }
                  alt="Next"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("next")
              }}
              className="text-white hover:text-gray-300 transition-colors bg-black/30 rounded-full p-3 backdrop-blur-sm hover:bg-black/50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>
            <div className="mt-4 text-center bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white text-lg font-medium">{selectedImage.albumTitle}</p>
              <p className="text-gray-300 text-sm mt-1">{selectedImage.alt}</p>
              <p className="text-gray-400 text-xs mt-2">
                {currentImageIndex + 1} / {galleryAlbums[selectedImage.albumIndex].images.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Support Section */}
      <section
        id="support"
        className="py-20 bg-gradient-to-br from-[#2ECC71]/20 to-[#1ABC9C]/20 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 opacity-10">
            <Sunrise className="w-40 h-40 text-[#E67E22] animate-pulse" />
          </div>
          <div className="absolute bottom-20 left-20 opacity-10">
            <div
              className="w-32 h-40 bg-gradient-to-t from-[#1ABC9C] to-[#2ECC71] rounded-t-3xl animate-bounce"
              style={{ animationDuration: "4s" }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-[#2ECC71]/20">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2ECC71] to-[#1ABC9C] rounded-full flex items-center justify-center mr-3 animate-pulse">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800">Get Support Today</h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C] mx-auto"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">24/7 Support Available</h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#1ABC9C]" />
                      <span className="text-gray-700">Crisis Hotline: 1-800-662-4357</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-[#1ABC9C]" />
                      <span className="text-gray-700">Text Support: Text HOME to 741741</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-[#1ABC9C]" />
                      <span className="text-gray-700">Email: support@phcare.org</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-[#1ABC9C] hover:bg-[#E67E22] text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => window.open("https://findahelpline.com/countries/ph/topics/substance-use", "_blank")}
                  >
                    Talk to Someone Today
                  </Button>
                </div>
              </div>

              <div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h3>

                  <form className="space-y-4">
                    <Input placeholder="Your Name" className="border-gray-300 focus:border-[#1ABC9C] bg-white/80" />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="border-gray-300 focus:border-[#1ABC9C] bg-white/80"
                    />
                    <Textarea
                      placeholder="How can we help you?"
                      rows={4}
                      className="border-gray-300 focus:border-[#1ABC9C] bg-white/80"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-[#E67E22] hover:bg-[#1ABC9C] text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1ABC9C] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute top-8 right-8 w-12 h-12 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-4 left-1/3 w-8 h-8 border-2 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Sunrise className="w-5 h-5 text-[#1ABC9C]" />
                </div>
                <span className="text-xl font-bold">PH Care</span>
              </div>
              <p className="text-white/80">
                Empowering communities through hope, care, education, and support in the fight against drug abuse.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-white/80 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#dangers" className="text-white/80 hover:text-white transition-colors">
                    Dangers
                  </a>
                </li>
                <li>
                  <a href="#prevention" className="text-white/80 hover:text-white transition-colors">
                    Prevention
                  </a>
                </li>
                <li>
                  <a href="#song" className="text-white/80 hover:text-white transition-colors">
                    Our Song
                  </a>
                </li>
                <li>
                  <a href="#poster" className="text-white/80 hover:text-white transition-colors">
                    Our Poster
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-white/80 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#support" className="text-white/80 hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency Support</h4>
              <p className="text-white/80 mb-2">Crisis Hotline: 1-800-662-4357</p>
              <p className="text-white/80 mb-4">Available 24/7</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80">© 2026 PH Care. All rights reserved. Together we can make a difference.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
