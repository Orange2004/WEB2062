const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(`1 sự kiện xảy ra, trung bình mỗi ${90 / gameEvents.size} phút`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `Thực tế thì 1 sự kiện xảy ra, trung bình mỗi ${time / gameEvents.size} phút`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "một" : "hai";
  console.log(`[Hiệp ${half}] ${min}: ${event}`);
}
