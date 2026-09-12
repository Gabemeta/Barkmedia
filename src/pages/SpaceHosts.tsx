import { ArrowLeft, Mic, Crown, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bmaLogo from "@/assets/bma-logo.png";
import tenguImg from "@/assets/tengu.jpg";
import barkImg from "@/assets/bark.jpg";
import shiboImg from "@/assets/shibo.jpg";
import poeImg from "@/assets/poe.jpg";

import gymImg from "@/assets/gym.jpg";
import targetImg from "@/assets/target.jpg";

import jjImg from "@/assets/jj.jpg";

import parisImg from "@/assets/paris.jpg";
import doskyImg from "@/assets/dosky.jpg";

import gruveImg from "@/assets/gruve.jpg";
import oliveImg from "@/assets/olive.jpg";
import kimImg from "@/assets/kim.jpg";
import miaImg from "@/assets/mia.jpg";
import moonxImg from "@/assets/moonx.jpg";
import mrmasImg from "@/assets/mrmas.jpg";

interface SpaceHost {
  name: string;
  twitter: string;
  spaceTitle: string;
  time: string;
  timeEST: string;
  isLeader?: boolean;
  image?: string;
  cardColor?: string;
}

// Helper to parse time string to minutes since midnight
const parseTimeToMinutes = (timeStr: string): number => {
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return -1;
  let hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);
  const period = match[3].toUpperCase();
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
};

// Parse end time from a time range string like "6:00 PM - 8:00 PM WAT"
const parseEndTime = (timeStr: string): number => {
  const rangeMatch = timeStr.match(/-\s*(\d+):(\d+)\s*(AM|PM)/i);
  if (!rangeMatch) return -1;
  let hours = parseInt(rangeMatch[1]);
  const minutes = parseInt(rangeMatch[2]);
  const period = rangeMatch[3].toUpperCase();
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
};

// Check if a space is currently live
const isSpaceLive = (timeStr: string, isLeader?: boolean): boolean => {
  const now = new Date();
  // Convert to WAT (West Africa Time is UTC+1)
  const watOffset = 1;
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const currentWATMinutes = ((utcHours + watOffset) % 24) * 60 + utcMinutes;

  const startMinutes = parseTimeToMinutes(timeStr);
  if (startMinutes === -1) return false;

  // Check if there's an end time in the string (e.g., "6:00 PM - 8:00 PM WAT")
  const endMinutes = parseEndTime(timeStr);

  if (endMinutes !== -1) {
    // Use actual end time from the time range
    // Handle overnight spaces (e.g., 11 PM - 1 AM)
    if (endMinutes < startMinutes) {
      return currentWATMinutes >= startMinutes || currentWATMinutes < endMinutes;
    }
    return currentWATMinutes >= startMinutes && currentWATMinutes < endMinutes;
  }

  // Fallback: Leaders have 2-hour spaces, others have 1-hour spaces
  const duration = isLeader ? 120 : 60;
  const diff = currentWATMinutes - startMinutes;
  return diff >= 0 && diff < duration;
};

// Get theme colors based on host name
const getHostColors = (name: string) => {
  switch (name) {
    case "Tengu":
      return { primary: "168, 85, 247", secondary: "234, 179, 8", name: "purple" }; // purple/yellow
    case "Bark":
      return { primary: "6, 182, 212", secondary: "59, 130, 246", name: "cyan" }; // cyan/blue
    case "Shibo":
      return { primary: "234, 179, 8", secondary: "249, 115, 22", name: "yellow" }; // yellow/orange
    default:
      return { primary: "34, 197, 94", secondary: "239, 68, 68", name: "green" }; // green/red default
  }
};

const SpaceHosts = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update current time every minute to check for live spaces
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Community Leaders - order: Tengu, Bark, Shibo
  const leaders: SpaceHost[] = [
    {
      name: "Tengu",
      twitter: "TenguXL",
      spaceTitle: "WEB3 WITH NOBODY",
      time: "10:00 AM - 12:00 PM WAT",
      timeEST: "4:00 AM - 6:00 AM EST",
      isLeader: true,
      image: tenguImg,
      cardColor: "from-purple-500/20 via-yellow-500/10 to-purple-500/20 border-purple-500/50",
    },
    {
      name: "Bark",
      twitter: "barkmeta",
      spaceTitle: "STATE OF CRYPTO",
      time: "11:00 PM - 1:00 AM WAT",
      timeEST: "5:00 PM - 7:00 PM EST",
      isLeader: true,
      image: barkImg,
      cardColor: "from-cyan-500/20 via-gray-800/10 to-cyan-500/20 border-cyan-500/50",
    },
    {
      name: "Shibo",
      twitter: "Godsburnt",
      spaceTitle: "CRYPTO SHOW",
      time: "4:00 PM - 6:00 PM WAT",
      timeEST: "10:00 AM - 12:00 PM EST",
      isLeader: true,
      image: shiboImg,
      cardColor: "from-yellow-500/20 via-gray-800/10 to-yellow-500/20 border-yellow-500/50",
    },
  ];

  // All hosts sorted by time (earliest to latest)
  const allHosts: SpaceHost[] = [
    {
      name: "Poe",
      twitter: "Poemetax",
      spaceTitle: "CHILLING WITH UNIQUE POE",
      time: "8:00 AM WAT",
      timeEST: "2:00 AM EST",
      image: poeImg,
    },
    {
      name: "Tengu",
      twitter: "TenguXL",
      spaceTitle: "WEB3 WITH NOBODY",
      time: "10:00 AM WAT",
      timeEST: "4:00 AM - 6:00 AM EST",
      isLeader: true,
      image: tenguImg,
    },
    {
      name: "Gym",
      twitter: "gym_onchain",
      spaceTitle: "MONETISATION HQ",
      time: "1:00 PM WAT",
      timeEST: "7:00 AM EST",
      image: gymImg,
    },
    {
      name: "Target",
      twitter: "Targetmeta",
      spaceTitle: "MINDSET LOUNGE",
      time: "2:00 PM WAT",
      timeEST: "8:00 AM EST",
      image: targetImg,
    },
    {
      name: "Shibo",
      twitter: "Godsburnt",
      spaceTitle: "CRYPTO SHOW",
      time: "4:00 PM WAT",
      timeEST: "10:00 AM - 12:00 PM EST",
      isLeader: true,
      image: shiboImg,
    },
    {
      name: "JJ",
      twitter: "JJXMeta",
      spaceTitle: "WEB3 BOOTCAMP",
      time: "6:00 PM - 8:00 PM WAT",
      timeEST: "12:00 PM - 2:00 PM EST",
      image: jjImg,
    },
    {
      name: "Paris",
      twitter: "ParisMetaX",
      spaceTitle: "CRYPTO CAFE",
      time: "8:00 PM WAT",
      timeEST: "2:00 PM EST",
      image: parisImg,
    },
    {
      name: "Dosky",
      twitter: "DoskyMetaXX",
      spaceTitle: "BMA TALK SHOW",
      time: "9:00 PM WAT",
      timeEST: "3:00 PM EST",
      image: doskyImg,
    },
    {
      name: "Gruve",
      twitter: "gruvemeta",
      spaceTitle: "GRUVES CRYPTO COPILOTS",
      time: "10:00 PM WAT",
      timeEST: "4:00 PM EST",
      image: gruveImg,
    },
    {
      name: "Olive",
      twitter: "olivemetaX",
      spaceTitle: "OLIVE HOUR",
      time: "10:00 PM WAT",
      timeEST: "4:00 PM EST",
      image: oliveImg,
    },
    {
      name: "Bark",
      twitter: "barkmeta",
      spaceTitle: "STATE OF CRYPTO",
      time: "11:00 PM WAT",
      timeEST: "5:00 PM - 7:00 PM EST",
      isLeader: true,
      image: barkImg,
    },
    {
      name: "Kim",
      twitter: "kim_metaXL",
      spaceTitle: "LATE NIGHT TALK WITH KIM",
      time: "1:00 AM WAT",
      timeEST: "7:00 PM EST",
      image: kimImg,
    },
    {
      name: "MLA",
      twitter: "MIABB",
      spaceTitle: "NIGHT HANGOUT",
      time: "1:00 AM WAT",
      timeEST: "7:00 PM EST",
      image: miaImg,
    },
    {
      name: "MoonX",
      twitter: "MoonwizardX",
      spaceTitle: "THE STONERS CLUB",
      time: "3:00 AM WAT",
      timeEST: "9:00 PM EST",
      image: moonxImg,
    },
    {
      name: "MrMas",
      twitter: "Mr_Mas01",
      spaceTitle: "LEARN WITH MR MAS",
      time: "6:00 AM - 8:00 AM WAT",
      timeEST: "12:00 AM - 2:00 AM EST",
      image: mrmasImg,
    },
  ];

  const handleTwitterClick = (twitterHandle: string) => {
    window.open(`https://x.com/${twitterHandle}`, "_blank");
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      {/* Parallax Background Layers */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute top-0 left-0 w-full h-[200vh] opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--secondary)) 0%, transparent 50%)",
            transform: `translateY(${-scrollY * 0.3}px)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        />
      </div>

      {/* Header */}
      <header
        className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50"
        style={{
          boxShadow: scrollY > 50 ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="hover:bg-muted">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <img src={bmaLogo} alt="BMA Logo" className="w-10 h-10 object-cover rounded-lg" />
          <h1 className="text-2xl font-heading font-bold text-primary">BMA SPACE HOSTS</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <section className="mb-16 text-center relative" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <h2
            className="text-5xl md:text-6xl font-heading font-bold mb-4 gradient-text"
            style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
          >
            Community Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the voices driving the BMA community forward
          </p>
        </section>

        {/* Leaders Section - Emphasized */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leaders.map((host, index) => {
              const gradientColors =
                index === 0
                  ? { from: "rgb(168, 85, 247)", to: "rgb(234, 179, 8)", shadow: "rgba(168, 85, 247, 0.5)" } // Tengu - purple/yellow
                  : index === 1
                    ? { from: "rgb(6, 182, 212)", to: "rgb(59, 130, 246)", shadow: "rgba(6, 182, 212, 0.5)" } // Bark - cyan/blue
                    : { from: "rgb(234, 179, 8)", to: "rgb(249, 115, 22)", shadow: "rgba(234, 179, 8, 0.5)" }; // Shibo - yellow/orange

              return (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => handleTwitterClick(host.twitter)}
                >
                  {/* Animated border wrapper */}
                  <div
                    className="absolute -inset-[2px] rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(var(--border-angle), ${gradientColors.from}, ${gradientColors.to}, ${gradientColors.from})`,
                      animation: "border-rotate 3s linear infinite",
                    }}
                  />
                  {/* Secondary glow layer */}
                  <div
                    className="absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(var(--border-angle), ${gradientColors.from}, ${gradientColors.to}, ${gradientColors.from})`,
                      animation: "border-rotate 3s linear infinite",
                    }}
                  />
                  <Card
                    className="relative overflow-hidden bg-card rounded-xl"
                    style={{
                      transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 5}px)`,
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <div className="absolute top-3 right-3 z-10">
                      <Crown className="w-8 h-8 text-yellow-500 animate-pulse" />
                    </div>
                    <CardContent className="p-8 relative z-10">
                      <div className="text-center">
                        <div
                          className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 group-hover:scale-110 transition-all duration-500"
                          style={{
                            borderColor: gradientColors.from,
                            boxShadow: `0 0 20px ${gradientColors.shadow}`,
                          }}
                        >
                          {host.image ? (
                            <img src={host.image} alt={host.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-4xl font-heading font-bold text-primary">{host.name.charAt(0)}</span>
                          )}
                        </div>
                        <h3 className="text-3xl font-heading font-bold text-foreground mb-2">{host.name}</h3>
                        <h4 className="text-xl font-semibold text-primary mb-3">{host.spaceTitle}</h4>
                        <p className="text-lg font-medium text-foreground mb-1">{host.time}</p>
                        <p className="text-sm text-muted-foreground mb-3">{host.timeEST}</p>
                        <div className="flex items-center justify-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                          <span>@{host.twitter}</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="relative h-24 mb-12" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Mic className="w-8 h-8 text-primary bg-background p-1 rounded-full" />
          </div>
        </div>

        {/* All Hosts Schedule Section */}
        <section className="mb-16">
          <h2
            className="text-3xl font-heading font-bold text-center mb-8 text-foreground"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            Daily Space Schedule
          </h2>

          {/* Live Now Section - Always appears first when there are live spaces */}
          {allHosts.some((host) => isSpaceLive(host.time, host.isLeader)) && (
            <div className="mb-12 animate-fade-in">
              {/* Live Now Header - Centered */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="relative">
                  <Mic className="w-8 h-8 text-green-500 animate-pulse" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-green-500 animate-pulse">LIVE NOW</h3>
              </div>

              {/* Live Spaces Grid - Always centered with consistent card sizes */}
              <div className="flex justify-center">
                <div
                  className="grid gap-6"
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(allHosts.filter((h) => isSpaceLive(h.time, h.isLeader)).length, 3)}, minmax(280px, 320px))`,
                    justifyContent: "center",
                  }}
                >
                  {allHosts
                    .filter((host) => isSpaceLive(host.time, host.isLeader))
                    .map((host, index) => {
                      const colors = getHostColors(host.name);
                      return (
                        <Card
                          key={`live-${index}`}
                          className="cursor-pointer group relative overflow-hidden border-2 hover:scale-105 transition-all duration-300"
                          onClick={() => handleTwitterClick(host.twitter)}
                          style={{
                            borderColor: `rgba(${colors.primary}, 0.7)`,
                            background: `linear-gradient(135deg, rgba(${colors.primary}, 0.2), hsl(var(--card)), rgba(${colors.secondary}, 0.1))`,
                            boxShadow: `0 0 30px rgba(${colors.primary}, 0.4), 0 0 60px rgba(${colors.secondary}, 0.2)`,
                            animation: "live-glow 2s ease-in-out infinite alternate",
                          }}
                        >
                          {/* Animated border effect */}
                          <div
                            className="absolute inset-0 opacity-50"
                            style={{
                              background: `linear-gradient(45deg, transparent, rgba(${colors.primary}, 0.3), transparent)`,
                              animation: "shimmer 2s infinite",
                            }}
                          />

                          {/* Live indicator badge */}
                          <div
                            className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2 py-1 rounded-full"
                            style={{ backgroundColor: `rgb(${colors.primary})` }}
                          >
                            <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                            <span className="text-xs font-bold text-white">LIVE</span>
                          </div>

                          {/* Blinking microphone */}
                          <div className="absolute top-3 left-3 z-20">
                            <div className="relative">
                              <Mic
                                className="w-6 h-6"
                                style={{
                                  animation: "mic-blink 1s infinite",
                                  color: `rgb(${colors.primary})`,
                                }}
                              />
                            </div>
                          </div>

                          <CardContent className="p-6 relative z-10">
                            <div className="text-center">
                              {host.isLeader && (
                                <Crown className="w-6 h-6 text-yellow-500 mx-auto mb-2 animate-bounce" />
                              )}
                              <div
                                className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-3 group-hover:scale-110 transition-transform duration-300"
                                style={{
                                  borderColor: `rgb(${colors.primary})`,
                                  boxShadow: `0 0 20px rgba(${colors.primary}, 0.5)`,
                                }}
                              >
                                {host.image ? (
                                  <img src={host.image} alt={host.name} className="w-full h-full object-cover" />
                                ) : (
                                  <span className="text-2xl font-heading font-bold text-primary flex items-center justify-center h-full bg-muted">
                                    {host.name.charAt(0)}
                                  </span>
                                )}
                                {/* Pulsing ring around image */}
                                <div
                                  className="absolute inset-0 rounded-full border-2"
                                  style={{
                                    borderColor: `rgb(${colors.primary})`,
                                    animation: "pulse-ring 1.5s infinite",
                                  }}
                                />
                              </div>
                              <h3 className="text-xl font-heading font-bold text-foreground mb-1">{host.name}</h3>
                              <h4 className="text-base font-semibold mb-2" style={{ color: `rgb(${colors.primary})` }}>
                                {host.spaceTitle}
                              </h4>
                              <p className="text-sm font-medium text-foreground">{host.time}</p>
                              <p className="text-xs text-muted-foreground mb-2">{host.timeEST}</p>
                              <div
                                className="flex items-center justify-center gap-1 text-xs transition-colors"
                                style={{ color: `rgb(${colors.primary})` }}
                              >
                                <span>@{host.twitter}</span>
                                <ExternalLink className="w-3 h-3" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                </div>
              </div>

              {/* Separator */}
              <div className="mt-12 mb-8 flex items-center justify-center">
                <div className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-center mb-6 text-muted-foreground">
                Upcoming Spaces
              </h3>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allHosts
              .filter((host) => !isSpaceLive(host.time, host.isLeader))
              .map((host, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer group transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                    host.isLeader
                      ? "border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 hover:shadow-[0_0_30px_rgba(var(--primary),0.3)]"
                      : "bg-card border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                  }`}
                  onClick={() => handleTwitterClick(host.twitter)}
                  style={{
                    transform: `translateY(${Math.sin(scrollY * 0.005 + index * 0.5) * 3}px)`,
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <CardContent className="p-5">
                    <div className="text-center">
                      {host.isLeader && (
                        <Crown className="w-5 h-5 text-yellow-500 mx-auto mb-2 group-hover:animate-bounce" />
                      )}
                      <div
                        className={`relative w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                          host.isLeader
                            ? "border-2 border-primary/50 bg-gradient-to-br from-primary/30 to-secondary/30"
                            : "border border-border bg-muted"
                        }`}
                      >
                        {host.image ? (
                          <img src={host.image} alt={host.name} className="w-full h-full object-cover" />
                        ) : (
                          <span
                            className={`text-xl font-heading font-bold ${host.isLeader ? "text-primary" : "text-foreground"}`}
                          >
                            {host.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {host.name}
                      </h3>
                      <h4
                        className={`text-sm font-semibold mb-2 ${host.isLeader ? "text-primary" : "text-primary/80"}`}
                      >
                        {host.spaceTitle}
                      </h4>
                      <p className="text-sm font-medium text-foreground">{host.time}</p>
                      <p className="text-xs text-muted-foreground mb-2">{host.timeEST}</p>
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        <span>@{host.twitter}</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center relative z-0">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-primary/20">
            <h2 className="text-3xl font-heading font-bold mb-6 gradient-text">Join Our Spaces</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our amazing space hosts and be part of the conversations that matter in Web3 and crypto.
            </p>
            <Button onClick={() => navigate("/")} className="text-lg px-8 py-3">
              Back to Home
            </Button>
          </div>
        </section>
      </main>

      {/* Footer Gradient */}
      <div className="h-32 bg-gradient-to-t from-primary/5 to-transparent" />
    </div>
  );
};

export default SpaceHosts;
