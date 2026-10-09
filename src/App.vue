<!--
# TASKS

- [x] ヒーローヘッダーにカルーセルを追加
- [x] 中間に3セクションを追加し、パララックス効果を適用する
- [x] フッターにコピーライト madakaheri を追加
-->

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const slides = [
  {
    eyebrow: 'A JOURNEY THROUGH JAPAN',
    title: '静けさの、\nその先へ。',
    description: 'いつもの景色を離れて、心がほどける場所へ。',
    image:
      'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2400&q=85',
    alt: '朝霧に包まれた山並みと草原',
  },
  {
    eyebrow: 'FIND YOUR OWN RHYTHM',
    title: '風の音に、\n耳を澄ます。',
    description: '何もしない時間が、旅を少し豊かにしてくれる。',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=85',
    alt: '広い空と山に囲まれた草原',
  },
  {
    eyebrow: 'COLLECT SMALL MOMENTS',
    title: 'まだ知らない\n私に出会う。',
    description: '小さな発見を重ねて、自分だけの物語をつくろう。',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=85',
    alt: '湖畔に広がる山と森の風景',
  },
]

const stories = [
  {
    number: '01',
    title: '朝の光を\n探しに行く。',
    description: '少し早起きした朝だけに出会える、山あいのやわらかな光。深呼吸をひとつして、一日を始めよう。',
    image:
      'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2000&q=85',
    alt: '朝日が差し込む山あいの草原',
    position: 'center 48%',
  },
  {
    number: '02',
    title: '水辺で過ごす\n何もしない時間。',
    description: '水面を渡る風と、ゆっくり流れる雲。予定を決めない一日が、心にちょうどいい余白をつくる。',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=85',
    alt: '山々を映す静かな湖',
    position: 'center 52%',
  },
  {
    number: '03',
    title: '帰り道にも\n旅の続きを。',
    description: '旅先で見つけた色や匂いを連れて帰ろう。何気ない日常の中にも、新しい景色が見つかるはず。',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=85',
    alt: '山の向こうまで続く広い草原',
    position: 'center 58%',
  },
]

const activeSlide = ref(0)
let carouselTimer

function showSlide(index) {
  activeSlide.value = (index + slides.length) % slides.length
}

onMounted(() => {
  carouselTimer = window.setInterval(() => {
    showSlide(activeSlide.value + 1)
  }, 6000)
})

onUnmounted(() => {
  window.clearInterval(carouselTimer)
})
</script>

<template>
  <v-app>
    <v-main>
      <header class="site-header">
        <a class="wordmark" href="#" aria-label="madakaheri ホーム">madakaheri<span>.</span></a>
        <a class="header-link" href="#stories">旅のかけら <span aria-hidden="true">↗</span></a>
      </header>

      <section class="hero" aria-label="旅の風景">
        <div
          v-for="(slide, index) in slides"
          :key="slide.title"
          class="hero-slide"
          :class="{ 'is-active': activeSlide === index }"
          :style="{ backgroundImage: `url('${slide.image}')` }"
          role="img"
          :aria-label="slide.alt"
          :aria-hidden="activeSlide !== index"
        ></div>
        <div class="hero-shade"></div>

        <div class="hero-content">
          <p class="eyebrow">{{ slides[activeSlide].eyebrow }}</p>
          <h1>{{ slides[activeSlide].title }}</h1>
          <p class="hero-description">{{ slides[activeSlide].description }}</p>
          <a class="hero-cta" href="#stories">旅のかけらを読む <span aria-hidden="true">↓</span></a>
        </div>

        <div class="carousel-controls" aria-label="カルーセル操作">
          <button
            class="carousel-arrow"
            type="button"
            aria-label="前のスライド"
            @click="showSlide(activeSlide - 1)"
          >
            ←
          </button>
          <div class="carousel-dots" role="group" aria-label="スライドを選択">
            <button
              v-for="(slide, index) in slides"
              :key="slide.eyebrow"
              class="carousel-dot"
              :class="{ 'is-active': activeSlide === index }"
              type="button"
              :aria-label="`${index + 1}枚目のスライド`"
              :aria-pressed="activeSlide === index"
              @click="showSlide(index)"
            ></button>
          </div>
          <button
            class="carousel-arrow"
            type="button"
            aria-label="次のスライド"
            @click="showSlide(activeSlide + 1)"
          >
            →
          </button>
          <span class="slide-count">{{ String(activeSlide + 1).padStart(2, '0') }} / 03</span>
        </div>
        <span class="hero-caption">SLOW TRAVEL, DEEPER DAYS</span>
      </section>

      <section class="intro" aria-labelledby="intro-title">
        <p class="eyebrow">A NOTE TO YOURSELF</p>
        <h2 id="intro-title">急がない旅には、<br />見つかる景色がある。</h2>
        <p>
          行き先を決めることより、心の向くままに歩くこと。<br class="desktop-break" />
          いつもより少しゆっくり過ごす、旅の記録をお届けします。
        </p>
        <span class="intro-mark" aria-hidden="true">✳</span>
      </section>

      <section id="stories" class="stories" aria-label="旅のかけら">
        <article v-for="story in stories" :key="story.number" class="story">
          <div
            class="story-image"
            role="img"
            :aria-label="story.alt"
            :style="{ backgroundImage: `url('${story.image}')`, backgroundPosition: story.position }"
          ></div>
          <div class="story-overlay"></div>
          <div class="story-content">
            <span class="story-number">{{ story.number }} <span>— JOURNAL</span></span>
            <h2>{{ story.title }}</h2>
            <p>{{ story.description }}</p>
          </div>
        </article>
      </section>

      <section class="closing-note">
        <p class="eyebrow">TAKE YOUR TIME</p>
        <h2>次の休日は、<br />少し遠回りしてみよう。</h2>
        <a href="#" class="back-to-top">ページの上へ <span aria-hidden="true">↑</span></a>
      </section>

      <footer class="site-footer">
        <a class="wordmark footer-wordmark" href="#" aria-label="madakaheri ホーム">madakaheri<span>.</span></a>
        <p>© {{ new Date().getFullYear() }} madakaheri</p>
        <span class="footer-note">SLOW TRAVEL, DEEPER DAYS</span>
      </footer>
    </v-main>
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;600&display=swap');

:root {
  font-family: 'DM Sans', 'Noto Sans JP', sans-serif;
  color: #25372f;
  background: #f6f5f0;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

button,
a {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

.site-header {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 32px 7.2%;
  color: #fff;
}

.wordmark {
  font-size: 23px;
  font-weight: 600;
  letter-spacing: -1.2px;
}

.wordmark span {
  color: #d7b984;
}

.header-link {
  display: flex;
  align-items: center;
  gap: 13px;
  font-size: 12px;
  letter-spacing: 0.12em;
}

.header-link span {
  font-size: 17px;
}

.hero {
  position: relative;
  display: flex;
  min-height: min(780px, 100svh);
  align-items: center;
  overflow: hidden;
  color: #fff;
  background: #455448;
}

.hero-slide,
.hero-shade {
  position: absolute;
  inset: 0;
}

.hero-slide {
  background-position: center 54%;
  background-size: cover;
  opacity: 0;
  transform: scale(1.04);
  transition:
    opacity 1s ease,
    transform 7s ease;
}

.hero-slide.is-active {
  opacity: 1;
  transform: scale(1);
}

.hero-shade {
  background: linear-gradient(90deg, rgb(18 32 27 / 57%) 0%, rgb(18 32 27 / 22%) 59%, rgb(18 32 27 / 5%) 100%),
    linear-gradient(0deg, rgb(18 32 27 / 28%) 0%, transparent 34%);
}

.hero-content {
  position: relative;
  width: min(780px, 100%);
  margin: 34px 0 0 13.4%;
  animation: arrive 0.8s ease both;
}

.eyebrow {
  margin: 0 0 22px;
  color: #cbb78e;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.24em;
}

.hero-content h1 {
  margin: 0;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: clamp(46px, 6.7vw, 86px);
  font-weight: 300;
  letter-spacing: 0.08em;
  line-height: 1.48;
  white-space: pre-line;
}

.hero-description {
  margin: 18px 0 35px;
  color: rgb(255 255 255 / 83%);
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.08em;
}

.hero-cta {
  display: inline-flex;
  min-width: 210px;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid rgb(255 255 255 / 62%);
  font-size: 11px;
  letter-spacing: 0.1em;
}

.hero-cta span {
  font-size: 16px;
}

.carousel-controls {
  position: absolute;
  right: 7.2%;
  bottom: 48px;
  display: flex;
  align-items: center;
  gap: 17px;
}

.carousel-arrow,
.carousel-dot {
  display: grid;
  padding: 0;
  place-items: center;
  border: 0;
  color: inherit;
  background: transparent;
  cursor: pointer;
}

.carousel-arrow {
  width: 30px;
  height: 30px;
  font-size: 18px;
}

.carousel-dots {
  display: flex;
  gap: 8px;
}

.carousel-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgb(255 255 255 / 46%);
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.carousel-dot.is-active {
  transform: scale(1.4);
  background: #fff;
}

.carousel-arrow:focus-visible,
.carousel-dot:focus-visible,
a:focus-visible {
  outline: 2px solid #d7b984;
  outline-offset: 5px;
}

.slide-count {
  margin-left: 10px;
  font-size: 10px;
  letter-spacing: 0.1em;
}

.hero-caption {
  position: absolute;
  bottom: 53px;
  left: 7.2%;
  color: rgb(255 255 255 / 72%);
  font-size: 9px;
  letter-spacing: 0.2em;
}

.intro,
.closing-note {
  position: relative;
  display: flex;
  min-height: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px 24px;
  text-align: center;
  background: #f6f5f0;
}

.intro .eyebrow,
.closing-note .eyebrow {
  margin-bottom: 20px;
  color: #927d58;
}

.intro h2,
.closing-note h2 {
  margin: 0;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: clamp(27px, 4vw, 42px);
  font-weight: 300;
  letter-spacing: 0.1em;
  line-height: 1.85;
}

.intro > p:last-of-type {
  margin: 18px 0 0;
  color: #78817a;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.04em;
  line-height: 2.2;
}

.intro-mark {
  position: absolute;
  right: 12%;
  bottom: 55px;
  color: #c2b494;
  font-size: 22px;
}

.stories {
  background: #25372f;
}

.story {
  position: relative;
  display: flex;
  min-height: 610px;
  align-items: center;
  overflow: hidden;
  color: #fff;
  background: #47584c;
}

.story:nth-child(even) {
  justify-content: flex-end;
}

.story-image,
.story-overlay {
  position: absolute;
  inset: 0;
}

.story-image {
  background-attachment: fixed;
  background-size: cover;
}

.story-overlay {
  background: linear-gradient(90deg, rgb(20 33 28 / 66%) 0%, rgb(20 33 28 / 38%) 48%, rgb(20 33 28 / 11%) 100%);
}

.story:nth-child(even) .story-overlay {
  background: linear-gradient(270deg, rgb(20 33 28 / 66%) 0%, rgb(20 33 28 / 38%) 48%, rgb(20 33 28 / 11%) 100%);
}

.story-content {
  position: relative;
  width: min(490px, 80%);
  margin-left: 13.4%;
  padding: 55px 0;
}

.story:nth-child(even) .story-content {
  margin-right: 13.4%;
  margin-left: 0;
}

.story-number {
  color: #d7b984;
  font-size: 11px;
  letter-spacing: 0.16em;
}

.story-number span {
  margin-left: 8px;
  color: rgb(255 255 255 / 66%);
  font-size: 9px;
}

.story-content h2 {
  margin: 25px 0 18px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: clamp(34px, 4.6vw, 55px);
  font-weight: 300;
  letter-spacing: 0.08em;
  line-height: 1.7;
  white-space: pre-line;
}

.story-content p {
  max-width: 375px;
  margin: 0;
  color: rgb(255 255 255 / 81%);
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.04em;
  line-height: 2.2;
}

.closing-note {
  min-height: 360px;
}

.back-to-top {
  display: flex;
  gap: 18px;
  align-items: center;
  margin-top: 27px;
  color: #59665d;
  font-size: 11px;
  letter-spacing: 0.1em;
}

.back-to-top span {
  font-size: 16px;
}

.site-footer {
  display: flex;
  min-height: 102px;
  align-items: center;
  justify-content: space-between;
  padding: 24px 7.2%;
  color: #e8e9e2;
  background: #25372f;
}

.footer-wordmark {
  font-size: 19px;
}

.site-footer p {
  margin: 0;
  color: rgb(232 233 226 / 70%);
  font-size: 10px;
  letter-spacing: 0.08em;
}

.footer-note {
  color: rgb(232 233 226 / 55%);
  font-size: 9px;
  letter-spacing: 0.16em;
}

@keyframes arrive {
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 700px) {
  .site-header {
    padding: 25px 7%;
  }

  .wordmark {
    font-size: 20px;
  }

  .hero {
    min-height: 680px;
    min-height: 100svh;
  }

  .hero-content {
    margin: 25px 8% 45px;
  }

  .hero-content h1 {
    font-size: clamp(43px, 12vw, 68px);
  }

  .hero-description {
    max-width: 300px;
    font-size: 12px;
    line-height: 1.9;
  }

  .carousel-controls {
    right: 6%;
    bottom: 39px;
    gap: 9px;
  }

  .hero-caption {
    bottom: 48px;
    left: 6%;
    font-size: 8px;
  }

  .intro,
  .closing-note {
    min-height: 350px;
  }

  .intro > p:last-of-type {
    max-width: 310px;
    font-size: 11px;
  }

  .desktop-break {
    display: none;
  }

  .story {
    min-height: 540px;
  }

  .story-image {
    background-attachment: scroll;
  }

  .story-content,
  .story:nth-child(even) .story-content {
    width: 80%;
    margin: 0 8%;
  }

  .story-overlay,
  .story:nth-child(even) .story-overlay {
    background: linear-gradient(90deg, rgb(20 33 28 / 68%), rgb(20 33 28 / 22%));
  }

  .site-footer {
    min-height: 90px;
    padding: 20px 6%;
  }

  .footer-note {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
