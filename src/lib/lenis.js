import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.4,
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export default lenis;