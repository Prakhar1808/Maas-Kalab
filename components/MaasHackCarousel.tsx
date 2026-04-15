"use client";

import type { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const TWEEN_FACTOR_BASE = 0.42;

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

export type MaasHackSlide = {
  imgSrc: string;
  title: string;
  description: string;
  date: string;
  href: string;
};

type Props = {
  slides: MaasHackSlide[];
};

export function MaasHackCarousel({ slides }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((api: EmblaCarouselType) => {
    tweenNodes.current = api.slideNodes().map((node) => {
      return node.querySelector(".embla__slide__scale") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (api: EmblaCarouselType, evt?: EmblaEventType) => {
      const engine = api.internalEngine();
      const scrollProgress = api.scrollProgress();
      const inView = api.slidesInView();
      const isScroll = evt === "scroll";

      api.scrollSnapList().forEach((scrollSnap, snapIdx) => {
        let diff = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIdx];

        slidesInSnap.forEach((slideIdx) => {
          if (isScroll && !inView.includes(slideIdx)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((lp) => {
              const target = lp.target();
              if (slideIdx === lp.index && target !== 0) {
                const sign = Math.sign(target);
                if (sign === -1) diff = scrollSnap - (1 + scrollProgress);
                if (sign === 1) diff = scrollSnap + (1 - scrollProgress);
              }
            });
          }

          const tweenValue = 1 - Math.abs(diff * tweenFactor.current);
          const scale = clamp(tweenValue, 0, 1);
          const node = tweenNodes.current[slideIdx];
          if (node) node.style.transform = `scale(${scale})`;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale)
      .on("select", onSelect);

    return () => {
      emblaApi
        .off("reInit", setTweenNodes)
        .off("reInit", setTweenFactor)
        .off("reInit", tweenScale)
        .off("scroll", tweenScale)
        .off("slideFocus", tweenScale)
        .off("select", onSelect);
    };
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenScale]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-4 flex sm:-ml-6">
          {slides.map((slide) => (
            <div
              key={slide.href}
              className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 sm:basis-[60%] sm:pl-6"
            >
              <div className="embla__slide__scale">
                <Link
                  href={slide.href}
                  draggable={false}
                  className="group relative block overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--carousel-image-bg)]">
                    <img
                      src={slide.imgSrc}
                      alt={slide.title}
                      draggable={false}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                      <div className="min-w-0">
                        <p className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-white/60">
                          Flagship
                        </p>
                        <h3 className="mt-0.5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                          {slide.title}
                        </h3>
                        <p className="mt-1 text-xs text-white/70 sm:text-sm">
                          {slide.description}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-1.5">
                        <span className="rounded-full bg-white/15 px-3 py-0.5 text-[0.65rem] font-medium text-white/80 backdrop-blur-sm">
                          {slide.date}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 transition group-hover:gap-2 sm:text-sm">
                          View recap
                          <span aria-hidden>→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={scrollPrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--carousel-nav-border)] bg-[var(--carousel-nav-bg)] text-[var(--carousel-nav-text)] shadow-sm transition hover:border-[var(--carousel-nav-hover-border)] hover:bg-[var(--carousel-nav-hover-bg)]"
          aria-label="Previous"
        >
          <span className="text-lg leading-none">‹</span>
        </button>
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.href}
              type="button"
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === selected
                  ? "w-8 bg-[var(--red-primary)]"
                  : "w-2 bg-[var(--carousel-dot-inactive)] hover:bg-[var(--carousel-dot-inactive-hover)]"
              }`}
              aria-label={`Go to ${s.title}`}
              aria-current={i === selected}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={scrollNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--carousel-nav-border)] bg-[var(--carousel-nav-bg)] text-[var(--carousel-nav-text)] shadow-sm transition hover:border-[var(--carousel-nav-hover-border)] hover:bg-[var(--carousel-nav-hover-bg)]"
          aria-label="Next"
        >
          <span className="text-lg leading-none">›</span>
        </button>
      </div>
    </div>
  );
}
