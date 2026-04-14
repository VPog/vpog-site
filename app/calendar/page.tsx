"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react";

const PS2 = "'Press Start 2P', monospace";

type EventType = "meeting" | "meeting-cfa" | "social" | "fair";

type CalEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  description: string;
};

const TYPE_META: Record<EventType, { color: string; label: string; emoji: string }> = {
  "meeting":     { color: "var(--cyan)",       label: "Meeting",           emoji: "" },
  "meeting-cfa": { color: "var(--gold)",        label: "Meeting + CFA",  emoji: "" },
  "social":      { color: "#34d399",            label: "Social Event",      emoji: "" },
  "fair":        { color: "var(--gold-light)",  label: "Org Fair",          emoji: "" },
};

const EVENTS: CalEvent[] = [
  {
    id: "s26-apr13",
    title: "General Meeting + Chick-fil-A",
    date: "2026-04-13",
    time: "5:00 PM",
    location: "Featheringhill Hall",
    type: "meeting-cfa",
    description: "Weekly meeting with Chick-fil-A. Project check-ins and open dev time. This is a Chick-fil-A week!",
  },
  {
    id: "s26-apr20",
    title: "End-of-Semester Social",
    date: "2026-04-20",
    time: "5:00 PM",
    location: "Featheringhill Hall",
    type: "social",
    description: "Last meeting of Spring 2026 — end-of-semester social. Celebrate the year, show off what you've been working on. We won't meet again until late August / early September.",
  },
  {
    id: "f26-org-fair",
    title: "Vanderbilt Org Fair",
    date: "2026-08-28",
    time: "TBD",
    location: "Vanderbilt Campus",
    type: "fair",
    description: "Find V:POG at Vanderbilt's fall org fair! Come meet the team and learn how to get involved for the new year.",
  },
  {
    id: "f26-week1",
    title: "First Fall Meeting",
    date: "2026-09-07",
    time: "5:00 PM",
    location: "Featheringhill Hall",
    type: "meeting",
    description: "First weekly meeting of Fall 2026. New members especially welcome — come introduce yourself!",
  },
  {
    id: "f26-week2-cfa",
    title: "General Meeting + Chick-fil-A",
    date: "2026-09-014",
    time: "5:00 PM",
    location: "Featheringhill Hall",
    type: "meeting-cfa",
    description: "Second meeting of Fall 2026 — Chick-fil-A week!",
  },
  {
    id: "f26-week3",
    title: "General Meeting",
    date: "2026-09-21",
    time: "5:00 PM",
    location: "Featheringhill Hall",
    type: "meeting",
    description: "Weekly Monday meeting.",
  },
  {
    id: "f26-week4-cfa",
    title: "General Meeting + Chick-fil-A",
    date: "2026-09-28",
    time: "5:00 PM",
    location: "Featheringhill Hall",
    type: "meeting-cfa",
    description: "Weekly meeting — Chick-fil-A week!",
  },
];

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAY_NAMES   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function getDaysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate(); }
function getFirstDay(y: number, m: number)    { return new Date(y, m, 1).getDay(); }

export default function CalendarPage() {
  const today = new Date();
  const [year,  setYear]  = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [sel,   setSel]   = useState<string | null>(null);

  const prev = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const next = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  const days     = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);

  const eventsOnDay = (day: number) => {
    const key = `${year}-${String(month + 1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    return EVENTS.filter(e => e.date === key);
  };

  const selEvent = EVENTS.find(e => e.id === sel);

  const upcoming = EVENTS
    .filter(e => new Date(e.date + "T12:00") >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 6);

  const typeMeta = TYPE_META;

  return (
    <>
      <section style={{ paddingTop: "100px", paddingBottom: "48px", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">Schedule</span>
          <h1 style={{ fontFamily: PS2, fontSize: "clamp(1rem, 2.8vw, 2rem)", lineHeight: 1.5, color: "var(--text)" }}>Calendar</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "14px", maxWidth: "540px", lineHeight: 1.85 }}>
            We meet <strong style={{ color: "var(--text)" }}>Mondays at 5 PM</strong> in Featheringhill Hall.{" "}
            <span style={{ color: "var(--gold)" }}>Chick-fil-A</span> every other Monday.
            No meetings over breaks.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 0 96px", background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "28px", alignItems: "start" }} className="cal-layout">

            {/* Calendar grid */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", overflow: "hidden" }}>
              {/* Month nav */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid var(--border)" }}>
                <button onClick={prev} style={{ background: "none", border: "1px solid var(--border)", borderRadius: "3px", color: "var(--text-muted)", cursor: "pointer", padding: "6px 10px", lineHeight: 1, transition: "all 0.15s" }}
                  className="hover:border-[var(--gold)] hover:text-[var(--gold)]">
                  <ChevronLeft size={15} />
                </button>
                <h2 style={{ fontFamily: PS2, fontSize: "0.75rem", color: "var(--text)", letterSpacing: "0.04em", lineHeight: 1 }}>
                  {MONTH_NAMES[month]} {year}
                </h2>
                <button onClick={next} style={{ background: "none", border: "1px solid var(--border)", borderRadius: "3px", color: "var(--text-muted)", cursor: "pointer", padding: "6px 10px", lineHeight: 1, transition: "all 0.15s" }}
                  className="hover:border-[var(--gold)] hover:text-[var(--gold)]">
                  <ChevronRight size={15} />
                </button>
              </div>

              {/* Day headers */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", background: "var(--bg-3)", borderBottom: "1px solid var(--border)" }}>
                {DAY_NAMES.map(d => (
                  <div key={d} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", textAlign: "center", padding: "10px 0" }}>{d}</div>
                ))}
              </div>

              {/* Day cells */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`pad-${i}`} style={{ borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", minHeight: "80px", background: "var(--bg-2)", opacity: 0.3 }} />
                ))}
                {Array.from({ length: days }, (_, i) => i + 1).map(day => {
                  const dayEvts = eventsOnDay(day);
                  const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
                  return (
                    <div key={day} style={{ borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", minHeight: "80px", padding: "7px", background: isToday ? "rgba(201,168,76,0.04)" : "transparent" }}>
                      <div style={{
                        fontFamily: "'Space Mono', monospace", fontSize: "0.65rem",
                        color: isToday ? "var(--gold)" : "var(--text-dim)",
                        fontWeight: isToday ? 700 : 400,
                        width: "22px", height: "22px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        borderRadius: "50%",
                        background: isToday ? "var(--gold-dim)" : "transparent",
                        marginBottom: "4px",
                      }}>{day}</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        {dayEvts.map(ev => {
                          const meta = typeMeta[ev.type];
                          return (
                            <button key={ev.id} onClick={() => setSel(ev.id === sel ? null : ev.id)}
                              style={{
                                background: ev.id === sel ? meta.color : `${meta.color}22`,
                                borderLeft: `2px solid ${meta.color}`,
                                border: "none",
                                borderRadius: "2px",
                                padding: "2px 4px",
                                cursor: "pointer",
                                textAlign: "left",
                                width: "100%",
                                transition: "all 0.15s",
                              }}>
                              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.52rem", color: ev.id === sel ? "white" : meta.color, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block" }}>
                                {meta.emoji} {ev.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Legend */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", padding: "18px" }}>
                <span className="eyebrow" style={{ fontSize: "0.58rem" }}>Legend</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {(Object.keys(typeMeta) as EventType[]).map(type => (
                    <div key={type} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "10px", height: "10px", borderRadius: "2px", background: typeMeta[type].color, flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
                        {typeMeta[type].label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected event */}
              {selEvent && (
                <div className="cal-event-detail" style={{ background: "var(--surface)", border: `1px solid ${typeMeta[selEvent.type].color}44`, borderTop: `2px solid ${typeMeta[selEvent.type].color}`, borderRadius: "4px", padding: "18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: typeMeta[selEvent.type].color, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      {typeMeta[selEvent.type].label}
                    </span>
                    <button onClick={() => setSel(null)} style={{ background: "none", border: "none", color: "var(--text-dim)", cursor: "pointer", fontSize: "1.1rem", lineHeight: 1, padding: "0 2px" }}>×</button>
                  </div>
                  <h3 style={{ fontFamily: PS2, fontSize: "0.6rem", color: "var(--text)", marginBottom: "12px", lineHeight: 1.7 }}>
                    {selEvent.title}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "7px", color: "var(--text-muted)", fontSize: "0.78rem" }}>
                      <Clock size={11} style={{ flexShrink: 0, marginTop: "3px" }} />
                      <span>{new Date(selEvent.date + "T12:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} · {selEvent.time}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "7px", color: "var(--text-muted)", fontSize: "0.78rem" }}>
                      <MapPin size={11} style={{ flexShrink: 0, marginTop: "3px" }} />
                      <span>{selEvent.location}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{selEvent.description}</p>
                </div>
              )}

              {/* Upcoming */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", padding: "18px" }}>
                <span className="eyebrow" style={{ fontSize: "0.58rem" }}>Upcoming</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {upcoming.length === 0 && (
                    <p style={{ fontSize: "0.75rem", color: "var(--text-dim)", fontFamily: "'Space Mono', monospace" }}>Check Discord for updates.</p>
                  )}
                  {upcoming.map(ev => (
                    <button key={ev.id}
                      onClick={() => { setSel(ev.id); setYear(Number(ev.date.split("-")[0])); setMonth(Number(ev.date.split("-")[1]) - 1); }}
                      style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: "9px 8px", borderRadius: "3px", borderLeft: `2px solid ${typeMeta[ev.type].color}`, transition: "background 0.15s" }}
                      className="hover:bg-[var(--surface-2)]">
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: typeMeta[ev.type].color, letterSpacing: "0.04em", marginBottom: "3px" }}>
                        {typeMeta[ev.type].emoji} {new Date(ev.date + "T12:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })} · {ev.time}
                      </div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.82rem", color: "var(--text)", lineHeight: 1.4 }}>
                        {ev.title}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .cal-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
